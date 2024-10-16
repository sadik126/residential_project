import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Pages/Root";
import Home from "../Layout/Pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Router;
