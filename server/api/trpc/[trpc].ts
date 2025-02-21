/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { createNuxtApiHandler } from 'trpc-nuxt'
import { publicProcedure, router } from '~/server/trpc/trpc'
import { z } from 'zod'

export const appRouter = router({
  hello: publicProcedure
    // This is the input schema of your procedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(() => {
      // This is what you're returning to your client
      return {
        greeting: {
          posts: [
            { id: 1, title: 'john doe' },
            { id: 2, title: 'mark john' },
            { id: 3, title: 'adam smith' },
          ],
        },
      }
    }),
})

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
