import { createYoga } from 'graphql-yoga'
import { YogaContext } from '~/types/yoga'
import { getAuthServerSession } from '~/util/auth'
import { GraphQLError } from 'graphql'
import { env } from '~/env'
import { schema } from '~/server/schema'

const yoga = createYoga<YogaContext>({
  schema,
  graphqlEndpoint: '/api/gql',
  context: async ({ req, res }) => {
    if (env.NODE_ENV === 'development') return { user: {} }
    const session = await getAuthServerSession({ req, res })
    if (!session || !session.user) throw new GraphQLError('unauthorized')
    return { user: session.user }
  },
})

export default yoga
