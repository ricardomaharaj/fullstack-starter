import { type AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { api } from '@/utils/api'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default api.withTRPC(App)
