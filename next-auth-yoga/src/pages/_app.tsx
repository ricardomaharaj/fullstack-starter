import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import {
  createClient as createUrql,
  Provider as UrqlProvider,
  fetchExchange,
} from 'urql'
import { Session } from 'next-auth'
import { graphCache } from '~/util/graphcache'

const urql = createUrql({
  url: '/api/gql',
  exchanges: [graphCache, fetchExchange],
})

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <UrqlProvider value={urql}>
        <Component {...pageProps} />
      </UrqlProvider>
    </SessionProvider>
  )
}
