import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../images/upcoming/upcoming.jpg'
import './UpcomingCar.css'

const UpcomingCar = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Container>
                <Grid container spacing={2} className="side-bar">
                    <Grid item xs={12} md={8}>
                        <img className="car-img" src={img} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6">Upcoming Car</Typography>
                        <Typography variant="h4">The new 2022 Mercedes-AMG EQS SUV</Typography>
                        <Typography variant="body1">Advancing AMG technology into the future.</Typography>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default UpcomingCar;