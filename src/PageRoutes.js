import React from 'react';
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  Homepage,
  About,
  Ceasar,
  Affine,
  Hill,
  Vigenere,
  Permutation, 
  Substitution
} from "./routes";

const PageRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="substitution" element={<Substitution />} />
            <Route path="ceasar" element={<Ceasar />} />
            <Route path="affine" element={<Affine />} />
            <Route path="hill" element={<Hill />} />
            <Route path="permutation" element={<Permutation />} />
            <Route path="vigenere" element={<Vigenere />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default PageRoutes;
