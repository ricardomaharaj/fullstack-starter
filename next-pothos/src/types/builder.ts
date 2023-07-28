import type PrismaTypes from '@pothos/plugin-prisma/generated'
import type { DateTime } from '~/types/date-time'

export type TBuilder = {
  PrismaTypes: PrismaTypes
  Scalars: {
    DateTime: {
      Input: DateTime
      Output: DateTime
    }
  }
}
