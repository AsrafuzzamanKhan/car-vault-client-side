import {
  Alert,
  Box,
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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Padding } from '@mui/icons-material';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, signInWithGoogle } = useAuth();

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

    <Box sx={{
      width: '100%', height: '100vh', display: 'flex',
      justifyContent: 'center', alignItems: 'center'
    }}>
      <Card sx={{ width: '30rem', p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '100%', mb: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: '100%', mb: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              type="submit"
              sx={{ width: '100%', mt: 2, bgcolor: 'success.main', fontWeight: 'bold', letterSpacing: 1 }}
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
            sx={{ width: '100%', mt: 1, bgcolor: 'text.disabled', fontWeight: 'bold', letterSpacing: 1 }}
            variant="contained"
          >
            Google sign in
          </Button>
        </CardContent>

      </Card>
    </Box >


  );
};

export default Login;
