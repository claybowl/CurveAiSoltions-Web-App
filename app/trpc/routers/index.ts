import { Trpc } from '@/core/trpc/base'
import { PwaServer } from '@/plugins/pwa/server'

export const router = Trpc.createRouter({
  pwa: PwaServer.trpcRouter,
})
