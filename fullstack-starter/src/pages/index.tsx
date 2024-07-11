import { useSession } from 'next-auth/react'
import { useQuery } from '~/gqty'

export default function Home() {
  const session = useSession()
  const auth = session.status === 'authenticated'

  const q = useQuery()

  return (
    <>
      {auth ? (
        <div>{q.my.name}</div>
      ) : (
        <div>please sign in to fetch data from graphql</div>
      )}
    </>
  )
}
