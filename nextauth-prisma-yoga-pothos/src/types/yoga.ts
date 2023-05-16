import type { YogaInitialContext } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Session } from 'next-auth'

export type YogaContext = {
  req: NextApiRequest
  res: NextApiResponse
  user: Session['user']
} & YogaInitialContext
