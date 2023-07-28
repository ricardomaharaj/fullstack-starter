import { prisma } from '../../prisma'
import { builder } from '../builder'

builder.mutationFields((t) => ({
  createTask: t.prismaField({
    type: 'Task',
    resolve: async (query) => {
      const task = await prisma.task.create({ data: {}, ...query })
      return task
    },
  }),
}))
