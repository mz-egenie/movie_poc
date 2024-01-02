import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SignIn from "./SignIn";
import CreateMovie from './CreateMovie'
import MyMovies from './Movies'



const Routing = () => {

return(
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn/>}/>
          <Route exact path="/movie" element={<SignIn/>}/>
          <Route path="/create-movie" element={<CreateMovie/>}/>
          <Route path="/my-movies" element={<MyMovies/>}/>
        </Routes>
    </BrowserRouter>
    </>
);

};
export default Routing;