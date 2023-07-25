import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button, Container, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyBookings = () => {
  const { user } = useAuth();
  const [myBookings, setMyBookings] = useState([]);
  useEffect(() => {
    const url = `https://car-vault-server-site.vercel.app/bookingCar?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const url = `https://car-vault-server-site.vercel.app/bookingCar/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = myBookings.filter((car) => car._id !== id);
            setMyBookings(remaining);
          }
        });
    }
  };
  return (
    <Container>
      <Typography variant="h5">My Orders</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Car model/name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone </TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myBookings.map((row, index) => (
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
                <TableCell align="left">{row.bookingCarName}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
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

export default MyBookings;
