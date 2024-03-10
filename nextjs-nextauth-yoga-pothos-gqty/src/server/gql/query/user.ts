import { builder } from '~/server/gql/builder'
import { userListArgs, userListQuery } from '~/server/gql/list/user'
import { prisma } from '~/server/prisma'
import { GQLError } from '~/server/util/gql-error'

builder.queryFields((t) => ({
  user: t.prismaField({
    type: 'User',
    args: {
      userId: t.arg.string({ required: true }),
    },
    resolve: async (query, parent, args, ctx) => {
      const user = await prisma.user.findUnique({
        where: { id: args.userId },
      })

      if (!user) throw GQLError(404)

      return user
    },
  }),
  users: t.prismaField({
    type: ['User'],
    args: userListArgs,
    resolve: async (query, parent, args, ctx) => {
      const users = await prisma.user.findMany({
        ...userListQuery(args),
        ...query,
      })

      return users
    },
  }),
}))
