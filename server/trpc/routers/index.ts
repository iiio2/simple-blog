import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { testRouter } from './hello'

export const appRouter = router({
  testRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
