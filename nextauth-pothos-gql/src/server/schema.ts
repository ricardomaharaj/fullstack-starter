import { lexicographicSortSchema, printSchema } from 'graphql'
import fs from 'node:fs'
import { builder } from '~/server/builder'

import './query/user'
import './type/user'

export const schema = builder.toSchema()

const schemaAsString = printSchema(lexicographicSortSchema(schema))
fs.writeFileSync('./gql/schema.gql', schemaAsString)
