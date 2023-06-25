import { ReactNode } from 'react'
import { cacheExchange, createClient, fetchExchange, Provider } from 'urql'

const client = createClient({
  url: '/api/gql',
  exchanges: [cacheExchange, fetchExchange],
})

export const Urql = (props: { children: ReactNode }) => (
  <Provider value={client}>{props.children}</Provider>
)
