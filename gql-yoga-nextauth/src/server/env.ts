import { z } from 'zod'

export const env = z
  .object({
    NODE_ENV: z.enum(['development', 'production']),

    DATABASE_URL: z.string(),

    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    NEXTAUTH_URL: z.string(),
    NEXTAUTH_SECRET: z.string(),
  })
  .parse(process.env)
