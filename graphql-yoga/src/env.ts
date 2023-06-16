import 'dotenv/config'
import { z } from 'zod'

export const env = z
  .object({
    NODE_ENV: z.enum(['development', 'production']),
    PORT: z.coerce.number().default(4000),
  })
  .parse(process.env)
