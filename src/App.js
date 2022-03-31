import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Checkout from "./User/pages/checkout/Checkout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<span>Home</span>}></Route>
          {/* <Route path='shipping' element={<Shipping/>}></Route> */}
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
