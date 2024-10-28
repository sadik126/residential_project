import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Pages/Root";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";
import Details from "../Layout/Pages/Details/Details";
import Protectedrouted from "./Protectedrouted";
import Estatesection from "../Layout/Pages/Estatesection/Estatesection";
import About from "../Layout/Pages/About/About";
import Contact from "../Layout/Pages/Contact/Contact";
import Editprofile from "../Layout/Pages/Editprofile/Editprofile";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/edit",
        element: (
          <Protectedrouted>
            <Editprofile></Editprofile>
          </Protectedrouted>
        ),
      },
      {
        path: "/estate/:id",
        element: (
          <Protectedrouted>
            <Details></Details>
          </Protectedrouted>
        ),
      },
      {
        path: "/estates",
        element: <Estatesection></Estatesection>,
      },
    ],
  },
]);

export default Router;
