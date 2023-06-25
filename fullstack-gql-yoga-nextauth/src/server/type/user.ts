import { builder } from '~/server/builder'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeString('id'),
    name: t.exposeString('name'),
    email: t.exposeString('email'),
    image: t.exposeString('image'),
  }),
})
