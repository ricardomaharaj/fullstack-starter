import { type CreateNextContextOptions } from '@trpc/server/adapters/next'
import { type Session } from 'next-auth'
import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'

import { getServerAuthSession } from '@/server/auth'
import { prisma } from '@/server/db'

type CreateContextOptions = {
  session: Session | null
}

const createInnerTRPCContext = ({ session }: CreateContextOptions) => {
  return { session, prisma }
}

export const createTRPCContext = async ({
  req,
  res,
}: CreateNextContextOptions) => {
  const session = await getServerAuthSession({ req, res })
  return createInnerTRPCContext({ session })
}

const t = initTRPC
  .context<typeof createTRPCContext>()
  .create({ transformer: superjson })

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure

const isAuth = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})

export const authProcedure = t.procedure.use(isAuth)
