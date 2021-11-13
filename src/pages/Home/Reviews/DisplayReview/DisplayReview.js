import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import './DisplayReview.css';


const DisplayReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://serene-peak-88325.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
    return (

        <Box>
            <Typography className="heading" variant='h4'>Reviews</Typography>

            <Container>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {
                        review.map(pd =>
                            <Grid item xs={6} md={3}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {

                                            m: 1,
                                            width: 1,
                                            height: 1,
                                            p: 1
                                        },
                                    }}
                                >


                                    <Paper elevation={1} >
                                        <Typography variant="h6">{pd.name}</Typography>
                                        <Rating name="read-only" value={pd.rating} readOnly /> <br />
                                        <Typography variant="p">{pd.review}</Typography>
                                    </Paper>

                                </Box>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Box>

    );
};

export default DisplayReview;