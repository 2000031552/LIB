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
import { grey } from '@mui/material/colors';

const validationSchema = Yup.object({
  userId: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

interface LoginProps {
  onLogin: (userRole: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      userId: 'admin@gmail.com',
      password: 'admin@123',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Simulate a login API call
      setTimeout(() => {
        // On successful login, call onLogin and let the parent handle routing
        if (values.userId === 'admin@gmail.com' && values.password === 'admin@123') {
          onLogin('admin');
        } else if (values.userId === 'user@gmail.com' && values.password === 'user@123') {
          onLogin('user');
        } else {
          // Handle invalid credentials
          alert('Invalid credentials');
        }
      }, 1000);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#61dafbaa',
        minHeight: '98vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
      }}
    >
      <Container maxWidth="sm">
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
              Welcome Back!
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
                placeholder="Enter email"
                value={formik.values.userId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  (formik.touched.userId || formik.submitCount > 0) &&
                  Boolean(formik.errors.userId)
                }
                helperText={
                  (formik.touched.userId || formik.submitCount > 0) &&
                  formik.errors.userId
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
