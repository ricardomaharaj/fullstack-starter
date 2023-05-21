import { PrismaAdapter } from '@next-auth/prisma-adapter'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession, type AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { env } from '~/env'
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

export function getAuthServerSession({
  req,
  res,
}: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  return getServerSession(req, res, authOpts)
}
