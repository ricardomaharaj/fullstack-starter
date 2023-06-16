import { readFileSync } from 'fs'
import { createSchema, createYoga } from 'graphql-yoga'
import { Yoga } from '~/types/yoga'

const typeDefs = readFileSync('./gql/schema.gql').toString('utf8')

const schema = createSchema<Yoga>({
  typeDefs,
  resolvers: {
    Query: {
      now: () => new Date().toString(),
    },
  },
})

const yoga = createYoga<Yoga>({ schema, graphqlEndpoint: '/api/gql' })

export default yoga
