

import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import TrainerPage from "./pages/home/trainer";
import Pokemon from "./pages/pokemons/pokemon";
function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< TrainerPage />}/>
           <Route  path="/pokemon/:id" element = {< Pokemon />} />
           </Routes>
       </BrowserRouter>
   )
}

export default App;