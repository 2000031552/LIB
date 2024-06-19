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
  Divider, // Import Divider
} from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import './App.css';
import { grey } from '@mui/material/colors';

const validationSchema = Yup.object({
  userId: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const App: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      userId: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: -2,
        }}
      >
        <Paper
          elevation={0}
          sx={{ padding: 6, width: '120%', borderRadius: 6 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: -6,
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqarl8GEpNKQocmyV4QUrJbyYmIbCeFR8KfMPp8amnRa-5sRzjm7UJpb7PuEGC4VM31e0&amp;usqp=CAU"
              alt="Logo"
              style={{ width: '180px',marginTop: '30px', marginBottom: '30px' }} // Adjusted marginBottom
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
              }}
            >
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
                id="emailId"
                name="emailId"
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
                // label="Enter password"
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
            <Divider sx={{ my: 2, backgroundColor: 'skyblue' }} />{' '}
            <Link
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',

                  fontSize: '0.8rem',
                }}
                className="Link-underline"
              >
                New User?   Register
              </Link>
            
            
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
