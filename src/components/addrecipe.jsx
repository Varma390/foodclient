import React, { useEffect, useState } from "react";
import { addrecipesliceactions } from "../features/addrecipeslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { searchsliceactions } from "../features/searchslice"; 
import { loginData  } from "../features/loginslice";
import {addedRecipe} from "../features/addrecipeslice"
import Footer from "./footer";
import Header from "./header";
import './addrecipe.css'



const Addrecipe = () => {
  const [state2, setState2] = useState({
    Name: "",
    Description: "",
    Ingredients: [],
    Steps: [],
  });
  const [Image, setImage] = useState('')
  const [ingredient, setIngredient] = useState("");
  const [steps, setSteps] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {recipe1} =  useSelector(addedRecipe)


  // console.log(ingredient)
  // console.log(steps)

  const addIngredients = () => {
    // one way of updating by taking the prev state and updatin it
    // bec if there are 2 setstate2() consecutively & if not writeen
    // below manner both setstate2() will take the same initialstate
    // instead of the state updated by 1st setstate2()
    setState2((prev) => ({
      ...prev,
      Ingredients: [...prev.Ingredients, ingredient],
    }));
    setIngredient(""); // setting input to empty - for this to occur place value={ingredient}
    // console.log(state2);
  };

  const addSteps = () => {
    setState2({ ...state2, Steps: [...state2.Steps, steps] });
    setSteps("");
    // console.log((state2));
  };

  const handleSubmit = () => {

    //dispatch(searchsliceactions.reset()) // on add button recipedata of 
    // becomes empty
    const formData = new FormData()
    formData.append('myImage',Image)
    formData.append('Name',state2.Name)
    formData.append('Description',state2.Description)
    formData.append('Ingredients',state2.Ingredients)
    formData.append('Steps',state2.Steps)


    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1])
  }
    //let data = {objects:[formData,state2]};
    //let data = {formData,state2} // object with key and value same name
      dispatch(addrecipesliceactions.postrecipe(formData));
      setState2(""); // to empty the state2
      console.log("state2 - ",state2)
      
 

  };
  console.log(state2, Image);
  useEffect(() => {
    console.log('addrecipedata -',recipe1)
    if (recipe1) navigate('/recipe')
    console.log(state2); // gets empty here
  }, [recipe1]);
  return (
    <>
      {/* <form onSubmit={handleSubmit(data =>{
    dispatch(fetchsignup(data))
    // console.log(data)
        }
    )}>
    <div> */}
      <Header />
    <div className="addcontainer">
      <div>
        <input
        type="file"
          placeholder="Enter Recipe Name"
        //   value={state2.Name}
          onChange={(e) => setImage( e.target.files[0] )}
          accept=".png, .jpg, .jpeg"
        />
      </div>
      <div>
        <input
          placeholder="Enter Recipe Name"
          onChange={(e) => setState2({ ...state2, Name: e.target.value })}
        />
      </div>
      <div>
        <input
          placeholder="Enter Description"
        //   value={state2.Description}
          onChange={(e) =>
            setState2({ ...state2, Description: e.target.value })
          }
        />
      </div>
      <div>
        <input
          placeholder="Enter Ingredients"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />{'    '}
        <input type="button" value="add" onClick={() => addIngredients()} />
      </div>
      <div>
        <input
          placeholder="Enter Steps for Preparation"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />{'    '}
        <input type="button" value="add" onClick={addSteps} />
      </div>
      <div>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </div>
      </div>
      <Footer/>

      {/* <input placeholder="Enter Recipe Name" {...register('Name', { required: true })} /></div>
      <div>

      <input placeholder="Enter Description" type="text-area" {...register('Description', { required: true })} />
      {/* {errors.Description && <p>Password is required.</p>}  */}
      {/* </div>

      <div>
      <input placeholder=" Enter Ingredients " {...register('Ingredients', { required: true })} />
      <input type='button' value="add" onClick={addIngredients}/>
      </div>

      <div>
      <input placeholder=" Enter Steps for Preparation " {...register('Ingredients', { required: true })} />
      <input type='button' value="add" onClick={addSteps}/>
      </div>

      <div>
      <input type="submit" />
      </div>
    </form> */}
    </>
  );
};

export default Addrecipe;
