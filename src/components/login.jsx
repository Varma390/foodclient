import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css'
// here we imported fetchlogin action
import { loginsliceactions, loginData } from "../features/loginslice";
import { searchsliceactions } from "../features/searchslice";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const Login = () => {
  // const [login, setlogin] = useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //------- to use the state data of login
  //--- 1 way
  // const loginData = useSelector((state) => state.searchred)
  // const {loading, logindata, error} = loginData

  //--- 2nd way
  const { loading, log } = useSelector(loginData);

  useEffect(() => {
    // console.log(Email)
    if (log === "loggedIn") navigate("/");
    else if (log === "loggedOut") navigate("/login");
    if (loading === "fail") {
      alert("user doent exist pls signup");
      navigate("/signup");
    }
    dispatch(searchsliceactions.reset()); // reset recipe data after logout

    // dispatch(clearState());
  }, [loading]);
  return (
    <>
      {/* <h1>Logo</h1>
      <p>Enter your credentials to access your account</p>
      <form
        onSubmit={handleSubmit((data) => {
          dispatch(loginsliceactions.fetchlogin(data));
          // console.log(data)
        })}
      >
        <div>
          <input
            placeholder="Enter Email-ID"
            {...register("Email", { required: true })}
          />
        </div>
        <div>
          <input
            placeholder="Enter Password"
            {...register("Password", { required: true })}
          />
          {errors.Password && <p>Password is required.</p>}
        </div>

        <div>
          <input type="submit" value="Login" />
        </div>
      </form>  */}

      <div className="container-fluid login">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
            <div className="card d-flex mx-auto my-5">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12 c1 p-5">
                  <div className="row mb-5 m-3">
                    <img
                      src="https://i.imgur.com/pFfTOwy.jpg"
                      width="70vw"
                      height="55vh"
                      alt=""
                    />
                  </div>
                  <img
                    src="https://i.imgur.com/kdE7GKw.jpg"
                    width="120vw"
                    height="210vh"
                    className="mx-auto d-flex"
                    alt="Teacher"
                  />
                  <div className="row justify-content-center">
                    <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                      <h1 className="wlcm">Welcome to login</h1>{" "}
                      <span className="sp1">
                        {" "}
                        <span className="px-3 bg-danger rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-circle"></span>{" "}
                        <span className="ml-2 px-1 rounded-circle"></span>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5">

                  <form
                    className="px-5 pb-5 form1"
                    onSubmit={handleSubmit((data) => {
                      dispatch(loginsliceactions.fetchlogin(data));
                      // console.log(data)
                    })}
                  >
                    <div className="d-flex">

                      <h3 className="font-weight-bold">Log in</h3>
                    </div>
                  
                    <input className="inp"
                      placeholder="Enter Email-ID"
                      {...register("Email", { required: true })}
                    />
                  

                    <input className="inp" type="password"
                      placeholder="Enter Password"
                      {...register("Password", { required: true })}
                    />{" "}
    
                    <button
                      className="text-black text-weight-bold bt inp"
                      type="submit"
                    >
                      SignIn
                    </button>
                    <button
                      className="text-black text-weight-bold bt inp"
                      type="submit"
                      onClick={() => navigate("/signup")}
                    >
                      SignUp
                    </button>
            
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
