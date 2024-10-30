import React, { useContext, useEffect, useState } from "react";
import { getwishlist } from "../../Localstorage";
import { AuthContext } from "../../Provider/AuthProvider";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { estates } = useContext(AuthContext);

  useEffect(() => {
    const wholewishlist = getwishlist();
    if (estates.length > 0) {
      const getallwishlist = estates.filter((wish) =>
        wholewishlist.includes(wish.id)
      );
      setWishlist(getallwishlist);
    }
  }, []);
  return (
    <div className="mt-40 md:w-1/2 w-full mx-auto ">
      <h1 className="text-5xl text-center uppercase font-extrabold text-red-500">
        Your wishlisted products
      </h1>
      {wishlist.map((w) => (
        <div
          key={w.id}
          className="card lg:card-side bg-base-100 shadow-xl mt-10"
        >
          <figure>
            <img src={w.image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{w.estate_title}</h2>
            <p>{w.description}</p>
            <div className="flex gap-4">
              {" "}
              <button className="btn w-1/4 btn-accent">{w.segment_name}</button>
              <button className="btn w-1/4 btn-success">{w.price}</button>
              <button className="btn w-1/4 btn-error">{w.status}</button>
              <button className="btn w-1/4 btn-warning">{w.area}</button>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary block">{w.location}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
