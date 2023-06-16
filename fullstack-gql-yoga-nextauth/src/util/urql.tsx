import { cacheExchange } from '@urql/exchange-graphcache'
import { ReactNode } from 'react'
import { createClient, fetchExchange, Provider } from 'urql'

const graphCache = cacheExchange()

const urqlClient = createClient({
  url: '/api/gql',
  exchanges: [graphCache, fetchExchange],
})

export const Urql = (props: { children: ReactNode }) => (
  <Provider value={urqlClient}>{props.children}</Provider>
)
