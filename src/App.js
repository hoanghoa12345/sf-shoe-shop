import React from "react";
import "./App.css";
import HomeAdmin from "./Admin/Component/HomeAdmin";
import Home from "./User/pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import UserLayout from "./User/Layout/UserLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />}/>
      </Route>
      <Route path="/admin" element={<Outlet />}>
        <Route index element={<HomeAdmin />}/>
      </Route>
    </Routes>
  );
};

export default App;
