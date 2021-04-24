import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import styles from "../styles/Table.module.css"

const columns = [
  { id: 'month', label: 'Month', minWidth: 170 },
  { id: 'principal', label: 'Principal', minWidth: 100 },
  {
    id: 'interest',
    label: 'Interest',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'emi',
    label: 'EMI',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'balance',
    label: 'Balance',
    minWidth: 170,
    align: 'right',
  },
];

function createData(month, principal, interest, emi, balance) {
  return { month, principal, interest, emi, balance };
}


const useStyles = makeStyles({
  root: {
    width: '90%',
    margin: "3% auto",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
  },
  container: {
    maxHeight: 440,
  },
});

const InterestTable = ({report}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log(report.length)

  const rows = [
    report.map((e,i) => {
        let principal = e.principal_paid
        let interest = e.interest_paid
        let emi = e.emi
        let balance = e.totalAmount
         return createData(i+1, principal, interest,emi,balance)
    })
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <div className = {styles.container}>
        <h1>Loan Repayment Schedule</h1>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows[0].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows[0].length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}

export default InterestTable
