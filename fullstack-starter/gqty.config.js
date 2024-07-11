/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
module.exports = {
  react: true,
  scalarTypes: { DateTime: 'Date | string' },
  introspection: {
    endpoint: './gql/schema.gql',
    headers: {},
  },
  endpoint: '/api/gql',
  destination: './src/gqty/index.ts',
  subscriptions: false,
  javascriptOutput: false,
  enumsAsConst: true,
}
