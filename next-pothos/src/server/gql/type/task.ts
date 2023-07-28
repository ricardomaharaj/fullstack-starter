import { builder } from '~/server/gql/builder'

builder.prismaObject('Task', {
  fields: (t) => ({
    id: t.exposeInt('id'),

    //
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
  }),
})
