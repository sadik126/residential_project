import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Pages/Root";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";
import Details from "../Layout/Pages/Details/Details";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/estate/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

export default Router;
