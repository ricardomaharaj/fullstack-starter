import Builder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import { DateTimeResolver } from 'graphql-scalars'
import { prisma } from '~/server/prisma'
import { TBuilder } from '~/types/builder'

export const builder = new Builder<TBuilder>({
  defaultFieldNullability: false,
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.addScalarType('DateTime', DateTimeResolver, {})

builder.queryType({})
// builder.mutationType({})
