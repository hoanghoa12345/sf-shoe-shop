import React from "react";
import "./App.css";
import HomeAdmin from "./Admin/Component/HomeAdmin";
import Home from "./User/pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import UserList from "./Admin/Component/User/UserList";
import ProductList from "./Admin/Component/Product/ProductList";
import About from "./Admin/Component/About";
import AddUser from './Admin/Component/User/AddUser';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<HomeAdmin />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="about" element={<About />} />
        <Route path="userlist/*" element={<AddUser />} />
      </Route>
    </Routes>
  );
};

export default App;
