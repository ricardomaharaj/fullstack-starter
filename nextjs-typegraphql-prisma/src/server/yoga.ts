import 'reflect-metadata'

import { resolvers } from '@generated/type-graphql'
import { createYoga } from 'graphql-yoga'
import { buildSchemaSync } from 'type-graphql'
import { prisma } from '~/server/prisma'

class CustomRequest extends Request {
  constructor(input: RequestInfo, init: RequestInit) {
    /*
      needed to avoid errors in node 18 and up
    */
    // @ts-expect-error
    super(input, { ...init, duplex: 'half' })
  }
}

const schema = buildSchemaSync({
  resolvers,
  emitSchemaFile: './gql/schema.gql',
})

export const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/gql',
  context: () => ({ prisma }),
  fetchAPI: {
    Request: CustomRequest,
    Response,
  },
})
