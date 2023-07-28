import { createYoga } from 'graphql-yoga'
import { env } from '~/server/env'
import { schema } from '~/server/gql/schema'

const yoga = createYoga({
  schema: schema,
  graphiql: env.NODE_ENV === 'development',
  graphqlEndpoint: '/api/gql',
})

export default yoga
