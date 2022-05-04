import React from 'react'
import './App.css'
import HomeAdmin from './Admin/Component/HomeAdmin'
import Home from './User/pages/Home'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import AdminLayout from './Admin/AdminLayout/AdminLayout'
import UserList from './Admin/Component/User/UserList'
import ProductList from './Admin/Component/Product/ProductList'
import About from './Admin/Component/About'
import AddUser from './Admin/Component/User/AddUser'
import Auth from './User/pages/Auth'
import NotFound from './User/pages/NotFound'
import UserLayout from './User/Layout/UserLayout'
import Checkout from './User/pages/checkout/Checkout'
import DetailProduct from './User/DetailProduct/DetailProduct'
import Information from './Admin/Component/User/Information'
import Cart from './User/pages/Cart'
import UserProfile from './User/pages/profile/UserProfile'
import AddProduct from './Admin/Component/Product/AddProduct'
import UpdateProduct from './Admin/Component/Product/UpdateProduct'
import ListProduct from './User/components/ListProduct/ListProduct'
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="/detailProduct/:id" element={<DetailProduct />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/products" element={<ListProduct />} />
            </Route>
            <Route path="/auth" element={<Auth />} />

            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<HomeAdmin />} />
                <Route path="userlist" element={<UserList />} />
                <Route path="userlist/adduser" element={<AddUser />} />
                <Route
                    path="userlist/information/:id"
                    element={<Information />}
                />
                <Route path="productlist" element={<ProductList />} />
                <Route path="productlist/addproduct" element={<AddProduct />} />
                <Route
                    path="productlist/updateproduct/:id"
                    element={<UpdateProduct />}
                />
                <Route path="about" element={<About />} />
            </Route>

            <Route path="/not-found" element={<Outlet />}>
                <Route index element={<NotFound />} />
            </Route>

            <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
    )
}

export default App
