import { builder } from '~/server/gql/builder'
import fs from 'node:fs'
import { printSchema, lexicographicSortSchema } from 'graphql'
import { env } from '~/server/env'

import './mutation/task'
import './query/task'
import './type/task'

export const schema = builder.toSchema()

if (env.NODE_ENV === 'development') {
  fs.writeFileSync(
    './gql/schema.gql',
    printSchema(lexicographicSortSchema(schema)),
  )
}
