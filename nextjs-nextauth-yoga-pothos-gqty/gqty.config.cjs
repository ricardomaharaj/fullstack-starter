/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
module.exports = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: './gql/schema.gql',
    headers: {},
  },
  destination: './src/gqty/index.ts',
  subscriptions: false,
  javascriptOutput: false,
  enumsAsConst: true,
}
