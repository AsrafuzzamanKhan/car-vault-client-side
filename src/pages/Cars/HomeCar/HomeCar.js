import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HomeCarDisplay from '../HomeCarDisplay/HomeCarDisplay';

const HomeCar = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('https://car-vault-server-site.vercel.app/homeCars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        console.log(data);
      });
  }, [cars]);
  return (
    <Box>
      <Typography sx={{ mb: 5 }} className="heading" variant="h4">
        Our Cars
      </Typography>
      {cars ? (
        <Container>
          <Grid container spacing={2}>
            {cars.map((car) => (
              <HomeCarDisplay key={car._id} car={car}></HomeCarDisplay>
            ))}
          </Grid>
        </Container>
      ) : (
        <p> Loading</p>
      )}
    </Box>
  );
};

export default HomeCar;
