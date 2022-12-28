import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import img from '../../../images/login/login.jpg';
import TextField from '@mui/material/TextField';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Alert from '@mui/material/Alert';

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { user, registerUser, isLoading, error } = useAuth();

  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert('Wrong');
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={img} alt="" />
        </Grid>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="Re-enter Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />

              <Button
                type="submit"
                sx={{ width: '75%', m: 1 }}
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to="/login">
                <Button variant="text">Already registered? please login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}

          {user.email && (
            <Alert severity="success">Successfully register!</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
