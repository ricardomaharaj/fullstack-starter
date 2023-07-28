import { prisma } from '../../prisma'
import { GQLError } from '../../util/gql-error'
import { builder } from '../builder'

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
