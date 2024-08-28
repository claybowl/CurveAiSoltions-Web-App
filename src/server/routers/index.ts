import { Trpc } from '@/core/trpc/server'
import { AiRouter } from './ai.router'
import { ChatbotRouter } from './chatbot.router'

export const AppRouter = Trpc.createRouter({
  ai: AiRouter,
  chatbot: ChatbotRouter,
})

export type AppRouterType = typeof AppRouter
