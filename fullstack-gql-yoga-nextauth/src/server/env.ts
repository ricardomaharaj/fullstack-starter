import { z } from 'zod'

const zEnv = z.object({
  NODE_ENV: z.enum(['development', 'production']),

  DATABASE_URL: z.string(),

  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),

  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
})

export const env = zEnv.parse(process.env)
