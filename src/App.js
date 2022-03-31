import React from "react";
import "./App.css";
import HomeAdmin from "./Admin/Component/HomeAdmin";
import Home from "./User/pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Checkout from "./User/pages/checkout/Checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      <Route path="/admin" element={<Outlet />}>
        <Route index element={<HomeAdmin />} />
      </Route>
    </Routes>
  );
};

export default App;
