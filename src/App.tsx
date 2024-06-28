import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { MyProSidebarProvider } from './pages/global/sidebar/sidebarContext';
import MyProSidebar from './pages/global/sidebar/MyProSidebar';
import UserSidebar from './pages/global/sidebar/UserSidebar';
import adminRoutes from './adminroutes';
import userRoutes from './userroutes';
import Login from './pages/login'; // Import your Login component here
import Topbar from './pages/global/Topbar';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const getUserRole = () => {
  return localStorage.getItem('role');
};

// Define your admin and user routes components
const AdminRoutes = () => (
  <Routes>
    {adminRoutes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);

const UserRoutes = () => (
  <Routes>
    {userRoutes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);

const App: React.FC = () => {
  const [theme, colorMode] = useMode();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true); // State to track initial loading
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const role = getUserRole();
    setIsAdmin(role === 'admin');
    setIsLoading(false); // Once role is determined, set loading to false
  }, []); // Empty dependency array to run effect only once on component mount

  const handleLogin = (userRole: string) => {
    localStorage.setItem('role', userRole);
    setIsAdmin(userRole === 'admin');
    navigate(userRole === 'admin' ? '/dashboard' : '/user-dashboard');
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('role');
  //   setIsAdmin(false);
  //   navigate('/login');
  // };

  // Check if the current location is '/login' or if loading is still in progress
  const isLoginPage = location.pathname === '/login' || isLoading;

  // Show loading spinner or placeholder until loading is complete
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Once loading is complete, render the application content
  return (
    <Routes>
      {isLoginPage ? (
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      ) : (
        <Route
          path="*"
          element={
            <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <MyProSidebarProvider SidebarComponent={isAdmin ? MyProSidebar : UserSidebar}>
                  <div style={{ height: '100%', width: '100%' }}>
                    <Topbar />
                    <main>
                      {isAdmin ? <AdminRoutes /> : <UserRoutes />}
                    </main>
                  </div>
                </MyProSidebarProvider>
              </ThemeProvider>
            </ColorModeContext.Provider>
          }
        />
      )}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
