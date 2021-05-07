import { GraphQLClient } from 'graphql-request'
import { getSdk, TodoOrderField, OrderDirection } from './generated/graphql'

async function main() {
  const client = new GraphQLClient('http://localhost:8080/query')
  const sdk = getSdk(client)
  const variables = {
    first: 5,
    after: null,
    before: null,
    last: null,
    orderBy: [
      { field: TodoOrderField.CreatedAt, direction: OrderDirection.Desc },
    ],
  }

  const { todos } = await sdk.findTodos(variables)

  console.log(`GraphQL data:`, todos)
}

main()
