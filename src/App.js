import React from "react";
import "./App.css";
import HomeAdmin from "./Admin/Component/HomeAdmin";
import Home from "./User/pages/Home";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import UserList from "./Admin/Component/User/UserList";
import ProductList from "./Admin/Component/Product/ProductList";
import About from "./Admin/Component/About";
import AddUser from "./Admin/Component/User/AddUser";
import SignInUser from "./User/pages/SignInUser";
import NotFound from "./User/pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignInUser />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomeAdmin />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="about" element={<About />} />
        <Route path="userlist/*" element={<AddUser />} />
      </Route>
      <Route path="/not-found" element={<Outlet />}>
        <Route index element={<NotFound />} />
      </Route>

      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};
