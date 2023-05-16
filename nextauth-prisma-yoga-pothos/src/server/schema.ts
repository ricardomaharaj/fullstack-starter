import { builder } from '~/server/builder'
import fs from 'node:fs'
import { lexicographicSortSchema, printSchema } from 'graphql'

import './types/user'

import './queries/user'

export const schema = builder.toSchema()

const schemaAsString = printSchema(lexicographicSortSchema(schema))
fs.writeFileSync('./gql/schema.gql', schemaAsString)
