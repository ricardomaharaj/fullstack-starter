import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'fs'
import { env } from './env.js'

const typeDefs = readFileSync('./schema.gql').toString('utf-8')

const resolvers = {
  Query: {},
  Mutation: {},
}

const apollo = new ApolloServer({ typeDefs, resolvers })

const { url } = await startStandaloneServer(apollo, {
  listen: { port: env.PORT },
})

console.log(url)
