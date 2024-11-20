import { ChatCompletionMessageParam } from 'openai/resources/chat/completions'

export type SystemMessage = {
  role: 'system'
  name: string
  content: string
}

export type UserMessage = {
  role: 'user'
  content: Array<{
    type: 'text' | 'image_url'
    text?: string
    image_url?: { url: string }
  }>
}

export type AssistantMessage = {
  role: 'assistant'
  content: string
}

export type OpenAIMessage = SystemMessage | UserMessage | AssistantMessage

export type OpenAIMessageParam = ChatCompletionMessageParam
