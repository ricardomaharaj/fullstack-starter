import type * as Pothos from '@pothos/core'
import type { Prisma } from '@prisma/client'
import { paginateArgs } from '~/server/gql/args/paginate'
import { builder } from '~/server/gql/builder'
import * as qu from '~/server/util/query-utils'

const userListSort = builder.inputType('UserListSort', {
  fields: (t) => ({
    createdAt: t.boolean(),
  }),
})

const userListFilter = builder.inputType('UserListFilter', {
  fields: (t) => ({
    name: t.string(),
  }),
})

const userListSearch = builder.inputType('UserListSearch', {
  fields: (t) => ({
    name: t.string(),
  }),
})

export const userListArgs = builder.args((t) => ({
  ...paginateArgs,
  sort: t.field({ type: userListSort }),
  filter: t.field({ type: userListFilter }),
  search: t.field({ type: userListSearch }),
}))

export const userListQuery = (
  args: Pothos.InputShapeFromFields<typeof userListArgs>,
) => {
  const query: Prisma.UserFindManyArgs = {
    skip: args.skip ?? 0,
    take: args.take ?? 10,
    where: {
      AND: [
        { name: qu.strContains(args.filter?.name) },
        {
          OR: [{ name: qu.strContains(args.search?.name) }],
        },
      ],
    },
    orderBy: {
      createdAt: qu.boolSort(args.sort?.createdAt),
    },
  }

  return query
}
