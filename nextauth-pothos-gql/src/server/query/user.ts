import { builder } from '~/server/builder'
import { Users } from '~/server/prisma'

builder.queryFields((t) => ({
  users: t.prismaField({
    type: ['User'],
    args: {
      skip: t.arg.int({ required: true, defaultValue: 0 }),
      take: t.arg.int({ required: true, defaultValue: 10 }),
    },
    resolve: async (query, _, { skip, take }) => {
      return await Users.findMany({ skip, take, ...query })
    },
  }),
  user: t.prismaField({
    type: 'User',
    args: { userId: t.arg.string({ required: true }) },
    resolve: async (query, _, { userId }) => {
      return await Users.findUniqueOrThrow({
        where: { id: userId },
        ...query,
      })
    },
  }),
}))
