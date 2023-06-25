import type { NextApiRequest, NextApiResponse } from 'next'
import type { Session } from 'next-auth'

export type YogaServerContext = {
  req: NextApiRequest
  res: NextApiResponse
}

export type YogaContext = {
  user: Session['user']
}
