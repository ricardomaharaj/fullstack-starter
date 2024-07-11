/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { type ScalarsEnumsHash } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string };
}

export interface UserListFilter {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserListSearch {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserListSort {
  createdAt?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Boolean"]["input"]>;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  Int: true,
  String: true,
};
export const generatedSchema = {
  User: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTime!" },
    email: { __type: "String!" },
    id: { __type: "String!" },
    image: { __type: "String" },
    name: { __type: "String!" },
    updatedAt: { __type: "DateTime!" },
  },
  UserListFilter: { email: { __type: "String" }, name: { __type: "String" } },
  UserListSearch: { email: { __type: "String" }, name: { __type: "String" } },
  UserListSort: {
    createdAt: { __type: "Boolean" },
    updatedAt: { __type: "Boolean" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    my: { __type: "User!" },
    user: { __type: "User!", __args: { userId: "String!" } },
    users: {
      __type: "[User!]!",
      __args: {
        filter: "UserListFilter",
        search: "UserListSearch",
        skip: "Int",
        sort: "UserListSort",
        take: "Int",
      },
    },
  },
  subscription: {},
} as const;

export interface User {
  __typename?: "User";
  createdAt: ScalarsEnums["DateTime"];
  email: ScalarsEnums["String"];
  id: ScalarsEnums["String"];
  image?: Maybe<ScalarsEnums["String"]>;
  name: ScalarsEnums["String"];
  updatedAt: ScalarsEnums["DateTime"];
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  /**
   * get the current user
   */
  my: User;
  /**
   * get a user by id
   */
  user: (args: { userId: ScalarsEnums["String"] }) => User;
  /**
   * get a list of users
   */
  users: (args?: {
    filter?: Maybe<UserListFilter>;
    search?: Maybe<UserListSearch>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<ScalarsEnums["Int"]>;
    sort?: Maybe<UserListSort>;
    /**
     * @defaultValue `10`
     */
    take?: Maybe<ScalarsEnums["Int"]>;
  }) => Array<User>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type ScalarsEnums = {
  [Key in keyof Scalars]: Scalars[Key] extends { output: unknown }
    ? Scalars[Key]["output"]
    : never;
} & {};
