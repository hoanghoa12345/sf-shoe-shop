import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { MdAutorenew } from 'react-icons/md';
import { VscDebugRestart } from 'react-icons/vsc';
import './Style/HomeAdmin.css';


function HomeAdmin() {
    const Button = ({ type }) => { return <button className={'bottom' + type}>{type}</button> }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },

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
                        <button className='btn_bottom'>View All</button>
                    </h2>
                    <div>
                        <div>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    checkboxSelection
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin