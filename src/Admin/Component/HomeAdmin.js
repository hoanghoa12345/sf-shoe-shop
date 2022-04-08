import React from 'react';
import './Style/HomeAdmin.css';
import { VscDebugRestart } from 'react-icons/vsc';
import { ImCancelCircle } from 'react-icons/im';
import { MdAutorenew } from 'react-icons/md';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { TiArrowUpOutline } from 'react-icons/ti';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';


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
                            <table className='bottom_table'>
                                <tbody>
                                    <tr>
                                        <th>Orther ID</th>
                                        <th>Payment Method</th>
                                        <th>Orther Date</th>
                                        <th>Delivery Date</th>
                                        <th>Status</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>catch</td>
                                        <td>08-04-2022</td>
                                        <td>1h 08-04-2022</td>
                                        <td><Button type="Pending" /></td>
                                        <td><TiArrowUpOutline />1200</td>
                                        <td><AiOutlineEdit className='bottom_icon' /><RiDeleteBack2Fill className='bottom_icon' /></td>
                                    </tr> <tr>
                                        <td>1</td>
                                        <td>catch</td>
                                        <td>08-04-2022</td>
                                        <td>1h 08-04-2022</td>
                                        <td><Button type="Pending" /></td>
                                        <td><TiArrowUpOutline />1200</td>
                                        <td><AiOutlineEdit className='bottom_icon' /><RiDeleteBack2Fill className='bottom_icon' /></td>
                                    </tr> <tr>
                                        <td>1</td>
                                        <td>catch</td>
                                        <td>08-04-2022</td>
                                        <td>1h 08-04-2022</td>
                                        <td><Button type="Pending" /></td>
                                        <td><TiArrowUpOutline />1200</td>
                                        <td><AiOutlineEdit className='bottom_icon' /><RiDeleteBack2Fill className='bottom_icon' /></td>
                                    </tr> <tr>
                                        <td>1</td>
                                        <td>catch</td>
                                        <td>08-04-2022</td>
                                        <td>1h 08-04-2022</td>
                                        <td><Button type="Pending" /></td>
                                        <td><TiArrowUpOutline />1200</td>
                                        <td><AiOutlineEdit className='bottom_icon' /><RiDeleteBack2Fill className='bottom_icon' /></td>
                                    </tr> <tr>
                                        <td>1</td>
                                        <td>catch</td>
                                        <td>08-04-2022</td>
                                        <td>1h 08-04-2022</td>
                                        <td><Button type="Pending" /></td>
                                        <td><TiArrowUpOutline />1200</td>
                                        <td><AiOutlineEdit className='bottom_icon' /><RiDeleteBack2Fill className='bottom_icon' /></td>
                                    </tr><tr>
                                        <td>1</td>
                                        <td>catch</td>
                                        <td>08-04-2022</td>
                                        <td>1h 08-04-2022</td>
                                        <td><Button type="Pending" /></td>
                                        <td><TiArrowUpOutline />1200</td>
                                        <td><AiOutlineEdit className='bottom_icon' /><RiDeleteBack2Fill className='bottom_icon' /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="center">
                                <div className="pagination">
                                    <a href="#">&laquo;</a>
                                    <a href="#">1</a>
                                    <a href="#" className="active">2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">5</a>
                                    <a href="#">6</a>
                                    <a href="#">&raquo;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin