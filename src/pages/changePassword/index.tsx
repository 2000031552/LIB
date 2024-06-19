import React, { useState } from "react";
import { Box, TextField, Button, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
 

const ChangePassword: React.FC = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the password change logic here
    console.log("Password changed to:", password);
  };

  return (
    <Box width={2} p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <Typography variant="h4" mb={2}>
        Change Password
      </Typography>
      <TextField
        label="New Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
        style={{ width: '400px' }}
      />
      <TextField
        label="Confirm Password"
        type="password"
        value={password} // Note: This should ideally be bound to a different state variable for confirmation
        onChange={handlePasswordChange}
        fullWidth
        margin="normal"
        style={{ width: '400px' }}
      />
      <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ mt: 2 }}>
        Change Password
      </Button>
    </Box>
  );
};

export default ChangePassword;
