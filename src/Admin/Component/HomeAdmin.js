
import React from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { MdAutorenew } from 'react-icons/md';
import { VscDebugRestart } from 'react-icons/vsc';
import './Style/HomeAdmin.css';


function HomeAdmin() {
    const Button = ({ type }) => { return <button className={'bottom' + type}>{type}</button> }
  
    return (
        <div className="container_homeadmin" >
            <h2 className="admin_title">Dashboard</h2>
            <div className="admin_">
                <div className="admin_top">
                    <div className="top_oder">
                        <p className="top_title">ORDER PENDING</p>
                        <p className="top_number">2</p>
                        <div className="boder_icon_pending">  <VscDebugRestart className='icon_pending' /></div>
                    </div>
                    <div className="top_oder_cancel">
                        <p className="top_title">ORDER CANCEL</p>
                        <p className="top_number">0</p>
                        <div className="boder_icon_cancel">  <ImCancelCircle className='icon_pending' /></div>
                    </div>
                    <div className="top_oder_process">
                        <p className="top_title">ORDER PROCESS</p>
                        <p className="top_number">5</p>
                        <div className="boder_icon_process">  <MdAutorenew className='icon_pending' /></div>
                    </div>
                    <div className="top_oder_income">
                        <p className="top_title">TODAY INCOME</p>
                        <p className="top_number">$200000</p>
                        <div className="boder_icon">  <FaMoneyBillAlt className='icon_pending' /></div>
                    </div>
                </div>
                <div className="admin_bottom">
                    <h2 className="admin_bottom_title">Recent Orders
                        <button className='btn_bottom'>View All</button>
                    </h2>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin