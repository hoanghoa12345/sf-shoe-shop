import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserSecret } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';

import '../Style/Dashboard.css';

function Dashboard() {
    return (
        <div className="Dashboard_container">
            <div className="Dashboard_Wapper">
                <div className="Dashboard_Menu">
                    <h2 className="DashBoard-title">Admin</h2>
                    <ul className="Dashboard_List">

                    <NavLink  to='/' className="Dashboard_Item"    >
                            <li className='Dashboard_Li'>
                              <AiOutlineHome className="Dashboard_Icon" />  Dashboard
                            </li>
                        </NavLink>
                        <NavLink  to='/Search' className="Dashboard_Item">
                            <li className='Dashboard_Li'>
                              <BsSearch className="Dashboard_Icon" />  Search Job
                            </li>
                        </NavLink>
                        <NavLink    to='/UserList' className="Dashboard_Item">
                            <li className='Dashboard_Li' >
                              <FaUserSecret className="Dashboard_Icon"/>  Users
                            </li>
                        </NavLink>
                        <Link     to='/ProductList' className="Dashboard_Item">
                            <li className='Dashboard_Li'>
                              <AiOutlineShoppingCart className="Dashboard_Icon"/>  Products
                            </li>
                        </Link>
                        <Link      to='/About' className="Dashboard_Item">
                            <li className='Dashboard_Li'>
                              <FcAbout className="Dashboard_Icon"/>  About
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard