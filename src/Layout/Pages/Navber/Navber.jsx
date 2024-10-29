import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/logo-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlesignout = () => {
    logOut().then().catch();
  };
  return (
    <div>
      <div
        className={`navbar fixed top-0 left-0 z-50 ${
          isScrolled ? "bg-white font-black" : "bg-transparent "
        } px-4 py-3 w-full text-white`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "btn text-white   btn-error"
                      : isPending
                      ? "pending"
                      : "btn btn-outline btn-error mt-5"
                  }
                  to={"/"}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(isActive, isPending) =>
                    isActive
                      ? "btn text-white  btn-error mt-5"
                      : isPending
                      ? "pending"
                      : "btn btn-outline btn-error mt-5"
                  }
                  to={"/estates"}
                >
                  ESTATES
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(isActive, isPending) =>
                    isActive
                      ? "btn text-white btn-error mt-5"
                      : isPending
                      ? "pending"
                      : "btn btn-outline btn-error mt-5"
                  }
                  to={"/about"}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(isActive, isPending) =>
                    isActive
                      ? "btn text-white btn-error mt-5"
                      : isPending
                      ? "pending"
                      : "btn btn-outline btn-error mt-5"
                  }
                  to={"/contact"}
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img className="md:w-32 w-24" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "btn text-white  btn-error mr-5"
                    : isPending
                    ? "pending"
                    : "btn btn-outline btn-error mr-5"
                }
                to={"/"}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "btn text-white btn-error mr-5"
                    : isPending
                    ? "pending"
                    : "btn btn-outline  btn-error mr-5"
                }
                to={"/estates"}
              >
                ESTATES
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "btn text-white btn-error mr-5"
                    : isPending
                    ? "pending"
                    : "btn btn-outline  btn-error mr-5"
                }
                to={"/about"}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "btn text-white btn-error mr-5"
                    : isPending
                    ? "pending"
                    : "btn btn-outline  btn-error mr-5"
                }
                to={"/contact"}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-black">
          {user && (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip"
                  data-tip={user?.displayName}
                >
                  <div className="w-10 rounded-full">
                    {user && <img alt="image" src={user?.photoURL} />}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={"/edit"} className="justify-between">
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <a>Wishlist</a>
                  </li>
                  <li>
                    <Link onClick={handlesignout} to={"/login"}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {user ? (
            <span className="text-white ml-5 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Welcome , {user?.displayName}
            </span>
          ) : (
            <button
              type="button"
              class="text-white ml-5 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link to={"/login"}> LOGIN</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
