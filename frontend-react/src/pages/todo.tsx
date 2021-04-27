import React from 'react';
import { Buffer } from 'buffer';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { useFindTodosQuery, TodoOrderField, OrderDirection } from '../graphql/generated/graphql';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const columns: ColDef[] = [
  { field: 'node.id', headerName: 'ID', width: 70 },
  { field: 'cursor', headerName: 'Cursor', width: 130 },
  { field: 'node.text', headerName: 'Text', width: 130 },
  { field: 'node.createAt', headerName: 'createAt', width: 130 },
];

const rows = [
  { id: 1, cursor: 'Snow', text: 'Jon', createAt: 35 },
  { id: 2, cursor: 'Lannister', text: 'Cersei', createAt: 42 },
  { id: 3, cursor: 'Lannister', text: 'Jaime', createAt: 45 },
];

const TodoPage = () => {
  const classes = useStyles();

  // Queryを実行
  const { loading, error, data } = useFindTodosQuery({
    variables: {
      first: 5,
      after: null,
      before: null,
      last: null,
      orderBy: [{ field: TodoOrderField.CreatedAt, direction: OrderDirection.Desc }],
    },
  });

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  const edges = data?.todos.edges;

  return (
    <Layout title="Todos">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={edges} columns={columns} pageSize={5} getRowId={(row) => row.cursor} />
      </div>
    </Layout>
  );
};

export default TodoPage;
