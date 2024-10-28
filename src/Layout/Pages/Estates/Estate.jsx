import React from "react";
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const {
    image,
    estate_title,
    segment_name,
    status,
    area,
    description,
    price,
    id,
  } = estate;
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="h-60 w-96" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold ">
            {estate_title}
            <div className="badge badge-secondary">{segment_name}</div>
          </h2>
          <p>{description}</p>
          <div class="flex items-baseline text-gray-900 dark:text-black">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">{price}</span>
            {status === "rent" ? (
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            ) : (
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
            )}
          </div>
          <div className="card-actions justify-end">
            {status === "rent" ? (
              <div className="badge badge-accent">{status}</div>
            ) : (
              <div className="badge badge-info">{status}</div>
            )}

            <div className="badge badge-outline">{area}</div>
          </div>
          <button className="btn btn-error uppercase font-extrabold btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-3">
            <Link to={`/estate/${id}`}>show details</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Estate;
