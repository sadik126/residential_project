import React, { useContext } from "react";
import { AuthContext } from "../Layout/Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const Protectedrouted = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  return <Location state={location.pathname} to="/login"></Location>;
};

export default Protectedrouted;
