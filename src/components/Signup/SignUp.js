import React from 'react';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    let navigate = useNavigate();
    const { signUpWithEmailPassword, user } = useAuth();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    // const Passwordvalidation =
    //   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const onSubmit = (data) => {
    //   if (data.password === Passwordvalidation) {
    //     console.log("Password is not valid");
    //   }
      console.log(data);
      signUpWithEmailPassword(data);
    };
    if (user?.email) {
      navigate("/");
    }
    return (
        <div className=' w-50  m-auto shadow-sm p-3 mb-5 bg-body rounded my-5'>
            <div className='sup'>
            <h1>Sign up</h1>
            <p>Please sign up to continue</p>
            <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-2 ms-auto me-auto "
        >
          <input
            type="email"
            name="email"
            className="form-control w-50 p-2 m-auto"
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
            className="form-control w-50 p-2 my-2 m-auto"
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
              className="btn btn-primary px-4 py-2 m-auto"
            >
              Sign Up
            </button>
          </div>
        </form>
            <span><p>Already have an account</p></span> <Link to='/signin'>Signin</Link>
            </div>
        </div>
    );
};

export default SignUp;
