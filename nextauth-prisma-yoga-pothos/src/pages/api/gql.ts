import { createYoga } from 'graphql-yoga'
import { YogaContext } from '~/types/yoga'
import { getAuthServerSession } from '~/util/auth'
import { GraphQLError } from 'graphql'
import { schema } from '~/server/schema'

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
