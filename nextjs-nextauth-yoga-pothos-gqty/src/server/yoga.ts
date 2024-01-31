import { createYoga } from 'graphql-yoga'
import { env } from 'process'
import { schema } from '~/server/gql/schema'
import { getAuthServerSession } from '~/server/util/auth'
import { YogaServer } from '~/types/yoga'

class MyRequest extends Request {
  constructor(input: RequestInfo, init: RequestInit) {
    /*
      needed to avoid errors in node 18 and up
    */
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
    return { user: session?.user }
  },
  fetchAPI: {
    Request: MyRequest,
    Response,
  },
})
