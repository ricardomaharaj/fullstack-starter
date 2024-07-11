import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextApiRequest, NextApiResponse } from 'next'
import { AuthOptions, getServerSession } from 'next-auth'
import NextAuth from 'next-auth/next'
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
      return session
    },
  },
}

export const nextAuth = NextAuth(authOpts)

export function getSession(args: {
  req: NextApiRequest
  res: NextApiResponse
}) {
  const { req, res } = args
  return getServerSession(req, res, authOpts)
}
