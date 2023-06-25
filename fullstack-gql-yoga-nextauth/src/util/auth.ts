import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { AuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { env } from '~/server/env'
import { prisma } from '~/server/prisma'
import { YogaServerContext } from '~/types/yoga-context'

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

export function getAuthServerSession(args: YogaServerContext) {
  const { req, res } = args
  return getServerSession(req, res, authOpts)
}
