import { Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageCar = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('https://car-vault-server.vercel.app/allCars')
      // fetch('https://car-vault-server.vercel.app/allCars')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const url = `https://car-vault-server.vercel.app/allCars/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = cars.filter((car) => car._id !== id);
            setCars(remaining);
          }
        });
    }
  };
  return (
    <Container>
      <Typography variant="h5">Manage Cars</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell align="left">Car Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.img}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => handleDelete(row._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageCar;
