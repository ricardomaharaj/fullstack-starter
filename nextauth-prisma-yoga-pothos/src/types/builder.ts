import type PrismaTypes from '@pothos/plugin-prisma/generated'
import type { YogaContext } from '~/types/yoga'

export type BuilderType = {
  Context: YogaContext
  PrismaTypes: PrismaTypes
}
