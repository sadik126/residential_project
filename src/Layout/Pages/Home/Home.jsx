import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Firstcontainer from "../Firstcontainer/Firstcontainer";
import Estates from "../Estates/Estates";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Holdings reality - Home</title>
      </Helmet>
      <Banner></Banner>
      <Firstcontainer></Firstcontainer>
      <Estates></Estates>
    </div>
  );
};

export default Home;
