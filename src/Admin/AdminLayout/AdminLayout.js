import React from 'react'
import Navbar from './../Component/Dashboard/Navbar';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Component/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdminLayout() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="Container"> 
          <Dashboard />
        <div className="Component_Other">
          <div className='component_outlet'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout