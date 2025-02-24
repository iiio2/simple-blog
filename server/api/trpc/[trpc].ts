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
  addPost: publicProcedure.mutation(async ({ input }: { input: any }) => {
    await prisma.post.create({
      data: {
        title: input.title,
        content: input.content,
      },
    })
  }),
})

export type AppRouter = typeof appRouter

export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
