import { GraphQLError } from 'graphql'
import { createYoga } from 'graphql-yoga'
import { env } from '~/env'
import { schema } from '~/server/schema'
import { YogaContext } from '~/types/yoga'
import { getAuthServerSession } from '~/util/auth'

const yoga = createYoga<YogaContext>({
  schema,
  graphqlEndpoint: '/api/gql',
  context: async ({ req, res }) => {
    if (env.NODE_ENV === 'development') return {}
    const session = await getAuthServerSession({ req, res })
    if (!session || !session.user) throw new GraphQLError('unauthorized')
    return { user: session.user }
  },
})

export default yoga
