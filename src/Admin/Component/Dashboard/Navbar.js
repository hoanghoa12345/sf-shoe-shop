import React from 'react';
import { FaGlobeEurope } from 'react-icons/fa'
import { BsBellFill } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';
import { NavLink } from "react-router-dom";
import '../Style/NavBar.css';
import logo from'../../image/mau-logo-dong-vat-dep-01-removebg-preview.png'

function Navbar() {
 
    return (
        <div className='topbar'>
            <div className='topbarwapper'>
                <div className='topleft' >
                  <NavLink to=''> <img  className='logo_nav' src={logo} alt='logo'/> </NavLink> 
                    <span className='header_nav'>Monster</span>
                </div>       
                <div className='topright'>
                    <div className="topIconContainer">
                        <div className='IconContainer' >
                            <span className='topIconBadge'>2</span>
                            <BsBellFill className='iconBell' />
                        </div>
                    </div>
                    <div className="topIconContainer">
                        <div className='IconContainer' >
                            <span className='topIconBadge'>2</span>
                            <FaGlobeEurope className='iconBell' />

                        </div>
                    </div >
                    <img src='https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg' className='topAvatar' />
                    <span className="AvatarTop">Zock Foster</span>
                    <h6 className="AvatarTopM">Manager</h6>


                </div>
            </div>
        </div>
    )
}

export default Navbar