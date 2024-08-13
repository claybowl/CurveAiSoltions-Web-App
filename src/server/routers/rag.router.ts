import { Trpc } from '@/core/trpc/server'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { RagService } from '../libraries/rag'

/**
 * @provider RagRouter
 * @description An AI RAG library to load a file and query it.
 * @function {({ url: string, tags?: string[] }) => Promise<{ id: string, key: string }>} loadFile - Send a file url that will be downloaded and stored in the RAG context with optional tags. It returns the id in the database and the key which is a hash of the url.
 * @function {({ prompt: string, history?: string[], tags?: string[] }) => Promise<{ answer: string}>} generateText - Send a prompt and get an AI answer to the prompt. Can also receive a history of messages for continous conversation with the AI. Can also receive an array of tags to narrow down the RAG context (the file key returned from the loadFile function can be given here to target a specific file).
 * @usage `const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation(); const { mutateAsync: generateText } = Api.rag.generateText.useMutation(); const { key } = loadFile({ url }); generateText({ prompt: 'What is the title of the document?', tags: [key] }).then(response => response.answer);`
 * @isImportOverriden false
 * @isAlwaysIncluded false
 * @import import { Api } from '@/core/trpc'
 */
export const RagRouter = Trpc.createRouter({
  loadFile: Trpc.procedure
    .input(z.object({ url: z.string(), tags: z.array(z.string()).optional() }))
    .mutation(async ({ input }) => {
      try {
        const ragVector = await RagService.createAndSaveFile(
          input.url,
          input.tags,
        )

        return { id: ragVector.id, key: ragVector.key }
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Could not load file / web page: ${error.message}`,
        })
      }
    }),

  generateText: Trpc.procedure
    .input(
      z.object({
        prompt: z.string(),
        history: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const answer = await RagService.query(
          input.prompt,
          input.history,
          input.tags,
        )

        return { answer }
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Could not query: ${error.message}`,
        })
      }
    }),
})
