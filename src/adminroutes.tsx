//import React from "react";
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
import BorrowalDetails from "./pages/eachmemborrowaldetails";
import EditBook from "./pages/editbook";
import EachCopyHistory from "./pages/eachcopyhistory";
//import Signup from './pages/signup';
 
const adminRoutes: RouteObject[] = [
  { path: "/login", element: <Login onLogin={() => {}} /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "/change-password", element: <ChangePassword /> },
  { path: "/members", element: <Members /> },
  { path: "/members/:memberId" ,element:<BorrowalDetails />} ,
  { path: "/books", element: <Books /> },
  { path: "/eachcopyhistory/:bookcode" ,element:<EachCopyHistory /> },
  { path: "/editbook/:id", element: <EditBook /> },
  { path: "/eachbook/:id", element: <EachBookDetails /> },
  { path: "/addbook", element: <AddBook /> },
  { path: "/bookstatus", element: <Bookstatus /> },
  { path: "/bookdetails/:id", element: <BookDetails /> },
  { path: "/fines", element: <Fines /> },
  { path: "/adminaddform", element: <AdminAddForm /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/bookrequests", element: <BookRequests /> },
  //{ path: "/signup", element: <Signup /> },
  { path: "/reports", element: <Reports /> },
   
   
   
  // Define other admin routes
];

export default adminRoutes;
