import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Substitution from "./routes/Substitution";
import Ceasar from "./routes/Ceasar";
import Affine from "./routes/Affine";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="substitution" element={<Substitution />} />
        <Route path="ceasar" element={<Ceasar />} />
        <Route path="affine" element={<Affine />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
