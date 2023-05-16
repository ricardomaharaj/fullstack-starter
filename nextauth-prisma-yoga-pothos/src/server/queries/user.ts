import { builder } from '~/server/builder'
import { prisma } from '~/server/prisma'

builder.queryFields((t) => ({
  users: t.prismaField({
    type: ['User'],
    args: {
      skip: t.arg.int({ required: true, defaultValue: 0 }),
      take: t.arg.int({ required: true, defaultValue: 10 }),
    },
    resolve: async (query, _, { skip, take }) => {
      return await prisma.user.findMany({ skip, take, ...query })
    },
  }),
  user: t.prismaField({
    type: 'User',
    args: { userId: t.arg.string({ required: true }) },
    resolve: async (query, _, { userId }) => {
      return await prisma.user.findUniqueOrThrow({
        where: { id: userId },
        ...query,
      })
    },
  }),
}))
