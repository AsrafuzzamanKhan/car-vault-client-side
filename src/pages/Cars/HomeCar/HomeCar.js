import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HomeCarDisplay from '../HomeCarDisplay/HomeCarDisplay';

const HomeCar = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://serene-peak-88325.herokuapp.com/homeCars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <Box>
            <Typography sx={{ mb: 5 }} className="heading" variant='h4'>Our Cars</Typography>
            <Container >
                <Grid container spacing={2}>
                    {
                        cars.map(car => <HomeCarDisplay
                            key={car._id}
                            car={car}
                        ></HomeCarDisplay>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeCar;