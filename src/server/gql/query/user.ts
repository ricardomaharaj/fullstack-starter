import { builder } from '~/server/gql/builder'
import { userListArgs, userListQuery } from '~/server/gql/list/user'
import { prisma } from '~/server/prisma'
import { GQLError } from '~/server/util/gql-error'

builder.queryFields((t) => ({
  my: t.prismaField({
    description: 'get the current user',
    type: 'User',
    resolve: async (query, parent, args, ctx) => {
      const user = await prisma.user.findUnique({
        where: { id: ctx.user.id },
      })

      if (!user) throw GQLError('Not Found')

      return user
    },
  }),
  user: t.prismaField({
    description: 'get a user by id',
    type: 'User',
    args: {
      userId: t.arg.string({ required: true }),
    },
    resolve: async (query, parent, args, ctx) => {
      const user = await prisma.user.findUnique({
        where: { id: args.userId },
      })

      if (!user) throw GQLError('Not Found')

      return user
    },
  }),
  users: t.prismaField({
    description: 'get a list of users',
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
