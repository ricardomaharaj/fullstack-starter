import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Header } from '~/components/header/header'
import '~/styles/globals.css'

export default function App(props: AppProps<{ session: Session }>) {
  const { Component, pageProps } = props
  const { session } = pageProps

  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
