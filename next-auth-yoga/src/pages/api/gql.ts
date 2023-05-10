import { createSchema, createYoga } from 'graphql-yoga'
import fs from 'node:fs'
import { YogaContext } from '~/types/yoga'
import { getAuthServerSession } from '~/util/auth'
import { GraphQLError } from 'graphql'

const schema = createSchema<YogaContext>({
  typeDefs: fs.readFileSync('./gql/schema.gql').toString('utf8'),
  resolvers: {
    Query: {
      now: () => new Date().toString(),
    },
  },
})

const yoga = createYoga<YogaContext>({
  schema,
  graphqlEndpoint: '/api/gql',
  context: async ({ req, res }) => {
    const session = await getAuthServerSession({ req, res })
    if (!session || !session.user) throw new GraphQLError('unauthorized')
    return { user: session.user }
  },
})

export default yoga
