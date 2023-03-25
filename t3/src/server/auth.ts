import { type GetServerSidePropsContext } from 'next'
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from 'next-auth'
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/server/db'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession['user']
  }
  interface User {}
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
}

export const getServerAuthSession = ({
  req,
  res,
}: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  return getServerSession(req, res, authOptions)
}
