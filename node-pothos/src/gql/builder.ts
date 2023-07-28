import Builder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import { prisma } from '../prisma'
import { TBuilder } from '../types/builder'
import { DateTimeResolver } from 'graphql-scalars'

export const builder = new Builder<TBuilder>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.addScalarType('DateTime', DateTimeResolver, {})

builder.queryType({})
builder.mutationType({})
