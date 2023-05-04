import { createSchema, createYoga } from 'graphql-yoga'
import fs from 'node:fs'
import { createServer } from 'node:http'

const typeDefs = fs.readFileSync('./gql/schema.gql').toString('utf8')
const resolvers = {
  Query: {
    now: async () => Date.now(),
  },
}

const schema = createSchema({ typeDefs, resolvers })
const yoga = createYoga({
  schema,
  graphqlEndpoint: '/',
  graphiql: process.env.NODE_ENV !== 'production',
})
const server = createServer(yoga)
server.listen(4000, () => console.log('http://localhost:4000/'))
