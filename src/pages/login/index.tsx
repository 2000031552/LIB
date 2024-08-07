import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
//import { grey } from '@mui/material/colors';

// const validationSchema = Yup.object({
//   phone: Yup.string()
//     .matches(/^\d{10}$/, "Enter a valid phone number")
//     .required("Phone number is required"),
// });

interface LoginProps {
  onLogin: (userRole: string) => void;
}

const Login: React.FC<LoginProps> = () => {
  const [initialPhone, setInitialPhone] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phone: initialPhone,
    },
    enableReinitialize: true,
    //validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("/v2/api/library/users/get-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        console.log(values);
        const data = await response.json();
        if(data.token){
          sessionStorage.setItem('token',data.token);
          navigate("/otp-verification");
        }
        else{
          alert(data.error);
        }
        console.log(data);
        if (response.ok) {
          setInitialPhone(data.phone);
        } else {
          console.error("Failed to fetch initial phone number");
        }
      } catch (error) {
        console.error("Error fetching initial phone number:", error);
      }
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#1F2A40",
        minHeight: "98vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            padding: 6,
            width: "100%",
            borderRadius: 4,
            backgroundColor: "#dbf5ee",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqarl8GEpNKQocmyV4QUrJbyYmIbCeFR8KfMPp8amnRa-5sRzjm7UJpb7PuEGC4VM31e0&amp;usqp=CAU"
              alt="Logo"
              style={{
                width: "180px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />
            <Typography
              component="h1"
              variant="h6"
              sx={{ fontWeight: 600, fontSize: "1.5rem", marginTop: -8 }}
            >
              Welcome Back!
            </Typography>
          </Box>
          <br />
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="subtitle1"
                align="left"
                gutterBottom
                sx={{ fontSize: "0.9rem", textAlign: "left", color: "grey" }}
              >
                <b>Enter Your phone number</b>
              </Typography>
              <TextField
                fullWidth
                id="phone"
                name="phone"
                size="small"
                placeholder="Your phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                margin="dense"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey",
                    },
                    "&:hover fieldset": {
                      borderColor: "skyblue",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "skyblue",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "skyblue",
                    },
                  },
                }}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 3, textTransform: "none" }}
            >
              Get OTP
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
