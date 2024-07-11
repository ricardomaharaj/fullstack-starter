import { signIn, signOut, useSession } from 'next-auth/react'

export function Header() {
  const session = useSession()
  const auth = session.status === 'authenticated'

  function handleSignOut() {
    signOut()
  }

  function handleSignIn() {
    signIn()
  }

  return (
    <>
      <div>
        {auth ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
      </div>
    </>
  )
}
