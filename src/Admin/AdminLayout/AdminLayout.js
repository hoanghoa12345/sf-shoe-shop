import React from 'react'
import Navbar from './../Component/Dashboard/Navbar';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Component/Dashboard/Dashboard';

function AdminLayout() {
  return (
    <div  >
       <Navbar />
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