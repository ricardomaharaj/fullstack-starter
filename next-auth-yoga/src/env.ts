import { z } from 'zod'

const zEnv = z.object({
  NODE_ENV: z
    .enum(['development', 'production'])
    .optional()
    .default('development'),
  GOOGLE_CLIENT_ID: z.string().nonempty(),
  GOOGLE_CLIENT_SECRET: z.string().nonempty(),
})

export const env = zEnv.parse(process.env)
