import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Estate from "../Estates/Estate";
import { IoSearchCircleSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const Estatesection = () => {
  const { estates, loading } = useContext(AuthContext);
  // const [estates, setEstates] = useState([]);

  const [display, setDisplay] = useState(estates);
  const [data, setData] = useState(5000000);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  // useEffect(() => {
  //   fetch("/Residential.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDisplay(data.estates);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("/Residential.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDisplay(data.estates);
  //     });
  // }, []);

  const handlefilter = (e) => {
    const selectedvalue = e.target.value;
    if (selectedvalue === "rent") {
      const rent = estates.filter((es) => es.status === selectedvalue);
      setDisplay(rent);
    } else if (selectedvalue === "sale") {
      const sale = estates.filter((es) => es.status === selectedvalue);
      setDisplay(sale);
    } else if (selectedvalue === "all") {
      setDisplay(estates);
    }
  };

  const handlesearch = (e) => {
    const filteredData = estates.filter((item) =>
      item.estate_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplay(filteredData);
  };

  const handlerange = (e) => {
    setData(e.target.value);

    const rangedata = estates.filter((es) => parseInt(es.price) <= data);
    setDisplay(rangedata);
    // if (data > 1200) {

    // }
  };
  return (
    <div className="mt-24 md:w-[90%] mx-auto">
      <Helmet>
        <title>Estates</title>
      </Helmet>
      ;
      <h1 className="text-5xl font-extrabold text-center uppercase">
        All Estates
      </h1>
      <div className="divider divider-error w-20 mx-auto"></div>
      <div class="grid md:grid-cols-4 gap-6">
        <div class="relative z-0 md:w-1/2 w-full mb-5 group">
          <span>
            Price <h1 className="font-extrabold">{data} $</h1>
          </span>
          <input
            type="range"
            min="1200"
            max="5000000"
            value={data}
            className={data > 2164063 ? "range range-error" : "range range-xs"}
            onChange={handlerange}
          />
        </div>

        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handlefilter}
          >
            <option disabled selected>
              Choose your status
            </option>
            <option value="all">All</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="search here"
          className="input input-bordered w-full max-w-xs"
          // value={seachterm}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handlesearch}
          className="btn w-1/2 btn-error btn-xs sm:btn-sm md:btn-md "
        >
          Search
          <IoSearchCircleSharp />
        </button>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3 mt-5">
        {display.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Estatesection;
