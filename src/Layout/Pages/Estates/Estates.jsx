import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Estate from "./Estate";

const Estates = () => {
  const { estates } = useContext(AuthContext);

  console.log(estates);
  //   const [estates, setEstates] = useState([]);

  //   useEffect(() => {
  //     fetch("/Residential.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.estates);
  //       });
  //   }, []);
  return (
    <div className="mt-16  md:w-[90%] mx-auto">
      <h1 className="text-5xl font-extrabold text-center uppercase">
        Estates section
      </h1>
      <div className="divider divider-error w-10 mx-auto"></div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estates;
