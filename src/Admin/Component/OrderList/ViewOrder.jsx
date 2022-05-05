/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import '../Style/ViewOrder.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { update_user } from '../../Redux/Action'
import { toast } from 'react-toastify'
import avatarDefaul from '../../image/avatart.jpg'
import { updateUser, TOKEN } from '../../../api/httpRequest'

function ViewOrder() {
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [ward, setWard] = useState('')
    const [address, setAddress] = useState('')
    const [payment_method, setPayment_method] = useState('')
    const [information, setInformation] = useState(true)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const orderViews = useSelector(state => state.orderReducer.orders)
    const { id } = useParams()
    const findViewOrder = orderViews.find(orderView => orderView._id === id)

    const data = {
        id,
        fullname,
        email,
        phone_number,
        province,
        district,
        ward,
        address,
        payment_method,
        name,
        quantity,
        price,
        size
    }

    return (
        <>
            <div className="View_Order_Container">
                <div className="View_Order">
                    <div className="View_Order_left">
                        <div className="View_Order_Show_Left">
                            <div>
                                <img
                                    className="View_Order_avatar"
                                    src={findViewOrder.cartItems[0].image}
                                    alt="imgDefault"
                                />
                            </div>
                            <div className="View_Order_Show_In_for_Title">
                                <h3 className="View_Order_name">
                                    ID: {findViewOrder._id}
                                </h3>
                                <h3 className="View_Order_name">
                                    Name: {findViewOrder.cartItems[0].name}
                                </h3>
                            </div>
                        </div>
                    </div>
                    {information ? (
                        <div className="View_Order_right">
                            <div className="right_">
                                <div className="View_Order_flex_left">
                                    <div className="View_Order_Update">
                                        <form className="View_Order_UpdateForm">
                                            <div className="View_Order_UpdateLeft">
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Email:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={fullname}
                                                        placeholder={
                                                            findViewOrder.fullname
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Phone:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={phone_number}
                                                        placeholder={
                                                            findViewOrder.phone_number
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Pay men:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={payment_method}
                                                        placeholder={
                                                            findViewOrder.payment_method
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Quantity:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={quantity}
                                                        placeholder={
                                                            findViewOrder
                                                                .cartItems[0]
                                                                .quantity
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <button
                                        className="listUser_btn "
                                        onClick={() => navigate(-1)}
                                    >
                                        cancel
                                    </button>
                                </div>
                                <div className="edit_flex_right">
                                    <div className="userUpdate">
                                        <form className="userUpdateForm">
                                            <div className="userUpdateLeft">
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        FullName:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={email}
                                                        placeholder={
                                                            findViewOrder.email
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Province:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={province}
                                                        placeholder={
                                                            findViewOrder.address +
                                                            ', ' +
                                                            findViewOrder.ward +
                                                            ', ' +
                                                            findViewOrder.district +
                                                            ', ' +
                                                            findViewOrder.province
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Size:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={size}
                                                        placeholder={
                                                            findViewOrder
                                                                .cartItems[0]
                                                                .size
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                    <div className="View_Order_UpdateItem">
                                                        <label className="View_Order_Title">
                                                            Price:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={price}
                                                            placeholder={
                                                                findViewOrder
                                                                    .cartItems[0]
                                                                    .price
                                                            }
                                                            className="View_Order_Update_Input"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="right_edituser">
                            <div className="right_">
                                <div className="edit_left">No thoungth out</div>
                                <div className="edit_right"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default ViewOrder
