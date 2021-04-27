import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Connection = {
  edges?: Maybe<Array<Maybe<Edge>>>;
  nodes?: Maybe<Array<Maybe<Node>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type Edge = {
  cursor: Scalars['String'];
  node: Node;
};

export type Node = {
  id: Scalars['ID'];
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos: TodoConnection;
  users: UserConnection;
};


export type QueryTodoArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryTodosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<TodoOrder>>;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UserOrder>>;
};

export type Todo = Node & {
  __typename?: 'Todo';
  id: Scalars['ID'];
  userId: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TodoConnection = Connection & {
  __typename?: 'TodoConnection';
  edges?: Maybe<Array<Maybe<TodoEdge>>>;
  nodes?: Maybe<Array<Maybe<Todo>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TodoEdge = Edge & {
  __typename?: 'TodoEdge';
  cursor: Scalars['String'];
  node: Todo;
};

export type TodoOrder = {
  field?: Maybe<TodoOrderField>;
  direction?: Maybe<OrderDirection>;
};

export enum TodoOrderField {
  Id = 'ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserConnection = Connection & {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserOrder = {
  field?: Maybe<UserOrderField>;
  direction?: Maybe<OrderDirection>;
};

export enum UserOrderField {
  Id = 'ID',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type FindTodosQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Array<TodoOrder> | TodoOrder>;
}>;


export type FindTodosQuery = (
  { __typename?: 'Query' }
  & { todos: (
    { __typename?: 'TodoConnection' }
    & Pick<TodoConnection, 'totalCount'>
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'>
    ), edges?: Maybe<Array<Maybe<(
      { __typename?: 'TodoEdge' }
      & Pick<TodoEdge, 'cursor'>
      & { node: (
        { __typename?: 'Todo' }
        & Pick<Todo, 'id' | 'text' | 'createdAt'>
      ) }
    )>>> }
  ) }
);


export const FindTodosDocument = gql`
    query findTodos($first: Int, $after: String, $last: Int, $before: String, $orderBy: [TodoOrder!]) {
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
    `;

/**
 * __useFindTodosQuery__
 *
 * To run a query within a React component, call `useFindTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTodosQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindTodosQuery(baseOptions?: Apollo.QueryHookOptions<FindTodosQuery, FindTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTodosQuery, FindTodosQueryVariables>(FindTodosDocument, options);
      }
export function useFindTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTodosQuery, FindTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTodosQuery, FindTodosQueryVariables>(FindTodosDocument, options);
        }
export type FindTodosQueryHookResult = ReturnType<typeof useFindTodosQuery>;
export type FindTodosLazyQueryHookResult = ReturnType<typeof useFindTodosLazyQuery>;
export type FindTodosQueryResult = Apollo.QueryResult<FindTodosQuery, FindTodosQueryVariables>;