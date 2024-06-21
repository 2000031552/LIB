import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Grid,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const validationSchema = Yup.object({
  userId: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be 8 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Passwod requires a uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
});

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
<<<<<<< HEAD:src/login.tsx
      emailId: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({ values });
      alert(JSON.stringify(values, null, 2));
=======
      userId: 'admin@gmail.com',
      password: 'admin@tsh',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Simulate a login API call
      console.log(values);
      setTimeout(() => {
        // On successful login, call onLogin and navigate to the dashboard
        onLogin();
        navigate('/dashboard');
      }, 1000);
>>>>>>> 36ffb3876e3e7ef0038b1371927f4cdb6137f340:src/pages/login/index.tsx
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
<<<<<<< HEAD:src/login.tsx
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
=======
    <Box
      sx={{
        backgroundColor: '#61dafbaa', // Red background for the entire screen
        minHeight: '98vh', // Ensures the background covers the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
        
      }}
    >
      <Container maxWidth="sm">
>>>>>>> 36ffb3876e3e7ef0038b1371927f4cdb6137f340:src/pages/login/index.tsx
        <Paper
          elevation={3}
          sx={{ padding: 6, width: '100%', borderRadius: 4, backgroundColor: '#f0f8ff' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqarl8GEpNKQocmyV4QUrJbyYmIbCeFR8KfMPp8amnRa-5sRzjm7UJpb7PuEGC4VM31e0&amp;usqp=CAU"
              alt="Logo"
              style={{ width: '180px', marginTop: '30px', marginBottom: '30px' }}
            />
            <Typography
              component="h1"
              variant="h6"
              sx={{ fontWeight: 600, fontSize: '1.5rem', marginTop: -8 }}
            >
              Welcome Back !
            </Typography>
          </Box>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                variant="subtitle1"
                align="left"
                gutterBottom
                sx={{ fontSize: '0.9rem', textAlign: 'left', color: 'grey' }}
              >
                Email ID*
              </Typography>

              <TextField
                fullWidth
                id="userId"
                name="userId"
                size="small"
                type='email'
                placeholder="Enter email"
                value={formik.values.emailId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  (formik.touched.emailId || formik.submitCount > 0) &&
                  Boolean(formik.errors.emailId)
                }
                helperText={
                  (formik.touched.emailId || formik.submitCount > 0) &&
                  formik.errors.emailId
                }
                margin="dense"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'grey',
                    },
                    '&:hover fieldset': {
                      borderColor: 'skyblue',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'skyblue',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: 'skyblue',
                    },
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                align="left"
                gutterBottom
                sx={{
                  fontSize: '0.9rem',
                  textAlign: 'left',
                  mt: 2,
                  color: 'grey',
                }}
              >
                Password*
              </Typography>
              <TextField
                fullWidth
                id="password"
                name="password"
                size="small"
                placeholder="Enter password"
                type={showPassword ? 'text' : 'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  (formik.touched.password || formik.submitCount > 0) &&
                  Boolean(formik.errors.password)
                }
                helperText={
                  (formik.touched.password || formik.submitCount > 0) &&
                  formik.errors.password
                }
                margin="dense"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Grid
              container
              justifyContent="flex-end"
              sx={{ mb: 0, color: grey }}
            >
              <Link
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '0.8rem',
                }}
                className="Link-underline"
              >
                Forgot password?
              </Link>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 3, textTransform: 'none' }}
            >
              Login
            </Button>
            <Divider sx={{ my: 2, backgroundColor: 'skyblue' }} />
            <Link
              variant="body2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.8rem',
              }}
              className="Link-underline"
            >
              New User? Register
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
