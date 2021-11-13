import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/banner/banner.jpg'
import './Banner.css'


// const bannerBg = {
//     background: `url(${bg})`,
//     width: '100%',
//     height: '100%',
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "right top",
//     backgroundAttachment: "fixed"


// }
const Banner = () => {
    return (
        <Box >
            <img style={{ width: '100%' }} src={bg} alt=''></img>
            <Box className="top-heading">
                <Typography variant="h2" sx={{ m: 2 }}>
                    Welcome to Car Vault
                </Typography>
                <Typography variant="p" sx={{ m: 2 }}>
                    Purchase any qualified Certified Pre-Owned vehicle in the month of November and receive a payment credit up to $500.
                </Typography>
            </Box>

        </Box >
    );
};

export default Banner;