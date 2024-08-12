import React, { lazy, Suspense } from "react";
// import Cart from "./components/Cart";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Cart = lazy(() => import("./components/Cart"));

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>Loading Cart...</div>}>
                <Cart />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
