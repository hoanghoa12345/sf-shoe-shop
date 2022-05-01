import React from 'react';
import { FaGlobeEurope } from 'react-icons/fa'
import { BsBellFill } from 'react-icons/bs';
import { VscSearch } from 'react-icons/vsc';
import { NavLink } from "react-router-dom";
import '../Style/NavBar.css';
import logo from'../../image/39b63840e895877b3c2a514a4397c1a1-gigapixel-scale-2_00x copy.png'

function Navbar() {
    const user = localStorage.getItem('user')
    return (
        <div className='topbar'>
            <div className='topbarwapper'>
                <div className='topleft' >
                  <img  className='logo_nav' src={logo} alt='logo'/> 
                    
                </div>       
                <div className='topright'>   
                        <div className='IconContainer' >
                            <span className='topIconBadge'>2</span>
                            <BsBellFill className='iconBell' />
                        </div>       
                        <div className='IconContainer' >
                            <span className='topIconBadge'>2</span>
                            <FaGlobeEurope className='iconBell' />

                        </div>
                    <img src={logo} className='topAvatar' />
                    <span className="AvatarTop">{JSON.parse(user).name}</span>
                    <h6 className="AvatarTopM">Manager</h6>


                </div>
            </div>
        </div>
    )
}

export default Navbar