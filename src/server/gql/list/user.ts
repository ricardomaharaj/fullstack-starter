import type * as Pothos from '@pothos/core'
import type { Prisma } from '@prisma/client'
import { paginateArgs } from '~/server/gql/args/paginate'
import { builder } from '~/server/gql/builder'
import { queryHelpers as qh } from '~/server/util/query-helpers'

const userListSort = builder.inputType('UserListSort', {
  fields: (t) => ({
    createdAt: t.boolean(),
    updatedAt: t.boolean(),
  }),
})

const userListFilter = builder.inputType('UserListFilter', {
  fields: (t) => ({
    name: t.string(),
    email: t.string(),
  }),
})

const userListSearch = builder.inputType('UserListSearch', {
  fields: (t) => ({
    name: t.string(),
    email: t.string(),
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
    orderBy: {
      createdAt: qh.boolSort(args.sort?.createdAt),
      updatedAt: qh.boolSort(args.sort?.updatedAt),
    },
    where: {
      AND: [
        { name: qh.strContains(args.filter?.name) },
        { email: qh.strContains(args.filter?.email) },
        {
          OR: [
            { name: qh.strContains(args.search?.name) },
            { email: qh.strContains(args.search?.email) },
          ],
        },
      ],
    },
  }

  return query
}
