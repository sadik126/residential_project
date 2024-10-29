import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  FaCartArrowDown,
  FaCheck,
  FaInfoCircle,
  FaMapMarker,
} from "react-icons/fa";
import { SlHome } from "react-icons/sl";
import { AiFillDollarCircle } from "react-icons/ai";
import rent from "../../../assets/rent.png";
import map from "../../../assets/map.png";
import location from "../../../assets/location.png";
import GoogleMapReact from "google-map-react";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const { id } = useParams();

  const AnyReactComponent = ({ text }) => (
    <div style={{ color: "red" }}>
      <FaMapMarker />
      {estate.estate_title}
    </div>
  );

  const intId = parseInt(id);

  const defaultProps = {
    center: {
      lat: 34.080292,
      lng: -118.404678,
    },
    zoom: 14,
  };

  const { estates, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  const estate = estates.find((e) => e.id === intId);
  console.log(estate);
  return (
    <div className="mt-40">
      <Helmet>
        <title>Details</title>
      </Helmet>
      ;
      <div className="grid md:grid-cols-6 md:w-3/4 mx-auto">
        <div className="col-span-4">
          <h1 className="text-4xl font-extrabold uppercase">
            {estate.estate_title}
          </h1>
          <div className="card lg:card-side ">
            <div className="md:w-1/2 w-full p-5">
              <figure>
                <img src={estate.image} alt="Album" />
              </figure>
              <div>
                <p className="font-extrabold flex items-center text-red-700">
                  <FaInfoCircle />{" "}
                  <span className="uppercase"> Description:</span>
                </p>{" "}
                <p>
                  {estate.description} Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Voluptate dignissimos sed veniam
                  perspiciatis amet temporibus tempore! Id voluptas dolore
                  facere corrupti consequatur libero quod. Ipsum ipsam corporis,
                  quas explicabo pariatur nam velit quod cumque. Sunt quae,
                  voluptate nobis qui aliquid saepe repellendus, cupiditate,
                  animi fugit architecto perferendis recusandae eveniet quasi!
                </p>
              </div>
            </div>

            <div className="card-body">
              <h2 className="card-title uppercase">
                <SlHome className="text-secondary" />
                <span className="font-semibold text-secondary">
                  segment name :{" "}
                </span>
                {estate.segment_name}
              </h2>
              <h2 className="card-title uppercase">
                <AiFillDollarCircle className="text-secondary" />
                <span className="font-semibold text-secondary">Price : </span>
                {estate.price} $
              </h2>
              <h2 className="card-title uppercase">
                <img src={rent} alt="" />
                <span className="font-semibold">Status : </span>

                <div className="badge badge-accent badge-outline">
                  {estate.status}
                </div>
              </h2>
              <h2 className="card-title uppercase">
                <img src={map} alt="" />
                <span className="font-semibold">Area : </span>

                <div className="badge badge-ghost badge-outline">
                  {estate.area}
                </div>
              </h2>
              <h2 className="card-title uppercase">
                <img src={location} alt="" />
                <span className="font-semibold">Location : </span>

                <div className="md:badge badge-xs badge-ghost badge-outline">
                  {estate.location}
                </div>
              </h2>

              <div class="w-56 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <h1 className="uppercase text-center">Facilities</h1>
                {estate.facilities.map((es) => (
                  <button
                    type="button"
                    class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                  >
                    <FaCheck className="mr-5" />
                    {es}
                  </button>
                ))}
              </div>

              <div className="card-actions justify-end mt-10">
                <button className="btn btn-accent">
                  Book
                  <FaCartArrowDown />
                </button>
                <button className="btn btn-error">
                  Wishlist
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div style={{ height: "500px", width: "500px" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDNvb5QTMkBRdqJhPwJpKRz05bO41okr3o",
              }}
              defaultCenter={{
                lat: estate.lat,
                lng: estate.long,
              }}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={estate.lat}
                lng={estate.long}
                text="location here"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
