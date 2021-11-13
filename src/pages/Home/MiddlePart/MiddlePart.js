import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
import img from '../../../images/middle/middle.png'
import './MiddlePart.css'
import { Container, Typography } from '@mui/material';

const MiddlePart = () => {
    return (
        <Box sx={{ mt: 4 }} className="middle">
            <Container >
                <Grid container spacing={1} className="side-bar">
                    <Grid item xs={12} md={6}>
                        <img className="middle-img" src={img} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} >

                        <Typography sx={{ mt: 4 }} variant="h5" color="text.secondary">
                            Hight technology instrument
                        </Typography>
                        <Typography sx={{ mt: 4 }} variant="h5" color="text.secondary">
                            Access control system
                        </Typography>
                        <Typography sx={{ mt: 4 }} variant="h5" color="text.secondary">
                            Online 24/7 Available
                        </Typography>
                        <Typography sx={{ mt: 4 }} variant="h5" color="text.secondary">
                            Experience support team
                        </Typography>
                        <Typography sx={{ mt: 4 }} variant="h5" color="text.secondary">
                            Handle emergency situations
                        </Typography>
                        <Typography sx={{ mt: 4 }} variant="h5" color="text.secondary">
                            Insurance Included
                        </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MiddlePart;