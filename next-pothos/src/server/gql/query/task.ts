import { builder } from '~/server/gql/builder'
import { prisma } from '~/server/prisma'
import { GQLError } from '~/server/util/gql-error'

builder.queryFields((t) => ({
  task: t.prismaField({
    type: 'Task',
    args: { id: t.arg.int({ required: true }) },
    resolve: async (query, _, args) => {
      const task = await prisma.task.findUnique({
        where: { id: args.id },
        ...query,
      })
      if (!task) throw GQLError(404)
      return task
    },
  }),
  tasks: t.prismaField({
    type: ['Task'],
    resolve: async (query) => {
      return await prisma.task.findMany({ ...query })
    },
  }),
}))
