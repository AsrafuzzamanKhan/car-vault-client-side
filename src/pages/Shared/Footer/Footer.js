import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <Box className="footer">
      <Container>
        <Grid container spacing={2} className="footer-part">
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Vehicles</Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              SUVs
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Sedans & Wagons
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Coupes
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Convertibles & Roadsters
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Shopping Tools</Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Build
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Compare Vehicles
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              View Inventory
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Special Offers
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Discover Car-Vault</Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              About Us
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              The Best or Nothing
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Events & partnerships
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Contact us
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Visit Sites</Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Facebook
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              YouTube
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Twitter
            </Typography>
            <Typography
              sx={{ mt: 1, display: 'block' }}
              variant="p"
              gutterBottom
            >
              Instagram
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <hr />

      <Typography variant="div">
        <small className="foot">
          Copyright © 2021 Car-vault. All rights reserved by MD. Asrafuzzaman
          Khan
        </small>
      </Typography>
    </Box>
  );
};

export default Footer;
