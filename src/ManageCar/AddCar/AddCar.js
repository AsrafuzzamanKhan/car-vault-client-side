import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddCar.css';

const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        'https://car-vault-server.vercel.app/addCar',
        data
      )
      .then((res) => {
        if (res.data.insertedId) {
          alert('Successfully Added');
          reset();
        }
      });
  };

  return (
    <Container sx={{}}>
      <Typography className="addCarTitle" variant="p" gutterBottom>
        Add A New Car
      </Typography>
      <Box className="addCar">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name', { required: true })}
            placeholder="Car Name"
          />
          <input
            type="number"
            {...register('price', { required: true })}
            placeholder="Price"
          />
          <textarea
            {...register('description', { required: true })}
            placeholder="Description"
          />
          <input
            type="img"
            {...register('img', { required: true })}
            placeholder="Image"
          />

          <input type="submit" className="submitBtn" />
          {/* <button className="btn btn-success w-50" type="submit">Add Tour Package</button> */}
        </form>
      </Box>
    </Container>
  );
};

export default AddCar;
