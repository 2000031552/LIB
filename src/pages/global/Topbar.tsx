import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ColorModeContext,
  tokens,
  // Assuming you have a context or state for authentication
} from "../../theme";
import {
  useTheme,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useProSidebar } from "react-pro-sidebar";

const Topbar: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggleSidebar, broken, rtl } = useProSidebar();
  const navigate = useNavigate();

  // State to track authentication status (logged in or out)
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Initially assume user is logged in

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChangePasswordClick = () => {
    navigate("/change-password");
    handleMenuClose();
  };

  const handleProfileClick = () => {
    navigate("/profile");
    handleMenuClose();
  };

  const handleLogout = () => {
    // Perform logout logic here (clear session, reset state, etc.)
    setIsLoggedIn(false); // Update state to reflect logged out status
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        {broken && !rtl && (
          <IconButton sx={{ margin: "0 6 0 2" }} onClick={() => toggleSidebar()}>
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </Box>
      <Box display="flex" flexGrow={1} justifyContent="right" alignItems="right">
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          p={0.2}
          borderRadius={1}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Books" />
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
        //console.log("dark mode");
          ) : (
            <DarkModeOutlinedIcon />
          )}   
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        {isLoggedIn ? (
          <IconButton onClick={handleMenuOpen}>
            <PersonOutlinedIcon />
          </IconButton>
        ) : (
          // You can show a different icon or hide this button if user is logged out
          <IconButton onClick={() => navigate("/login")}>
            <PersonOutlinedIcon />
          </IconButton>
        )}
        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleChangePasswordClick}>Change Password</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      {/* Conditionally show logged out message */}
      {!isLoggedIn && <p>You have been logged out.</p>}
    </Box>
  );
};

export default Topbar;