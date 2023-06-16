import { GraphQLError } from 'graphql'

const errorCodes = {
  400: 'Bad Request',
  401: 'Unauthorized',
  404: 'Not Found',
}

export function GQLError(code: keyof typeof errorCodes) {
  return new GraphQLError(errorCodes[code], {
    extensions: { http: { status: code } },
  })
}
