/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null
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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string
}

export interface NestedIntFilter {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<NestedIntFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export interface NestedStringFilter {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export interface NestedStringWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedStringFilter>
  _min?: InputMaybe<NestedStringFilter>
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export const SortOrder = {
  asc: 'asc',
  desc: 'desc',
} as const

export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]
export interface StringFilter {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export interface StringWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>
  _max?: InputMaybe<NestedStringFilter>
  _min?: InputMaybe<NestedStringFilter>
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringWithAggregatesFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export interface TaskCountOrderByAggregateInput {
  id?: InputMaybe<SortOrder>
}

export interface TaskCreateInput {
  id?: InputMaybe<Scalars['String']>
}

export interface TaskMaxOrderByAggregateInput {
  id?: InputMaybe<SortOrder>
}

export interface TaskMinOrderByAggregateInput {
  id?: InputMaybe<SortOrder>
}

export interface TaskOrderByWithAggregationInput {
  _count?: InputMaybe<TaskCountOrderByAggregateInput>
  _max?: InputMaybe<TaskMaxOrderByAggregateInput>
  _min?: InputMaybe<TaskMinOrderByAggregateInput>
  id?: InputMaybe<SortOrder>
}

export interface TaskOrderByWithRelationInput {
  id?: InputMaybe<SortOrder>
}

export const TaskScalarFieldEnum = {
  createdAt: 'createdAt',
  id: 'id',
  updatedAt: 'updatedAt',
} as const

export type TaskScalarFieldEnum =
  (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]
export interface TaskScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>
  NOT?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>
  OR?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>
  id?: InputMaybe<StringWithAggregatesFilter>
}

export interface TaskUpdateInput {
  id?: InputMaybe<Scalars['String']>
}

export interface TaskUpdateManyMutationInput {
  id?: InputMaybe<Scalars['String']>
}

export interface TaskWhereInput {
  AND?: InputMaybe<Array<TaskWhereInput>>
  NOT?: InputMaybe<Array<TaskWhereInput>>
  OR?: InputMaybe<Array<TaskWhereInput>>
  id?: InputMaybe<StringFilter>
}

export interface TaskWhereUniqueInput {
  AND?: InputMaybe<Array<TaskWhereInput>>
  NOT?: InputMaybe<Array<TaskWhereInput>>
  OR?: InputMaybe<Array<TaskWhereInput>>
  id?: InputMaybe<Scalars['String']>
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  ID: true,
  Int: true,
  SortOrder: true,
  String: true,
  TaskScalarFieldEnum: true,
}
export const generatedSchema = {
  AffectedRowsOutput: {
    __typename: { __type: 'String!' },
    count: { __type: 'Int!' },
  },
  AggregateTask: {
    __typename: { __type: 'String!' },
    _count: { __type: 'TaskCountAggregate' },
    _max: { __type: 'TaskMaxAggregate' },
    _min: { __type: 'TaskMinAggregate' },
  },
  NestedIntFilter: {
    equals: { __type: 'Int' },
    gt: { __type: 'Int' },
    gte: { __type: 'Int' },
    in: { __type: '[Int!]' },
    lt: { __type: 'Int' },
    lte: { __type: 'Int' },
    not: { __type: 'NestedIntFilter' },
    notIn: { __type: '[Int!]' },
  },
  NestedStringFilter: {
    contains: { __type: 'String' },
    endsWith: { __type: 'String' },
    equals: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    in: { __type: '[String!]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    not: { __type: 'NestedStringFilter' },
    notIn: { __type: '[String!]' },
    startsWith: { __type: 'String' },
  },
  NestedStringWithAggregatesFilter: {
    _count: { __type: 'NestedIntFilter' },
    _max: { __type: 'NestedStringFilter' },
    _min: { __type: 'NestedStringFilter' },
    contains: { __type: 'String' },
    endsWith: { __type: 'String' },
    equals: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    in: { __type: '[String!]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    not: { __type: 'NestedStringWithAggregatesFilter' },
    notIn: { __type: '[String!]' },
    startsWith: { __type: 'String' },
  },
  StringFilter: {
    contains: { __type: 'String' },
    endsWith: { __type: 'String' },
    equals: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    in: { __type: '[String!]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    not: { __type: 'NestedStringFilter' },
    notIn: { __type: '[String!]' },
    startsWith: { __type: 'String' },
  },
  StringWithAggregatesFilter: {
    _count: { __type: 'NestedIntFilter' },
    _max: { __type: 'NestedStringFilter' },
    _min: { __type: 'NestedStringFilter' },
    contains: { __type: 'String' },
    endsWith: { __type: 'String' },
    equals: { __type: 'String' },
    gt: { __type: 'String' },
    gte: { __type: 'String' },
    in: { __type: '[String!]' },
    lt: { __type: 'String' },
    lte: { __type: 'String' },
    not: { __type: 'NestedStringWithAggregatesFilter' },
    notIn: { __type: '[String!]' },
    startsWith: { __type: 'String' },
  },
  Task: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime!' },
    id: { __type: 'ID!' },
    updatedAt: { __type: 'DateTime!' },
  },
  TaskCountAggregate: {
    __typename: { __type: 'String!' },
    _all: { __type: 'Int!' },
    createdAt: { __type: 'Int!' },
    id: { __type: 'Int!' },
    updatedAt: { __type: 'Int!' },
  },
  TaskCountOrderByAggregateInput: { id: { __type: 'SortOrder' } },
  TaskCreateInput: { id: { __type: 'String' } },
  TaskGroupBy: {
    __typename: { __type: 'String!' },
    _count: { __type: 'TaskCountAggregate' },
    _max: { __type: 'TaskMaxAggregate' },
    _min: { __type: 'TaskMinAggregate' },
    createdAt: { __type: 'DateTime!' },
    id: { __type: 'String!' },
    updatedAt: { __type: 'DateTime!' },
  },
  TaskMaxAggregate: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    id: { __type: 'String' },
    updatedAt: { __type: 'DateTime' },
  },
  TaskMaxOrderByAggregateInput: { id: { __type: 'SortOrder' } },
  TaskMinAggregate: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    id: { __type: 'String' },
    updatedAt: { __type: 'DateTime' },
  },
  TaskMinOrderByAggregateInput: { id: { __type: 'SortOrder' } },
  TaskOrderByWithAggregationInput: {
    _count: { __type: 'TaskCountOrderByAggregateInput' },
    _max: { __type: 'TaskMaxOrderByAggregateInput' },
    _min: { __type: 'TaskMinOrderByAggregateInput' },
    id: { __type: 'SortOrder' },
  },
  TaskOrderByWithRelationInput: { id: { __type: 'SortOrder' } },
  TaskScalarWhereWithAggregatesInput: {
    AND: { __type: '[TaskScalarWhereWithAggregatesInput!]' },
    NOT: { __type: '[TaskScalarWhereWithAggregatesInput!]' },
    OR: { __type: '[TaskScalarWhereWithAggregatesInput!]' },
    id: { __type: 'StringWithAggregatesFilter' },
  },
  TaskUpdateInput: { id: { __type: 'String' } },
  TaskUpdateManyMutationInput: { id: { __type: 'String' } },
  TaskWhereInput: {
    AND: { __type: '[TaskWhereInput!]' },
    NOT: { __type: '[TaskWhereInput!]' },
    OR: { __type: '[TaskWhereInput!]' },
    id: { __type: 'StringFilter' },
  },
  TaskWhereUniqueInput: {
    AND: { __type: '[TaskWhereInput!]' },
    NOT: { __type: '[TaskWhereInput!]' },
    OR: { __type: '[TaskWhereInput!]' },
    id: { __type: 'String' },
  },
  mutation: {
    __typename: { __type: 'String!' },
    createOneTask: { __type: 'Task!', __args: { data: 'TaskCreateInput!' } },
    deleteManyTask: {
      __type: 'AffectedRowsOutput!',
      __args: { where: 'TaskWhereInput' },
    },
    deleteOneTask: {
      __type: 'Task',
      __args: { where: 'TaskWhereUniqueInput!' },
    },
    updateManyTask: {
      __type: 'AffectedRowsOutput!',
      __args: { data: 'TaskUpdateManyMutationInput!', where: 'TaskWhereInput' },
    },
    updateOneTask: {
      __type: 'Task',
      __args: { data: 'TaskUpdateInput!', where: 'TaskWhereUniqueInput!' },
    },
    upsertOneTask: {
      __type: 'Task!',
      __args: {
        create: 'TaskCreateInput!',
        update: 'TaskUpdateInput!',
        where: 'TaskWhereUniqueInput!',
      },
    },
  },
  query: {
    __typename: { __type: 'String!' },
    aggregateTask: {
      __type: 'AggregateTask!',
      __args: {
        cursor: 'TaskWhereUniqueInput',
        orderBy: '[TaskOrderByWithRelationInput!]',
        skip: 'Int',
        take: 'Int',
        where: 'TaskWhereInput',
      },
    },
    findFirstTask: {
      __type: 'Task',
      __args: {
        cursor: 'TaskWhereUniqueInput',
        distinct: '[TaskScalarFieldEnum!]',
        orderBy: '[TaskOrderByWithRelationInput!]',
        skip: 'Int',
        take: 'Int',
        where: 'TaskWhereInput',
      },
    },
    findFirstTaskOrThrow: {
      __type: 'Task',
      __args: {
        cursor: 'TaskWhereUniqueInput',
        distinct: '[TaskScalarFieldEnum!]',
        orderBy: '[TaskOrderByWithRelationInput!]',
        skip: 'Int',
        take: 'Int',
        where: 'TaskWhereInput',
      },
    },
    getTask: { __type: 'Task', __args: { where: 'TaskWhereUniqueInput!' } },
    groupByTask: {
      __type: '[TaskGroupBy!]!',
      __args: {
        by: '[TaskScalarFieldEnum!]!',
        having: 'TaskScalarWhereWithAggregatesInput',
        orderBy: '[TaskOrderByWithAggregationInput!]',
        skip: 'Int',
        take: 'Int',
        where: 'TaskWhereInput',
      },
    },
    task: { __type: 'Task', __args: { where: 'TaskWhereUniqueInput!' } },
    tasks: {
      __type: '[Task!]!',
      __args: {
        cursor: 'TaskWhereUniqueInput',
        distinct: '[TaskScalarFieldEnum!]',
        orderBy: '[TaskOrderByWithRelationInput!]',
        skip: 'Int',
        take: 'Int',
        where: 'TaskWhereInput',
      },
    },
  },
  subscription: {},
} as const

export interface AffectedRowsOutput {
  __typename?: 'AffectedRowsOutput'
  count: ScalarsEnums['Int']
}

export interface AggregateTask {
  __typename?: 'AggregateTask'
  _count?: Maybe<TaskCountAggregate>
  _max?: Maybe<TaskMaxAggregate>
  _min?: Maybe<TaskMinAggregate>
}

export interface Task {
  __typename?: 'Task'
  createdAt: ScalarsEnums['DateTime']
  id: ScalarsEnums['ID']
  updatedAt: ScalarsEnums['DateTime']
}

export interface TaskCountAggregate {
  __typename?: 'TaskCountAggregate'
  _all: ScalarsEnums['Int']
  createdAt: ScalarsEnums['Int']
  id: ScalarsEnums['Int']
  updatedAt: ScalarsEnums['Int']
}

export interface TaskGroupBy {
  __typename?: 'TaskGroupBy'
  _count?: Maybe<TaskCountAggregate>
  _max?: Maybe<TaskMaxAggregate>
  _min?: Maybe<TaskMinAggregate>
  createdAt: ScalarsEnums['DateTime']
  id: ScalarsEnums['String']
  updatedAt: ScalarsEnums['DateTime']
}

export interface TaskMaxAggregate {
  __typename?: 'TaskMaxAggregate'
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  id?: Maybe<ScalarsEnums['String']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface TaskMinAggregate {
  __typename?: 'TaskMinAggregate'
  createdAt?: Maybe<ScalarsEnums['DateTime']>
  id?: Maybe<ScalarsEnums['String']>
  updatedAt?: Maybe<ScalarsEnums['DateTime']>
}

export interface Mutation {
  __typename?: 'Mutation'
  createOneTask: (args: { data: TaskCreateInput }) => Task
  deleteManyTask: (args?: {
    where?: Maybe<TaskWhereInput>
  }) => AffectedRowsOutput
  deleteOneTask: (args: { where: TaskWhereUniqueInput }) => Maybe<Task>
  updateManyTask: (args: {
    data: TaskUpdateManyMutationInput
    where?: Maybe<TaskWhereInput>
  }) => AffectedRowsOutput
  updateOneTask: (args: {
    data: TaskUpdateInput
    where: TaskWhereUniqueInput
  }) => Maybe<Task>
  upsertOneTask: (args: {
    create: TaskCreateInput
    update: TaskUpdateInput
    where: TaskWhereUniqueInput
  }) => Task
}

export interface Query {
  __typename?: 'Query'
  aggregateTask: (args?: {
    cursor?: Maybe<TaskWhereUniqueInput>
    orderBy?: Maybe<Array<TaskOrderByWithRelationInput>>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
    where?: Maybe<TaskWhereInput>
  }) => AggregateTask
  findFirstTask: (args?: {
    cursor?: Maybe<TaskWhereUniqueInput>
    distinct?: Maybe<Array<TaskScalarFieldEnum>>
    orderBy?: Maybe<Array<TaskOrderByWithRelationInput>>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
    where?: Maybe<TaskWhereInput>
  }) => Maybe<Task>
  findFirstTaskOrThrow: (args?: {
    cursor?: Maybe<TaskWhereUniqueInput>
    distinct?: Maybe<Array<TaskScalarFieldEnum>>
    orderBy?: Maybe<Array<TaskOrderByWithRelationInput>>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
    where?: Maybe<TaskWhereInput>
  }) => Maybe<Task>
  getTask: (args: { where: TaskWhereUniqueInput }) => Maybe<Task>
  groupByTask: (args: {
    by: Array<TaskScalarFieldEnum>
    having?: Maybe<TaskScalarWhereWithAggregatesInput>
    orderBy?: Maybe<Array<TaskOrderByWithAggregationInput>>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
    where?: Maybe<TaskWhereInput>
  }) => Array<TaskGroupBy>
  task: (args: { where: TaskWhereUniqueInput }) => Maybe<Task>
  tasks: (args?: {
    cursor?: Maybe<TaskWhereUniqueInput>
    distinct?: Maybe<Array<TaskScalarFieldEnum>>
    orderBy?: Maybe<Array<TaskOrderByWithRelationInput>>
    skip?: Maybe<Scalars['Int']>
    take?: Maybe<Scalars['Int']>
    where?: Maybe<TaskWhereInput>
  }) => Array<Task>
}

export interface Subscription {
  __typename?: 'Subscription'
}

export interface SchemaObjectTypes {
  AffectedRowsOutput: AffectedRowsOutput
  AggregateTask: AggregateTask
  Mutation: Mutation
  Query: Query
  Subscription: Subscription
  Task: Task
  TaskCountAggregate: TaskCountAggregate
  TaskGroupBy: TaskGroupBy
  TaskMaxAggregate: TaskMaxAggregate
  TaskMinAggregate: TaskMinAggregate
}
export type SchemaObjectTypesNames =
  | 'AffectedRowsOutput'
  | 'AggregateTask'
  | 'Mutation'
  | 'Query'
  | 'Subscription'
  | 'Task'
  | 'TaskCountAggregate'
  | 'TaskGroupBy'
  | 'TaskMaxAggregate'
  | 'TaskMinAggregate'

export interface GeneratedSchema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined
}

export interface ScalarsEnums extends MakeNullable<Scalars> {
  SortOrder: SortOrder | undefined
  TaskScalarFieldEnum: TaskScalarFieldEnum | undefined
}
