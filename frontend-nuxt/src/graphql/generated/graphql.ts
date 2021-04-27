import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Connection = {
  edges?: Maybe<Array<Maybe<Edge>>>
  nodes?: Maybe<Array<Maybe<Node>>>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type Edge = {
  cursor: Scalars['String']
  node: Node
}

export type Node = {
  id: Scalars['ID']
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type PageInfo = {
  __typename?: 'PageInfo'
  startCursor?: Maybe<Scalars['String']>
  endCursor?: Maybe<Scalars['String']>
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
}

export type Query = {
  __typename?: 'Query'
  todo?: Maybe<Todo>
  todos: TodoConnection
  users: UserConnection
}

export type QueryTodoArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryTodosArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<TodoOrder>>
}

export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  orderBy?: Maybe<Array<UserOrder>>
}

export type Todo = Node & {
  __typename?: 'Todo'
  id: Scalars['ID']
  userId: Scalars['ID']
  text?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type TodoConnection = Connection & {
  __typename?: 'TodoConnection'
  edges?: Maybe<Array<Maybe<TodoEdge>>>
  nodes?: Maybe<Array<Maybe<Todo>>>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type TodoEdge = Edge & {
  __typename?: 'TodoEdge'
  cursor: Scalars['String']
  node: Todo
}

export type TodoOrder = {
  field?: Maybe<TodoOrderField>
  direction?: Maybe<OrderDirection>
}

export enum TodoOrderField {
  Id = 'ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
}

export type User = Node & {
  __typename?: 'User'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserConnection = Connection & {
  __typename?: 'UserConnection'
  edges?: Maybe<Array<Maybe<UserEdge>>>
  nodes?: Maybe<Array<Maybe<User>>>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type UserEdge = Edge & {
  __typename?: 'UserEdge'
  cursor: Scalars['String']
  node: User
}

export type UserOrder = {
  field?: Maybe<UserOrderField>
  direction?: Maybe<OrderDirection>
}

export enum UserOrderField {
  Id = 'ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
}

export type FindTodosQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  orderBy?: Maybe<Array<TodoOrder> | TodoOrder>
}>

export type FindTodosQuery = { __typename?: 'Query' } & {
  todos: { __typename?: 'TodoConnection' } & Pick<
    TodoConnection,
    'totalCount'
  > & {
      pageInfo: { __typename?: 'PageInfo' } & Pick<
        PageInfo,
        'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'
      >
      edges?: Maybe<
        Array<
          Maybe<
            { __typename?: 'TodoEdge' } & Pick<TodoEdge, 'cursor'> & {
                node: { __typename?: 'Todo' } & Pick<
                  Todo,
                  'id' | 'text' | 'createdAt'
                >
              }
          >
        >
      >
    }
}

export const FindTodosDocument = gql`
  query findTodos(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $orderBy: [TodoOrder!]
  ) {
    todos(
      first: $first
      after: $after
      before: $before
      last: $last
      orderBy: $orderBy
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ... on Todo {
            id
            text
            createdAt
          }
        }
      }
      totalCount
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    findTodos(
      variables?: FindTodosQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<FindTodosQuery> {
      return withWrapper(() =>
        client.request<FindTodosQuery>(
          FindTodosDocument,
          variables,
          requestHeaders
        )
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
