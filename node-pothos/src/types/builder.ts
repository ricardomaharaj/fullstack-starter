import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { DateTime } from './date-time'

export type TBuilder = {
  PrismaTypes: PrismaTypes
  Scalars: {
    DateTime: {
      Input: DateTime
      Output: DateTime
    }
  }
}
