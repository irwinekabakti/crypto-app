import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/exchanges", element: <Home /> },
  { path: "/cryptocurrencies", element: <Home /> },
  { path: "/news", element: <Home /> },
]);

export default router;
