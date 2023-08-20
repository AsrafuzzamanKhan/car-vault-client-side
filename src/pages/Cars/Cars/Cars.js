import { Container, Grid, Typography, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import Car from '../Car/Car';
import useAuth from '../../../hooks/useAuth';

const Cars = () => {
  const { isLoading } = useAuth()
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('https://car-vault-server.vercel.app/allCars')
      .then((res) => res.json())
      .then((data) => {
        console.log('Data', data)
        setCars(data)
      });
  }, [cars]);
  return (
    <>

      <Box sx={{ mb: 5 }}>
        <Typography sx={{ mb: 5 }} className="heading" variant="h4">
          Our Cars
        </Typography>
        {isLoading && <CircularProgress />}

        {cars.length !== 0 ? <></> : <>Product is loading...<CircularProgress sx={{ alignItems: 'center', color: 'red' }} /></>}
        <Container>
          <Grid container spacing={2}>
            {cars.map((car) => (
              <Car key={car._id} car={car}></Car>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Cars;
