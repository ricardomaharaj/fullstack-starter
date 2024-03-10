/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | undefined
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string
}

export interface UserListFilter {
  name?: InputMaybe<Scalars['String']>
}

export interface UserListSearch {
  name?: InputMaybe<Scalars['String']>
}

export interface UserListSort {
  createdAt?: InputMaybe<Scalars['Boolean']>
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  Int: true,
  String: true,
}
export const generatedSchema = {
  User: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime!' },
    email: { __type: 'String!' },
    id: { __type: 'String!' },
    image: { __type: 'String' },
    name: { __type: 'String!' },
    updatedAt: { __type: 'DateTime!' },
  },
  UserListFilter: { name: { __type: 'String' } },
  UserListSearch: { name: { __type: 'String' } },
  UserListSort: { createdAt: { __type: 'Boolean' } },
  mutation: {},
  query: {
    __typename: { __type: 'String!' },
    user: { __type: 'User!', __args: { userId: 'String!' } },
    users: {
      __type: '[User!]!',
      __args: {
        filter: 'UserListFilter',
        search: 'UserListSearch',
        skip: 'Int',
        sort: 'UserListSort',
        take: 'Int',
      },
    },
  },
  subscription: {},
} as const

export interface User {
  __typename?: 'User'
  createdAt: ScalarsEnums['DateTime']
  email: ScalarsEnums['String']
  id: ScalarsEnums['String']
  image?: Maybe<ScalarsEnums['String']>
  name: ScalarsEnums['String']
  updatedAt: ScalarsEnums['DateTime']
}

export interface Mutation {
  __typename?: 'Mutation'
}

export interface Query {
  __typename?: 'Query'
  user: (args: { userId: Scalars['String'] }) => User
  users: (args?: {
    filter?: Maybe<UserListFilter>
    search?: Maybe<UserListSearch>
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars['Int']>
    sort?: Maybe<UserListSort>
    /**
     * @defaultValue `10`
     */
    take?: Maybe<Scalars['Int']>
  }) => Array<User>
}

export interface Subscription {
  __typename?: 'Subscription'
}

export interface SchemaObjectTypes {
  Mutation: Mutation
  Query: Query
  Subscription: Subscription
  User: User
}
export type SchemaObjectTypesNames =
  | 'Mutation'
  | 'Query'
  | 'Subscription'
  | 'User'

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {}
