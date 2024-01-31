import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextApiRequest, NextApiResponse } from 'next'
import { AuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { env } from '~/server/env'
import { prisma } from '~/server/prisma'

export const authOpts: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id
      session.user.name = user.name
      session.user.email = user.email
      session.user.image = user.image
      return session
    },
  },
}

export function getAuthServerSession(args: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  const { req, res } = args
  return getServerSession(req, res, authOpts)
}
