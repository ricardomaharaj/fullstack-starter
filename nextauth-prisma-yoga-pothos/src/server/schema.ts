import { builder } from '~/server/builder'
import fs from 'node:fs'
import { lexicographicSortSchema, printSchema } from 'graphql'

import './type/user'
import './query/user'

export const schema = builder.toSchema()

const schemaAsString = printSchema(lexicographicSortSchema(schema))
fs.writeFileSync('./gql/schema.gql', schemaAsString)
