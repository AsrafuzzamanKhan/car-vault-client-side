import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import Car from '../Car/Car';

const Cars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('https://car-vault-server-site.vercel.app/allCars')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <Box sx={{ mb: 5 }}>
      <Typography sx={{ mb: 5 }} className="heading" variant="h4">
        Our Cars
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {cars.map((car) => (
            <Car key={car._id} car={car}></Car>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Cars;
