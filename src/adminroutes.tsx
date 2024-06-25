import React from "react";
import { RouteObject } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ChangePassword from "./pages/changePassword";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Profile from './pages/profile';
import FAQ from "./pages/faq";
import AddBook from "./pages/addbook";
import BookDetails from './pages/bookdetails';
import Bookstatus from "./pages/bookstatus";
import EachBookDetails from "./pages/eachbook";
import Reports from './pages/reports';
import Login from './pages/login';
 
const adminRoutes: RouteObject[] = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/change-password", element: <ChangePassword /> },
  { path: "/team", element: <Team /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/bookstatus", element: <Bookstatus /> },
  { path: "/invoices", element: <Invoices /> },
  { path: "/form", element: <Form /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/profile", element: <Profile /> },
  { path: "/reports", element: <Reports /> },
  { path: "/login", element: <Login onLogin={() => {}} /> },
  { path: "/addbook", element: <AddBook /> },
  { path: "/eachbook/:id", element: <EachBookDetails /> },
  { path: "/bookdetails/:id", element: <BookDetails /> },
  // Define other admin routes
];

export default adminRoutes;
