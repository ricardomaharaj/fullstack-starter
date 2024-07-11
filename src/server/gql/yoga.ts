import { createYoga } from 'graphql-yoga'
import { env } from 'process'
import { schema } from '~/server/gql/schema'
import { getSession } from '~/server/util/auth'
import { GQLError } from '~/server/util/gql-error'
import { YogaServer } from '~/types/yoga'

export const yoga = createYoga<YogaServer>({
  schema: schema,
  graphqlEndpoint: '/api/gql',
  graphiql: env.NODE_ENV === 'development',
  context: async ({ req, res }) => {
    const session = await getSession({ req, res })
    if (!session) throw GQLError('Unauthorized')
    return { user: session.user }
  },
})
