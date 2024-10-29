import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [error, setError] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [nameerror, setNameerror] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleregister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("img");
    console.log(form);

    setError("");
    setEmailerror("");
    setNameerror("");

    if (name.length > 10) {
      setNameerror("your name is too long , please keep short");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailerror("please enter a valid email");
      return;
    }

    if (password.length < 6) {
      setError("please enter minimum 6 charecter password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        });
        sendEmailVerification(result.user).then(() => {
          toast.success(
            "please check your email and verify your account successfully"
          );
        });

        toast.success("your account created successfully");
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('input[name="password"]').value = "";
        document.querySelector('input[name="img"]').value = "";
      })
      .catch((error) => {
        console.log(error);
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          setEmailerror(
            "sorry , you can not create an account on this email.already used this email"
          );
          return;
        }
        setError(error.message);
        toast.error("there is an error.please try again");
      });
  };
  return (
    <div>
      <Helmet>
        <title> Register</title>
      </Helmet>
      ;
      <h2 className="text-2xl text-center mt-[15rem] font-extrabold">
        Please sign up your account
      </h2>
      <form onSubmit={handleregister} className="card-body lg:w-1/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Name</span>
          </label>
          {nameerror && <span className="text-red-600">{nameerror}</span>}
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Email address</span>
          </label>
          {emailerror && <span className="text-red-600">{emailerror}</span>}
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Password</span>
          </label>
          {error && <span className="text-red-600">{error}</span>}
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-extrabold">Image</span>
          </label>
          <input
            type="text"
            name="img"
            className="input input-bordered"
            placeholder="Image link"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Sign up</button>
        </div>
      </form>
      <p className="text-center">
        Already Have An Account?{" "}
        <Link className="text-red-700 font-extrabold" to="/login">
          Login here
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
