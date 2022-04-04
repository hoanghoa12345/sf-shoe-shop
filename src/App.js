import React from 'react'
import './App.css'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

import HomeAdmin from './Admin/Component/HomeAdmin'
import Home from './User/pages/Home'
import SignInUser from './User/pages/SignInUser'
import NotFound from './User/pages/NotFound'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element={<Home />} />
                <Route path="signin" element={<SignInUser />} />

            </Route>
            <Route path="/admin" element={<Outlet />}>
                <Route index element={<HomeAdmin />} />
            </Route>

            <Route path="/not-found" element={<Outlet />}>
                <Route index element={<NotFound />} />
            </Route>

            <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
    )
}

export default App
