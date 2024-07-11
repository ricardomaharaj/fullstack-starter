import type PrismaTypes from '@pothos/plugin-prisma/generated'
import type { DateTime } from '~/types/date-time'
import type { YogaContext } from '~/types/yoga'

export type TBuilder = {
  DefaultFieldNullability: false
  Context: YogaContext
  PrismaTypes: PrismaTypes
  Scalars: {
    DateTime: {
      Input: DateTime
      Output: DateTime
    }
  }
}
