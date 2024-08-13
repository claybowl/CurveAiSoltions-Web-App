import { DatabaseUnprotected } from '@/core/database/internal/unprotected'
import { FileHelper } from '@/core/helpers/file'
import { Utility } from '@/core/helpers/utility'
import { HNSWLib } from '@langchain/community/vectorstores/hnswlib'
import { AIMessage, BaseMessage, HumanMessage } from '@langchain/core/messages'
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from '@langchain/core/prompts'
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai'
import { RagVector } from '@prisma/client'
import axios from 'axios'
import * as cheerio from 'cheerio'
import * as crypto from 'crypto'
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { createHistoryAwareRetriever } from 'langchain/chains/history_aware_retriever'
import { createRetrievalChain } from 'langchain/chains/retrieval'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import mammoth from 'mammoth'
import Papaparse from 'papaparse'
import PdfParse from 'pdf-parse'

const downloadFile = async (url: string) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    const dataBuffer = Buffer.from(response.data, 'binary')
    return dataBuffer
  } catch (error) {
    throw new Error(`Could not dowload file at "${url}"`)
  }
}

const downloadWebPage = async (url: string) => {
  try {
    const response = await axios.get(url)

    const $ = cheerio.load(response.data)

    const textContent = $('body').text()

    return textContent.split('\n').filter(line => Utility.isDefined(line))
  } catch (error) {
    throw new Error(`Could not fetch web page: ${error.message}`)
  }
}

const parsePDF = async (buffer: Buffer) => {
  const data = await PdfParse(buffer)

  return data.text.split('\n').filter(line => Utility.isDefined(line))
}

const parseCSV = async (buffer: Buffer): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    Papaparse.parse(buffer.toString(), {
      complete: results => {
        const content = JSON.stringify(results)
        const lines = content
          .split('\n')
          .filter(line => Utility.isDefined(line))
        resolve(lines)
      },
      error: error => {
        reject(error)
      },
    })
  })
}

const parseDOCX = async (buffer: Buffer) => {
  const result = await mammoth.extractRawText({ buffer: buffer })
  return result.value.split('\n').filter(line => Utility.isDefined(line))
}

const buildDocuments = async (lines: string[]) => {
  const MAX_LINES = 10000 // Security to avoid loading huge files

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 100,
    separators: ['\n'],
  })

  const texts = lines.slice(0, MAX_LINES)

  const documents = await textSplitter.createDocuments([texts.join('\n')])

  return documents
}

const createHash = (input: string) => {
  const hash = crypto.createHash('sha256').update(input).digest('base64')
  return hash.slice(0, 8)
}

const createRetriever = async (vectorStore: HNSWLib, model: ChatOpenAI) => {
  const retriever = vectorStore.asRetriever()

  const contextualizeQSystemPrompt = `
Given a chat history and the latest user question
which might reference context in the chat history,
formulate a standalone question which can be understood
without the chat history. Do NOT answer the question, just
reformulate it if needed and otherwise return it as is.`

  const contextualizeQPrompt = ChatPromptTemplate.fromMessages([
    ['system', contextualizeQSystemPrompt],
    new MessagesPlaceholder('chat_history'),
    ['human', '{input}'],
  ])

  const historyAwareRetriever = await createHistoryAwareRetriever({
    llm: model,
    retriever,
    rephrasePrompt: contextualizeQPrompt,
  })

  return historyAwareRetriever
}

const createPromptSystem = (personality?: string) => {
  const personalityDefault =
    `You are an assistant for question-answering tasks. Use
  the following pieces of retrieved context to answer the
  question. If you don't know the answer, just say that you
  don't know. Use three sentences maximum and keep the answer
  concise.`.trim()

  const system = `
${personality ?? personalityDefault}
\n\n
{context}`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', system],
    new MessagesPlaceholder('chat_history'),
    ['human', '{input}'],
  ])

  return prompt
}

const getVectors = (vectorStore: HNSWLib) => {
  const index = vectorStore.index

  const vectors = []

  for (let i = 0; i < index.getCurrentCount(); i++) {
    vectors.push(index.getPoint(i))
  }

  return vectors
}

const createModel = () => {
  try {
    return new ChatOpenAI({
      openAIApiKey: process.env.SERVER_OPENAI_API_KEY,
      model: 'gpt-3.5-turbo-0125',
      temperature: 0,
    })
  } catch (error) {
    return
  }
}

const createEmbeddings = () => {
  try {
    return new OpenAIEmbeddings({
      openAIApiKey: process.env.SERVER_OPENAI_API_KEY,
    })
  } catch (error) {
    return
  }
}

class Service {
  private model = createModel()

  private embeddings = createEmbeddings()

  private pathStorage = FileHelper.getRoot() + `/tmp/rag/vectors`

  private vectorStore: HNSWLib

  async createAndSaveFile(url: string, tags: string[] = []) {
    const key = createHash(url)

    const ragVectorFound = await DatabaseUnprotected.ragVector.findFirst({
      where: {
        key,
      },
    })

    if (ragVectorFound) {
      console.log(`Vector already exists for "${url}".`)

      return ragVectorFound
    }

    const type = FileHelper.getFileType(url)

    let lines: string[]

    if (type === 'unknown') {
      lines = await downloadWebPage(url)
    } else {
      const buffer = await downloadFile(url)

      switch (type) {
        case 'pdf':
          lines = await parsePDF(buffer)
          break
        case 'csv':
          lines = await parseCSV(buffer)
          break
        case 'docx':
          lines = await parseDOCX(buffer)
          break
        default:
          throw new Error(
            `File type is not supported. Supported types are PDF, DOCX, CSV and web pages`,
          )
      }
    }

    const documents = await buildDocuments(lines)

    const vectorStore = await HNSWLib.fromDocuments(documents, this.embeddings)

    const vectors = getVectors(vectorStore)

    const vectorsBuffer = Buffer.from(JSON.stringify(vectors))
    const documentsBuffer = Buffer.from(JSON.stringify(documents))

    const ragVector = await DatabaseUnprotected.ragVector.create({
      data: {
        key,
        url,
        vectors: vectorsBuffer,
        documents: documentsBuffer,
        tags: [key, ...tags],
      },
    })

    const { vectorStore: vectorStoreGlobal } =
      await this.createVectorStoreGlobal()

    this.vectorStore = vectorStoreGlobal

    return ragVector
  }

  /**
   * ? If tags are provided, we create a temporary vector store with the right subset of vectors.
   * ? Otherwise, we use the global store.
   */
  async query(prompt: string, history: string[] = [], tags: string[] = []) {
    let vectorStore: HNSWLib
    let pathStorageToClean: string

    const isTemporary = tags.length > 0

    if (isTemporary) {
      console.log('Creating vector store by tags...')
      const result = await this.createVectorStoreByTags(tags)

      vectorStore = result.vectorStore
      pathStorageToClean = result.pathStorage
    } else if (!this.vectorStore) {
      console.log('Refreshing global vector store...')

      const result = await this.createVectorStoreGlobal()

      this.vectorStore = result.vectorStore
      vectorStore = result.vectorStore
    } else {
      console.log('Using global vector store...')
      vectorStore = this.vectorStore
    }

    const retriever = await createRetriever(vectorStore, this.model)

    const promptSystem = createPromptSystem()

    const questionAnswerChain = await createStuffDocumentsChain({
      llm: this.model,
      prompt: promptSystem,
    })

    const ragChain = await createRetrievalChain({
      retriever: retriever,
      combineDocsChain: questionAnswerChain,
    })

    const MAX_HISTORY = 20
    const chat_history: BaseMessage[] = history
      .slice(0, MAX_HISTORY)
      .map((content, index) =>
        index % 2 === 0 ? new HumanMessage(content) : new AIMessage(content),
      )

    const response = await ragChain.invoke({
      chat_history,
      input: prompt,
    })

    if (pathStorageToClean) {
      FileHelper.deleteFolder(pathStorageToClean)
    }

    return response.answer
  }

  /**
   * Vector Store to query all files from the RAG context
   */
  private async createVectorStoreGlobal() {
    const ragVectors = await DatabaseUnprotected.ragVector.findMany({
      select: {
        id: true,
        key: true,
        url: true,
        tags: true,
        vectors: true,
        documents: true,
      },
    })

    if (ragVectors.length === 0) {
      throw new Error(`no rag vectors found`)
    }

    const pathVectorStore = `${this.pathStorage}/global`

    const vectorStore = await this.createVectorStore(
      ragVectors,
      pathVectorStore,
    )

    return { vectorStore, pathStorage: pathVectorStore }
  }

  /**
   * Vector Store to query some files from the RAG context filtered by tags
   */
  private async createVectorStoreByTags(tags: string[]) {
    const ragVectors = await DatabaseUnprotected.ragVector
      .findMany({
        select: {
          id: true,
          key: true,
          url: true,
          tags: true,
          vectors: true,
          documents: true,
        },
      })
      .then(items =>
        items.filter(item => item.tags.some(tag => tags.includes(tag))),
      )

    if (ragVectors.length === 0) {
      throw new Error(
        `no rag vectors found matching tags: ${tags.map(tag => `"${tag}"`).join(', ')}`,
      )
    }

    const id = Utility.getUUID()

    const pathVectorStore = `${this.pathStorage}/${id}`

    const vectorStore = await this.createVectorStore(
      ragVectors,
      pathVectorStore,
    )

    return {
      vectorStore,
      pathStorage: pathVectorStore,
    }
  }

  private async createVectorStore(
    ragVectors: RagVector[],
    pathStorage: string,
  ) {
    const data = await Promise.all(
      ragVectors.map(ragVector => {
        const vectorsAsString = ragVector.vectors.toString('utf-8')
        const documentsAsString = ragVector.documents.toString('utf-8')

        const vectors = JSON.parse(vectorsAsString)
        const documents = JSON.parse(documentsAsString)

        return [vectors, documents]
      }),
    )

    FileHelper.deleteFolder(pathStorage)

    const vectorStore = await HNSWLib.fromDocuments([], this.embeddings)

    for (const [vectors, documents] of data) {
      vectorStore.addVectors(vectors, documents)
    }

    await vectorStore.save(pathStorage)

    return vectorStore
  }
}

class Singleton {
  static service = new Service()
}

export const RagService = Singleton.service
