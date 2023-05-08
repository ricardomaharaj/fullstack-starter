import { createSchema, createYoga } from 'graphql-yoga'

const schema = createSchema({
  typeDefs: `
    type Query {
      now: String
    }
  `,
  resolvers: {
    Query: {
      now: () => new Date().toString(),
    },
  },
})

const yoga = createYoga({ schema, graphqlEndpoint: '/api/gql' })

export default yoga
