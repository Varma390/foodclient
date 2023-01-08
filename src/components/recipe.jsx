import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './recipe.css'
import Footer from "./footer";
import Header from "./header";
import { useDispatch, useSelector } from 'react-redux'
import { recipeData } from "../features/searchslice";
import {addedRecipe} from "../features/addrecipeslice"
import { useNavigate } from "react-router-dom";


const Recipe = () => {
//   const recipes = useSelector((state) => state.searchred)
//   console.log("recipesdata", recipes);
  const {recipe} = useSelector(recipeData)
  const {recipe1} =  useSelector(addedRecipe)
  const navigate = useNavigate();

//   console.log('recipe '+JSON.stringify(recipes.recipe))
  let data = (recipe) ? recipe : recipe1
//   console.log("searhrecipedata - ",data1)
//   console.log("addrecipedata - ",data)


    return (
        <>
        <Header/>
      <div className="reccontianer">
      
            <section className="row">
                <div className="col-lg-3">
                    <img className="image1" src={data.Image} alt="food"></img>
                </div>
                <h1 className="col-lg-3">{data.Name}</h1>
                {/* <input className="col-lg-9"value ={data.Name}/> */}
               
            </section>
            <section className="row">
                <div className="col-lg-6">
                    <h2>Ingredients</h2>
                    <ul>
                        {/* {data.Ingredients.map((e,i) =><input key={i}value={e}/> )} */}
                        {data.Ingredients.map((e,i) => <li key={i}>{e}</li> )}
                    </ul>
                </div>
                <div className="col-lg-6">
                <h2>Steps</h2>
                    <ul>
                    {/* {data.Steps.map((e,i) =><input key={i}value={e}/> )} */}
                    {data.Steps.map((e,i) => <li key={i}>{e}</li> )}

                    </ul> 
                </div>
            </section>
            <section className="row">
                <div className="col-lg-12">
                <h2>Description</h2>

                    <p>{data.Description}</p>
                    {/* <input value={data.Description}/> */}
                </div>
            </section>
        </div>
        <Footer/>
        </>
    )

}

export default Recipe