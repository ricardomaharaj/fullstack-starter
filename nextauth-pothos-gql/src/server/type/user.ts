import { builder } from '~/server/builder'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeString('id'),
    name: t.expose('name', { type: 'String', nullable: true }),
    email: t.expose('email', { type: 'String', nullable: true }),
    image: t.expose('image', { type: 'String', nullable: true }),
  }),
})
