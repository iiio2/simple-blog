import { createNuxtApiHandler } from 'trpc-nuxt'
import { publicProcedure, router } from '~/server/trpc/trpc'
import { prisma } from '~/prisma/client'
import { z } from 'zod'

export const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    const posts = await prisma.post.findMany()
    return {
      posts,
    }
  }),
})

export type AppRouter = typeof appRouter

export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
