import React, {useEffect, useState} from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
// fetchsignup contains all actions so to use dispatch actions within a file we must import fetch
// signData contains all state data written in slice
import { fetchsignup, signData, clearState } from "../features/signupslice";
import './login.css'

const Signup = () => {
    // const [userdata, setuserdata] = useState({})
    // function handleChange(e) {
    //     e.preventdefault()
    //     console.log(userdata);
    // }
  const dispatch = useDispatch()
const navigate = useNavigate();

    const {register,handleSubmit,formState: { errors },} = useForm();
    const {loading,Email, error} = useSelector(signData)

    useEffect(() => {
        // console.log(Email)
        if(!loading) {
            // alert("registered successfully")
            navigate("/login");
        } 
        // dispatch(clearState());
    },[loading])
    return(
        <>
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
            onSubmit={handleSubmit(data =>{
              dispatch(fetchsignup(data))
              // console.log(data)
                  }
              )}
          >
            <div className="d-flex">

              <h3 className="font-weight-bold">SignUp</h3>
            </div>
          
            <input className="inp"
              placeholder="Enter Email-ID"
              {...register("Email", { required: true })}
            />
          

            <input className="inp"
              placeholder="Enter Password"
              {...register("Password", { required: true })}
            />
            <input className="inp" placeholder=" Confirm Password " {...register('confirmPassword', { required: true })} />
            {" "}

            <button
              className="text-black text-weight-bold bt inp"
              type="submit"
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
{/* <form onSubmit={handleSubmit(data =>{
    dispatch(fetchsignup(data))
    // console.log(data)
        }
    )}>
    <div>
   

      <input placeholder="Enter Email-ID" {...register('Email', { required: true })} /></div>
      <div>

      <input placeholder="Enter Password" {...register('Password', { required: true })} />
      {errors.Password && <p>Password is required.</p>} 
      </div>

      <div>
      <input placeholder=" Confirm Password " {...register('confirmPassword', { required: true })} />
      {
      errors.confirmPassword && <p>Password is required.</p>
    //    register.Password !== register.confirmPassword ? <p> Passwords are NOT Matching</p> : null
      } 

      </div>

      <div>
      <input type="submit" />
      </div>
    </form> */}
      
        {/* <form onSubmit={(e)=> handleChange(e)}>
            <div>
                
                <input className="input" type="email" placeholder="Enter Email-ID" onChange={(e) => { setuserdata({ ...userdata, Email: e.target.value }) }} name="userEmail" ></input>
            </div>
            <div>
                
                <input  className="input" type="password" placeholder="Enter Password" onChange={(e) => { setuserdata({ ...userdata, Password: e.target.value }) }} name="password"></input>
            </div>
            <div>
            
                <input className="input" type="password" placeholder=" Confirm Password " onChange={(e) => { setuserdata({ ...userdata, confirmPassword: e.target.value }) }} name="confirm password"></input>
            </div>
            <div>
                <input type="submit" value='SignUp' ></input>
            </div>
        </form>
        */}
        </>
    )
}

export default Signup