import { z } from 'zod'

const zEnv = z.object({
  NODE_ENV: z
    .enum(['development', 'production'])
    .optional()
    .default('development'),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
})

export const env = zEnv.parse(process.env)
