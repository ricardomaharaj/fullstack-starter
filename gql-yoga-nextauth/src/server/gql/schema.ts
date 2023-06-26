import { lexicographicSortSchema, printSchema } from 'graphql'
import fs from 'node:fs'
import { env } from '~/server/env'
import { builder } from '~/server/gql/builder'

import './query/user'
import './type/user'

export const schema = builder.toSchema()

if (env.NODE_ENV === 'development') {
  fs.writeFileSync(
    './gql/schema.gql',
    printSchema(lexicographicSortSchema(schema)),
  )
}
