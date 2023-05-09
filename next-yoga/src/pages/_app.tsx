import type { AppProps } from 'next/app'
import {
  createClient as createUrql,
  Provider as UrqlProvider,
  cacheExchange,
  fetchExchange,
} from 'urql'

const urql = createUrql({
  url: '/api/gql',
  exchanges: [cacheExchange, fetchExchange],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider value={urql}>
      <Component {...pageProps} />
    </UrqlProvider>
  )
}
