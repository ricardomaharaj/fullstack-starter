import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { env } from './env'
import { schema } from './gql/schema'

const yoga = createYoga({
  schema: schema,
  graphiql: env.NODE_ENV === 'development',
  landingPage: false,
  graphqlEndpoint: '/',
})

const server = createServer(yoga)
server.listen({ port: env.PORT }, () =>
  console.log(`http://localhost:${env.PORT}`),
)
