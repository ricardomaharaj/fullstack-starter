import { builder } from '~/server/builder'
import { Users } from '~/server/prisma'
import { GQLError } from '~/util/gql-error'

builder.queryFields((t) => ({
  users: t.prismaField({
    type: ['User'],
    args: {
      skip: t.arg.int(),
      take: t.arg.int(),
    },
    resolve: async (query, _, { skip, take }) => {
      return await Users.findMany({
        skip: skip ?? 0,
        take: take ?? 10,
        ...query,
      })
    },
  }),
  user: t.prismaField({
    type: 'User',
    args: { userId: t.arg.string({ required: true }) },
    resolve: async (query, _, { userId }) => {
      const user = await Users.findUnique({ where: { id: userId }, ...query })
      if (!user) throw GQLError(404)
      return user
    },
  }),
}))
