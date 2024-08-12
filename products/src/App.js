import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meals from "./Meals/Meals";

function App({ history }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Meals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
