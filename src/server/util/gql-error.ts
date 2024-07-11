import { GraphQLError } from 'graphql'

const errors = {
  'Bad Request': 400,
  Unauthorized: 401,
  'Not Found': 404,
  'Internal Error': 500,
} as const

export function GQLError(error: keyof typeof errors) {
  return new GraphQLError(error, {
    extensions: { http: { status: errors[error] } },
  })
}
