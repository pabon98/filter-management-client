import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Signin.css";

const Signin = () => {
  const { user, loginWithEmailPassword } = useAuth();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //    const Passwordvalidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  const onSubmit = (data) => {
    //  if(data.password === Passwordvalidation)
    //       {
    //         console.log('Password is not valid')
    //       }
    console.log(data);
    loginWithEmailPassword(data);
  };
  if (user?.email) {
    navigate("/");
  }
  return (
    <div className="signin w-50  m-auto shadow-sm p-3 mb-5 bg-body rounded my-5">
      <div className="s-in">
        <h1>Sign in</h1>
        <p>Please sign in to continue</p>
       
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-3 ms-auto me-auto w-50 hookform"
        >
          <input
            type="email"
            name="email"
            className="form-control  p-2 m-auto "
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span>
              <p className="text-danger">Email is required</p>
            </span>
          )}
          <input
            type="password"
            name="password"
            className="form-control  p-2 m-auto my-2 "
            placeholder="Your Password"
            {...register("password", { required: true })}
          />
          {errors.email && (
            <span>
              <p className="text-danger">Password is required</p>
            </span>
          )}
          <div className="d-flex flex-row bd-highlight mb-3">
            <button
              type="Submit"
              className="btn btn-primary mt-2 px-3 py-2 mx-auto"
            >
              Sign In
            </button>
            <br />
          </div>
        </form>
        <span>
          <p>Haven't any account? </p>
        </span>
        <Link to="/signup">Register</Link>
        <br /><br />
      </div>
    </div>
  );
};

export default Signin;
