import { Trpc } from '@/core/trpc/server'
import { z } from 'zod'
import { OpenaiService } from '../libraries/openai'

const checkOpenaiService = () => {
  if (!OpenaiService.isActive()) {
    throw new Error(
      'OpenAI service is not active. Please check your API key and configuration.',
    )
  }
}

export const ChatbotRouter = Trpc.createRouter({
  generateResponse: Trpc.procedure
    .input(
      z.object({
        prompt: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      checkOpenaiService()

      const response = await OpenaiService.generateText(input.prompt)
      return { response }
    }),
})
