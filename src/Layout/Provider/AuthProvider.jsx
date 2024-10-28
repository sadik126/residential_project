import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import ReactLoading from "react-loading";
import app from "../../../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("/Residential.json")
      .then((res) => res.json())
      .then((data) => {
        setEstates(data.estates);
        setLoading(false);
      });
  }, [estates]);

  // if (loading) {
  //   return (
  //     <ReactLoading
  //       className="mx-auto"
  //       type={"cylon"}
  //       color={"black"}
  //       height={667}
  //       width={375}
  //     />
  //   );
  // }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googlelogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("user", currentuser);
      setUser(currentuser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    signinUser,
    logOut,
    estates,
    loading,
    googlelogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
