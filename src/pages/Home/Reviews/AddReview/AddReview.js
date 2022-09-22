import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    axios
      .post('https://serene-peak-88325.herokuapp.com/addReview', data)
      .then((res) => {
        if (res.data.insertedId) {
          alert('Successfully Added');
          reset();
        }
      });
  };
  return (
    <Box>
      <Typography className="addCarTitle" variant="p" gutterBottom>
        Add A Review
      </Typography>
      <Container sx={{}}>
        <Box className="addCar">
          <form className="reviewForm" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={user.displayName}
              {...register('name', { required: true })}
              placeholder="Name"
            />
            <input
              type="number"
              {...register('rating', { min: 0, max: 5 })}
              placeholder="Rating 0-5"
            />
            <textarea
              {...register('review', { required: true })}
              placeholder="Review"
            />

            <input className="submitBtn" type="submit" />
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default AddReview;
