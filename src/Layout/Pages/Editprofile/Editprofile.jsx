import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Editprofile = () => {
  const { user } = useContext(AuthContext);

  const handleupdateuser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const image = form.get("image");

    updateProfile(user, {
      displayName: name,
      email: email,
      photoURL: image,
    })
      .then(() => toast.success("Your profile updated successfully"))
      .catch(() => toast.error("sorry try again"));

    console.log(name, email, image);
  };
  return (
    <div>
      <Helmet>
        <title>{user?.displayName}</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-3/4 mt-16">
          <div className="text-center flex flex-col items-center gap-5 lg:text-left md:w-1/2 w-full">
            <h1 className="text-5xl  font-bold text-center">Update now</h1>
            <div className="avatar">
              <div className="w-32 rounded">
                <img src={user?.photoURL} />
              </div>
            </div>
            <p className="py-6 text-2xl text-center">
              {" "}
              Name:
              <span className="  text-red-800 ml-5">
                {user.displayName}
              </span>{" "}
            </p>
            <p className=" text-2xl text-center">
              {" "}
              Email:
              <span className="  text-red-800 ml-5">{user.email}</span>{" "}
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 w-full text-center max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleupdateuser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="image link"
                  name="image"
                  className="input input-bordered"
                  defaultValue={user?.photoURL}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Edit profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;
