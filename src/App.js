import React from "react";
import "./App.css";
import HomeAdmin from "./Admin/Component/HomeAdmin";
import Home from "./User/pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import SignInUser from "./User/pages/SignInUser";

const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
          </Route>
          <Route path="/admin" element={<Outlet />}>
              <Route index element={<HomeAdmin />} />
          </Route>

          <Route path="/signin" element={<Outlet />}>
              <Route index element={<SignInUser />} />
          </Route>
      </Routes>
  )
};

export default App;
