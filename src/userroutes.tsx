import React from "react";
import { RouteObject } from "react-router-dom";
import UserDashboard from "./pages/userdashboard";
import UserBooks from './pages/userbooks';
 
 
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";
 
// Import other user pages
import Login from './pages/login';
import EachBookDetails from "./pages/eachbook";
import BookDetails from "./pages/bookdetails";
 
import UserBorrowHistory from "./pages/userbookhistory";
import Userequestform from "./pages/userrequestform";
const userRoutes: RouteObject[] = [
  { path: "/user-dashboard", element: <UserDashboard /> },
  { path: "/userbooks", element: <UserBooks /> },
   
  { path: "/userbookhistory", element: <UserBorrowHistory /> },
  { path: "/userrequestform", element: <Userequestform /> },
  { path: "/form", element: <Form /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/eachbook/:id", element: <EachBookDetails /> },
  { path: "/bookdetails/:id", element: <BookDetails /> },
  // Define other user routes
  { path: "/login", element: <Login onLogin={() => {}} /> },
];

export default userRoutes;
