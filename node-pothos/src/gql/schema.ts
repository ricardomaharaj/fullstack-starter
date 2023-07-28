import { builder } from './builder'
import { printSchema, lexicographicSortSchema } from 'graphql'
import { writeFileSync } from 'node:fs'
import { env } from '../env'

import './mutation/task'
import './query/task'
import './type/task'

export const schema = builder.toSchema()

if (env.NODE_ENV === 'development') {
  writeFileSync(
    './gql/schema.gql',
    printSchema(lexicographicSortSchema(schema)),
  )
}
