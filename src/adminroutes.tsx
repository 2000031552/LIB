import React from "react";
import { RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ChangePassword from "./pages/changePassword";
import Members from "./pages/members";
import Fines from "./pages/fines";
import Books from "./pages/books";
import AdminAddForm from "./pages/adminaddform";
import Calendar from "./pages/calendar";
import Profile from './pages/profile';
import BookRequests from "./pages/bookrequests";
import AddBook from "./pages/addbook";
import BookDetails from './pages/bookdetails';
import Bookstatus from "./pages/bookstatus";
import EachBookDetails from "./pages/eachbook";
import Reports from './pages/reports';
import Login from './pages/login';
 
const adminRoutes: RouteObject[] = [
  { path: "/login", element: <Login onLogin={() => {}} /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "/change-password", element: <ChangePassword /> },
  { path: "/members", element: <Members /> },
  { path: "/books", element: <Books /> },
  { path: "/eachbook/:id", element: <EachBookDetails /> },
  { path: "/addbook", element: <AddBook /> },
  { path: "/bookstatus", element: <Bookstatus /> },
  { path: "/bookdetails/:id", element: <BookDetails /> },
  { path: "/fines", element: <Fines /> },
  { path: "/adminaddform", element: <AdminAddForm /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/bookrequests", element: <BookRequests /> },
   
  { path: "/reports", element: <Reports /> },
   
   
   
  // Define other admin routes
];

export default adminRoutes;
