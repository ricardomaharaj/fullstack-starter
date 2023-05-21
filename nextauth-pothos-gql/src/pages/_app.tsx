import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import {
  Provider as UrqlProvider,
  createClient as createUrql,
  fetchExchange,
} from 'urql'
import '~/style/tw.css'
import { graphCache } from '~/util/graph-cache'

const urql = createUrql({
  url: '/api/gql',
  exchanges: [graphCache, fetchExchange],
})

export default function App(props: AppProps<{ session: Session }>) {
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
