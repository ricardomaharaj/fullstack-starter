import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import {
  createClient as createUrql,
  Provider as UrqlProvider,
  fetchExchange,
} from 'urql'
import { graphCache } from '~/util/graph-cache'
import type { SessionProp } from '~/util/session-prop'

const urql = createUrql({
  url: '/api/gql',
  exchanges: [graphCache, fetchExchange],
})

const App = (props: AppProps<SessionProp>) => {
  const { Component, pageProps } = props
  const { session } = pageProps

  return (
    <SessionProvider session={session}>
      <UrqlProvider value={urql}>
        <Component {...pageProps} />
      </UrqlProvider>
    </SessionProvider>
  )
}

export default App
