import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./components/login";
import Signup from "./components/signup";
import LandingPage from "./components/Landingpage";
import Recipe from "./components/recipe";
import Addrecipe from "./components/addrecipe"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/recipe' element={<Recipe/>} ></Route>
        <Route path='/addrecipe' element={<Addrecipe/>} ></Route>



      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
