import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import Cart from "./Cart/Cart";
function App() {
  // return (
  //   <CartProvider>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/cart" element={<Cart />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </CartProvider>
  // );
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}

export default App;
