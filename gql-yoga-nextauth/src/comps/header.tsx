import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export function Header() {
  const session = useSession()
  const auth = session.status === 'authenticated'

  return (
    <>
      <Link href='/'>Home</Link>
      <div>
        {auth ? (
          <button onClick={() => signOut()}>Log Out</button>
        ) : (
          <button onClick={() => signIn('google')}>Log In</button>
        )}
      </div>
    </>
  )
}
