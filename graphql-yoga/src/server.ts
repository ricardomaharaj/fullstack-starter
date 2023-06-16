import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { env } from './env'
import fs from 'node:fs'

const typeDefs = fs.readFileSync('./gql/schema.gql').toString('utf8')

const resolvers = {
  Query: {
    now: async () => {
      return new Date().toString()
    },
  },
}

const schema = createSchema({ typeDefs, resolvers })

const yoga = createYoga({
  schema,
  graphiql: env.NODE_ENV === 'development',
  graphqlEndpoint: '/',
})

const server = createServer(yoga)
server.listen(env.PORT, () => console.log(`http://localhost:${env.PORT}`))
