import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <Box className="footer">
            <Container>
                <Grid container spacing={2} className="footer-part">
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5">Vehicles</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>SUVs</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Sedans & Wagons</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Coupes</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Convertibles & Roadsters</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5">Shopping Tools</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Build</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Compare Vehicles</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>View Inventory</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Special Offers</Typography>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5">Discover Car-Vault</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>About Us</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>The Best or Nothing</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Events & partnerships</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Contact us</Typography>

                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5">Visit Sites</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Facebook</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>YouTube</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Twitter</Typography>
                        <Typography sx={{ mt: 1 }} variant="body1" gutterBottom>Instagram</Typography>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;