import { createYoga } from 'graphql-yoga'
import { env } from 'process'
import { schema } from '~/server/gql/schema'
import { getAuthServerSession } from '~/server/util/auth'
import { GQLError } from '~/server/util/gql-error'
import { YogaServer } from '~/types/yoga'

/** needed to avoid errors in node 18 and up */
class CustomRequest extends Request {
  constructor(input: RequestInfo, init: RequestInit) {
    // @ts-expect-error
    super(input, { ...init, duplex: 'half' })
  }
}

export const yoga = createYoga<YogaServer>({
  schema: schema,
  graphqlEndpoint: '/api/gql',
  graphiql: env.NODE_ENV === 'development',
  context: async ({ req, res }) => {
    const session = await getAuthServerSession({ req, res })
    if (!session) throw GQLError(401)
    return { user: session.user }
  },
  fetchAPI: {
    Request: CustomRequest,
    Response,
  },
})
