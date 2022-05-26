import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button/Button';
import Modal from './Modal'
const rows = [];

const BasicTable: React.FC<{}> = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit=()=>{

  }
  return (
    <React.Fragment>
      <Button title="Add" onClick={}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Qualification</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[].map((row) => (
              <TableRow
                key={'1'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} 
      handleClose={handleClose}/>
    </React.Fragment>
  );
};
export default BasicTable;
