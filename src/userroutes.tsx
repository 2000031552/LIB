import React from "react";
import { RouteObject } from "react-router-dom";
import UserDashboard from "./pages/userdashboard";
import UserBooks from './pages/userbooks';
 
 
import Form from "./pages/adminaddform";
import Calendar from "./pages/calendar";
import Login from './pages/login';
import BookDetails from "./pages/bookdetails";
 
import UserBorrowHistory from "./pages/userbookhistory";
import Userequestform from "./pages/userrequestform";
import UserAllRequests from "./pages/userallrequests";
import ChangePassword from "./pages/changePassword";
import Profile from "./pages/profile";
import UserEachBook from "./pages/usereachbook";
//import Signup from "./pages/signup";
const userRoutes: RouteObject[] = [
  { path: "/change-password", element: <ChangePassword /> },
  { path: "/profile", element: <Profile /> },
  { path: "/user-dashboard", element: <UserDashboard /> },
  { path: "/userbooks", element: <UserBooks /> },
  { path: "/userbookhistory", element: <UserBorrowHistory /> },
  { path: "/userrequestform", element: <Userequestform /> },
  { path: "/form", element: <Form /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/userallrequests", element: <UserAllRequests /> },
  { path: "/usereachbook/:id", element: <UserEachBook /> },
  { path: "/bookdetails/:id", element: <BookDetails /> },
  // Define other user routes
  { path: "/login", element: <Login onLogin={() => {}} /> },
  //{ path: "/signup", element: <Signup /> },
];

export default userRoutes;
