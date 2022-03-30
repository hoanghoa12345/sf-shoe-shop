import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import './Style/HomeAdmin.css';
import ProductList from './Product/ProductList';
import Navbar from './Dashboard/Navbar';
import { Route, Routes } from 'react-router';
import UserList from './User/UserList';
import Home from './Home';
import About from './About';



function HomeAdmin() {
    return (
        <div  >
            <div className="Container">
                <Navbar />
                <Dashboard />
                <div className="Component_Other">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path='/UserList' element={<UserList />} />
                        <Route path="/ProductList" element={<ProductList />} />
                        <Route path="/About" element={<About />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin