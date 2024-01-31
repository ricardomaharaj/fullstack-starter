import { createReactClient } from '@gqty/react'
import type { QueryFetcher } from 'gqty'
import { createClient } from 'gqty'
import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from './schema.generated'
import { generatedSchema, scalarsEnumsHash } from './schema.generated'

const ENDPOINT = '/api/gql'

const queryFetcher: QueryFetcher = async function (
  query,
  variables,
  fetchOptions,
) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: 'cors',
    ...fetchOptions,
  })

  const json = await response.json()

  return json
}

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
})

const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client)

export {
  graphql,
  prepareQuery,
  prepareReactRender,
  useHydrateCache,
  useLazyQuery,
  useMetaState,
  useMutation,
  usePaginatedQuery,
  useQuery,
  useRefetch,
  useTransactionQuery,
}

export * from './schema.generated'
