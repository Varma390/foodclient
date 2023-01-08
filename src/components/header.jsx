import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import { loginsliceactions, loginData } from "../features/loginslice"
import { useDispatch, useSelector } from 'react-redux'
import { searchsliceactions } from "../features/searchslice";

// import { Button } from "bootstrap";
//use navigate already present in landing page and header is imported there
// so no need for below step
// import { useNavigate } from "react-router-dom";




const Header = (prop) => {
  const { loading, log } = useSelector(loginData)
  // const navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <>
      {/* <header className="row header">
        <h1 className="col-lg-6">Logo</h1>
        <nav className="col-lg-6 nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to='/' className="nav-link active" onClick={() => { dispatch(searchsliceactions.reset()) }}>Home</Link>
            </li>
            {(!loading) && <li className="nav-item">
              <Link to='/signup' className="nav-link active">signUp</Link>
            </li>}
            <li className="nav-item"  >
              <Link to='/login' className="nav-link active" onClick={() => {
                dispatch(loginsliceactions.changeLoad())
              }}>{(log === 'loggedOut') ? 'LogIn' : 'LogOut'}</Link>
            </li>
          </ul>
        </nav>
      </header> */}
            <header className="row header">
        <nav className="navbar navbar-expand-lg navbar static-top">
        <h1 className="col-lg-6 logo navbar-brand">Food Recipe</h1>

       
          <ul className="navbar-nav nav col-lg-6">
            <li className="nav-item active">
              <Link to='/' className="nav-link " onClick={() => { dispatch(searchsliceactions.reset()) }}>Home</Link>
            </li>
            {(!loading) && <li className="nav-item active">
              <Link to='/signup' className="nav-link ">signUp</Link>
            </li>}
            <li className="nav-item active"  >
              <Link to='/login' className="nav-link active" onClick={() => {
                dispatch(loginsliceactions.changeLoad())
              }}>{(log === 'loggedOut') ? 'LogIn' : 'LogOut'}</Link>
            </li>

          </ul>
          
        </nav>
      </header>
    </>
  )
}

export default Header
//onClick={dispatch(loginsliceactions.changeLoad())}