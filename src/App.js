import "./App.css";
///import { useState } from 'react';
import Substitution from "./routes/Substitution";
import Ceasar from "./routes/Ceasar";
import Affine from "./routes/Affine";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className=" max-w-7xl mx-auto px-2 ">
        <Outlet />
      </div>


      
    </div>
  )
}

export default App;
