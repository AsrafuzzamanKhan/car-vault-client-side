import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import img from '../../../images/login/login.jpg';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, error, isLoading, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={img} alt="" />
        </Grid>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              type="submit"
              sx={{ width: '75%', m: 1 }}
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: 'none' }} to="/register">
              <Button variant="text">New User? please register</Button>
            </NavLink>

            {isLoading && <CircularProgress />}

            {user.email && (
              <Alert severity="success">Successfully register!</Alert>
            )}
            {/* {
                            error && <Alert severity="error">{error}</Alert>

                        } */}
          </form>
          <Button
            onClick={handleGoogleSignIn}
            sx={{ width: '75%', m: 1 }}
            variant="contained"
          >
            Google sign in
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
