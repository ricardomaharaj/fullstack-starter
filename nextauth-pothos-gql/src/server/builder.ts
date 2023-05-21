import Builder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import { prisma } from '~/server/prisma'
import { BuilderType } from '~/types/builder'

export const builder = new Builder<BuilderType>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.queryType({ fields: () => ({}) })
