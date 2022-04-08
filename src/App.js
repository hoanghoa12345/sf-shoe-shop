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
import UserLayout from "./User/Layout/UserLayout";
import Checkout from "./User/pages/checkout/Checkout";
import EditUser from './Admin/Component/User/EditUser';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      <Route path="/signin" element={<SignInUser />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomeAdmin />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="userlist/*" element={<AddUser />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="/not-found" element={<Outlet />}>
        <Route index element={<NotFound />} />
      </Route>

      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default App;
