import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Details = () => {
  const { id } = useParams();

  const intId = parseInt(id);

  const { estates, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  const estate = estates.find((e) => e.id === intId);
  console.log(estate);
  return (
    <div className="mt-24">
      <div className="grid md:grid-cols-6 md:w-3/4 mx-auto">
        <div className="col-span-4">
          <h1>{estate.estate_title}</h1>
        </div>
        <div>this is side options</div>
      </div>
    </div>
  );
};

export default Details;
