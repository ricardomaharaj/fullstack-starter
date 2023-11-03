import 'reflect-metadata'
import { createYoga } from 'graphql-yoga'
import { buildSchemaSync } from 'type-graphql'
import { prisma } from '~/server/prisma'
import { resolvers } from '@generated/type-graphql'

const schema = buildSchemaSync({
  resolvers,
  emitSchemaFile: './gql/schema.gql',
})

export const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/gql',
  context: () => ({ prisma }),
})
