import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import './DisplayReview.css';
import reviewIcon from '../../../../images/reviewIcon/review-icon.jpg';

const DisplayReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('https://serene-peak-88325.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <Box>
      <Typography className="heading" variant="h4">
        Reviews
      </Typography>

      <Container>
        <Grid container spacing={4} sx={{ my: 3 }}>
          {review.map((pd) => (
            <Grid item xs={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 1,
                    height: 1,
                    p: 1,
                  },
                }}
              >
                <Paper elevation={3}>
                  <Typography className="reviewTop" variant="div">
                    <img className="reviewImg" src={reviewIcon} alt="" />
                    <Typography variant="div" className="reviewTitle">
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'blue',
                          marginBottom: '5px',
                        }}
                      >
                        {pd.name}
                      </Typography>
                      <Rating
                        size="small"
                        name="read-only"
                        value={pd.rating}
                        readOnly
                      />
                    </Typography>
                    <br />
                  </Typography>
                  <Typography variant="p">{pd.review}</Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DisplayReview;
