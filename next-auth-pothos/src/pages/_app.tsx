import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Urql } from '~/util/urql'

export default function App(props: AppProps<{ session: Session }>) {
  const { Component, pageProps } = props
  const { session } = pageProps

  return (
    <SessionProvider session={session}>
      <Urql>
        <Component {...pageProps} />
      </Urql>
    </SessionProvider>
  )
}
