
import React from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { MdAutorenew } from 'react-icons/md';
import { VscDebugRestart } from 'react-icons/vsc';
import { TiArrowUpThick } from 'react-icons/ti';
import './Style/HomeAdmin.css';
import imageDefault from '../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { useSelector } from 'react-redux';

function HomeAdmin() {
    const dataProducts = useSelector(state => state.contactProducts);
    const checkPrice = dataProducts.sort((a, b) => { return (b.price - a.price) })
    if (checkPrice) {
        dataProducts.sort((a, b) => {
            return (b.rest - a.rest)
        })
    }

    const data = [
        {
            name: 'Page A',
            uv: 590,
            pv: 800,
            amt: 1400,
        },
        {
            name: 'Page B',
            uv: 868,
            pv: 967,
            amt: 1506,
        },
        {
            name: 'Page C',
            uv: 1397,
            pv: 1098,
            amt: 989,
        },
        {
            name: 'Page D',
            uv: 1480,
            pv: 1200,
            amt: 1228,
        },
        {
            name: 'Page E',
            uv: 1520,
            pv: 1108,
            amt: 1100,
        },
        {
            name: 'Page F',
            uv: 1400,
            pv: 680,
            amt: 1700,
        },
    ];

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

                    </h2>

                    <div className='productOrder'>
                        <div className='productStore'>
                            <h2 className='headerTop'>Store Metrics</h2>
                            <div className='product'>
                                <div className='productRevenue'>
                                    <div className='productCustumer'>
                                        <h2 className='custumterHeader'>Revenue</h2>
                                        <h3 className='custumerPrice' >$4085 </h3>
                                    </div>
                                    <div className='productCustumer'>
                                        <h2 className='custumterHeader'>Total Custumer</h2>
                                        <h3 className='custumerPrice'>8.4k </h3></div>
                                    <div className='productCustumer'>
                                        <h2 className='custumterHeader'>Store Visitor</h2>
                                        <h3 className='custumerPrice'>59k </h3>
                                    </div>
                                </div>
                                <div style={{ width: '100%', height: 300 }}>
                                    <ResponsiveContainer>
                                        <ComposedChart width={500} height={400} data={data}>
                                            <CartesianGrid />
                                            <XAxis dataKey="name" scale="band" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                        </ComposedChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                        <div className='productTop'>
                            <h2 className='headerTop'>Top Products</h2>
                            <div className='boder__'>
                                {dataProducts.length !== 0 ? dataProducts.map((dataProduct) => {
                                    const { id, UrlLink, nameProduct, price, total, rest } = dataProduct;
                                    return (
                                        <div className='topRight' key={id}>
                                            <img className='imgeRight' src={UrlLink || imageDefault} />
                                            <div className='topHeader'>
                                                <h4 className='headerRight'>{nameProduct}</h4>
                                                <h4 className='headerh3'>{price} đ</h4>
                                            </div>
                                            <h3>{total}</h3>
                                            <p className='topRest'><TiArrowUpThick />{rest}</p>
                                        </div>
                                    )
                                }) : (<h2 className='headerTop'>No data</h2>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeAdmin;
