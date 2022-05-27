import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Substitution from "./routes/Substitution";
import Ceasar from "./routes/Ceasar";
import Affine from "./routes/Affine";
import Hill from "./routes/Hill";
import Permutation from "./routes/Permutation";
import About from "./routes/About";
import Homepage from "./routes/Homepage";
import Vigenere from "./routes/Vigenere";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
