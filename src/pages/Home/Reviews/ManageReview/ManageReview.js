import { Button, Container, TableContainer, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://car-vault-server.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleReviewDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const url = `https://car-vault-server.vercel.app/reviews/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <Container>
      <Typography variant="h5">Manage Reviews</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((row, index) => (
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
                <TableCell align="left">{row.review}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => handleReviewDelete(row._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageReview;
