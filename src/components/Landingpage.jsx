import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Footer from "./footer";
import './landinstyle.css'
import Header from "./header";
import { searchsliceactions } from "../features/searchslice"; 
// import { fetchrecipe } from "../features/searchslice"; 
import {addrecipesliceactions} from '../features/addrecipeslice'
import { recipeData } from "../features/searchslice";
import { loginData  } from "../features/loginslice";



const LandingPage = () => {
  const [state1, setState1] = useState('') // for storing search input

  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const load = useSelector((state) => state.searchred)
  const {recipe} = useSelector(recipeData)
  const {loading,log} = useSelector(loginData)

// on inital render recipe='' & it matches no if condition
// but when search button clicked dispatch gets called
// and recipe gets updated & useeffect runs with that 
// recipe data. if no recipe is provided as dependency
// useeffect wont run for 2nd time when recipe gets updated
  useEffect( ()=>{
    console.log('searchrecipedata -',recipe)
    if (recipe === null) { // if searched recipe not found
      alert("recipe doesnt exist")
    }
    else if(recipe) {
      navigate('/recipe')
    }
  },[recipe])

  const handleSearch = () => {
    if (log==="loggedOut" ){ // clicking on search without login
      navigate("/login")
      alert('Please login to search recipes')
    }
    else if (log === 'loggedIn' && !state1) {  //if entered empty data when logged in 
      alert('Please enter data')
    }
    else {
      console.log("state1 - ",state1);
      dispatch(searchsliceactions.fetchrecipe(state1))
      // dispatch(fetchrecipe(state1))

    }
  }

  const handleAdd = () => {
    dispatch(addrecipesliceactions.reset())
    if (log==="loggedOut" ){ // clicking on add without login
      alert('Please login to add recipes')
      navigate("/login")
    } else {
      navigate('/addrecipe')
    }
  }

  return (
    <>
      <div className="contianer">
      <Header />
        <main className="row ">
          <div className="col-lg-12 image">
            <form className="form"  >
              <span>
                <input type="text" className=" search" onChange={(e) => setState1(e.target.value)}></input>
                <input type="button" value="Search" onClick={() => {
                  // console.log('state'+state1);
                  handleSearch()}}></input>
                {/* <button type="button" onClick={()=>navigate('/recipe')}> lcick</button> */}
                </span>
            </form>
            <div className=" add">
                    <button onClick={() => {
                      handleAdd()
                      }} >Add Recipe</button>
                </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
