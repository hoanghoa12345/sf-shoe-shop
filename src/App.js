import React from 'react'
import './App.css'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

import AdminLayout from './Admin/AdminLayout/AdminLayout'
import HomeAdmin from './Admin/Component/HomeAdmin'
import ProductList from './Admin/Component/Product/ProductList'
import About from './Admin/Component/About'
import UserList from './Admin/Component/User/UserList'
import AddUser from './Admin/Component/User/AddUser'
import OrderManager from './Admin/Component/OderManager/OrderManager'

import Home from './User/pages/Home'
import SignInUser from './User/pages/SignInUser'
import NotFound from './User/pages/NotFound'
import UserLayout from './User/Layout/UserLayout'
import Checkout from './User/pages/checkout/Checkout'

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
                <Route path="productlist" element={<ProductList />} />
                <Route path="about" element={<About />} />
                <Route path="userlist/*" element={<AddUser />} />

                <Route path="order-manager" element={<OrderManager />} />
            </Route>

            <Route path="/not-found" element={<Outlet />}>
                <Route index element={<NotFound />} />
            </Route>

            <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
    )
}

export default App
