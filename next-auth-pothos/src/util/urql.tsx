import { ReactNode } from 'react'
import { createClient, fetchExchange, Provider } from 'urql'
import { cacheExchange as createGraphCache } from '@urql/exchange-graphcache'

const graphCache = createGraphCache({})

const client = createClient({
  url: '/api/gql',
  exchanges: [graphCache, fetchExchange],
})

export const Urql = (props: { children: ReactNode }) => (
  <Provider value={client}>{props.children}</Provider>
)
