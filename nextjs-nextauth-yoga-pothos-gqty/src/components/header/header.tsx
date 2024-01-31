import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
  const session = useSession()
  const auth = session.status === 'authenticated'

  return (
    <>
      {auth && <button onClick={() => signOut()}>Sign Out</button>}
      {!auth && <button onClick={() => signIn()}>Sign In</button>}
    </>
  )
}
