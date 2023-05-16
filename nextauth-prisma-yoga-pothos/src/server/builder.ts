import Builder from '@pothos/core'
import { BuilderType } from '~/types/builder'
import PrismaPlugin from '@pothos/plugin-prisma'
import { prisma } from '~/server/prisma'

export const builder = new Builder<BuilderType>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.queryType({ fields: (t) => ({}) })
