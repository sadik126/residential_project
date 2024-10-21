import React from "react";
import Navber from "./Navber/Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
