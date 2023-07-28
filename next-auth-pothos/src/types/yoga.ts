import type { YogaInitialContext } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Session } from 'next-auth'

export type YogaServer = {
  req: NextApiRequest
  res: NextApiResponse
}

export type YogaContext = {
  user: Session['user']
} & YogaServer &
  YogaInitialContext
