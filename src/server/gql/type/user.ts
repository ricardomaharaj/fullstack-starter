import { builder } from '~/server/gql/builder'

builder.prismaObject('User', {
  select: { id: true },
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    email: t.exposeString('email'),
    image: t.exposeString('image', { nullable: true }),

    //
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
  }),
})
