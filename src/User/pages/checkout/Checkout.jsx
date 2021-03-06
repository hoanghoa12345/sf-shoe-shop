import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { createCheckout } from '../../actions/checkoutActions'
import './Checkout.scss'
import cashIcon from '../../assets/icons/payment_cash.png'
import ewalletIcon from '../../assets/icons/payment_ewallet.png'
import { postOrder } from '../../../api/httpRequest'
const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer[0])
    const shoppingCart = useSelector(state => state.cart)
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const [provinces, setProvinces] = useState({})
    const [districts, setDistricts] = useState([])
    const [formData, setFormData] = useState({
        address: '',
        district: '',
        email: user.email || '',
        fullname: user.name || '',
        phone_number: '',
        province: '',
        ward: '',
        payment_method: ''
    })
    useEffect(() => {
        const fetchProvinces = async () => {
            const data = await (
                await fetch(
                    'https://gist.githubusercontent.com/cuduy197/11c93e2ab10eeff1d4cd9185ec29fc0a/raw/22b2d484f7a06d59aea63b08d7fe4cf042668a66/districts_vn.json'
                )
            ).json()
            setProvinces(data)
        }
        fetchProvinces()
    }, [])
    const handleCityChange = e => {
        let provinceName = e.target.value
        setFormData({ ...formData, province: provinceName })
        let districtsObj = Object.values(provinces).filter(
            item => item.name === provinceName
        )[0].districts
        setDistricts(Object.values(districtsObj))
    }
    const submitHandler = async e => {
        e.preventDefault()
        console.log(formData)
        let orderInfo = { ...formData, cartItems: shoppingCart }
        dispatch(createCheckout(orderInfo))
        const res = await postOrder(orderInfo, user.token)
        if (res.status === 201) {
            alert('?????t h??ng th??nh c??ng!')
        }
    }
    return (
        <div className="content">
            <div className="page-head">
                <div className="container">
                    <h1>?????t h??ng</h1>
                    <p>
                        N???u b???n th??? kh??ng v???a size ho???c kh??ng ??ng ??, ?????ng ng???i
                        tr??? l???i cho nh??n vi??n giao h??ng. M???i chi ph?? s??? do Shoe
                        Shop thanh to??n.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column mt-60 mb-60">
                        <div>
                            {shoppingCart.length > 0 && (
                                <div className="notices-wrapper">
                                    <div className="message">
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/detailProduct/${shoppingCart[0].id}`
                                                )
                                            }
                                            className="button"
                                        >
                                            Ti???p t???c xem s???n ph???m
                                        </button>
                                        '{shoppingCart[0].name}' ???? ???????c th??m
                                        v??o gi??? h??ng
                                    </div>
                                </div>
                            )}
                            <form className="coupon">
                                <div className="coupon_label">
                                    Vui l??ng nh???p m?? gi???m gi?? c???a b???n v??o ?? b??n
                                    d?????i.
                                </div>
                                <div className="row">
                                    <div className="column form-row">
                                        <input
                                            type="text"
                                            name="coupon_code"
                                            className="input-text"
                                            placeholder="M?? gi???m gi?? c???a b???n"
                                        />
                                    </div>
                                    <div className="column">
                                        <button
                                            type="submit"
                                            className="button"
                                            name="apply_coupon"
                                            style={{ width: '80px' }}
                                        >
                                            ??p d???ng
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <form
                                onSubmit={submitHandler}
                                className="checkout row mt-60 mb-60"
                            >
                                <div className="column">
                                    <div className="customer_details">
                                        <h3>Th??ng tin giao h??ng</h3>
                                        <div className="field-wrapper">
                                            <div className="form-row">
                                                <label htmlFor="fullname">
                                                    H??? v?? t??n
                                                </label>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="billing_fullname"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            fullname:
                                                                e.target.value
                                                        })
                                                    }
                                                    value={formData.fullname}
                                                />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="phonenumber">
                                                    S??? ??i???n tho???i
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="input-text"
                                                    name="billing_phonenumber"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            phone_number:
                                                                e.target.value
                                                        })
                                                    }
                                                    value={
                                                        formData.phone_number
                                                    }
                                                />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="email">
                                                    ?????a ch??? email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="input-text"
                                                    name="billing_email"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            email: e.target
                                                                .value
                                                        })
                                                    }
                                                    value={formData.email}
                                                />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="city">
                                                    T???nh/Th??nh ph???
                                                </label>
                                                <select
                                                    type="text"
                                                    className="input-text"
                                                    id="city"
                                                    name="billing_city"
                                                    onChange={handleCityChange}
                                                    value={formData.province}
                                                >
                                                    {Object.values(
                                                        provinces
                                                    ).map((item, i) => (
                                                        <option key={i}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="district">
                                                    Qu???n/Huy???n
                                                </label>
                                                <select
                                                    type="text"
                                                    id="district"
                                                    className="input-text"
                                                    name="billing_district"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            district:
                                                                e.target.value
                                                        })
                                                    }
                                                    value={formData.district}
                                                >
                                                    {districts.map(
                                                        (item, i) => (
                                                            <option key={i}>
                                                                {item}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="ward">
                                                    X??/Ph?????ng/th??? tr???n
                                                </label>
                                                <input
                                                    type="text"
                                                    id="ward"
                                                    className="input-text"
                                                    name="billing_ward"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            ward: e.target.value
                                                        })
                                                    }
                                                    value={formData.ward}
                                                />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="address">
                                                    ?????a ch???
                                                </label>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="billing_address"
                                                    placeholder="?????a ch???"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            address:
                                                                e.target.value
                                                        })
                                                    }
                                                    value={formData.address}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="message_box color-info">
                                        <ol>
                                            <li>
                                                Qu?? kh??ch vui l??ng ki???m tra l???i
                                                k??? m???t l???n n???a{' '}
                                                <strong>
                                                    Th??ng tin giao h??ng
                                                </strong>{' '}
                                                tr?????c khi b???m n??t{' '}
                                                <strong>?????t h??ng.</strong>
                                            </li>
                                            <li>
                                                Nh??n vi??n Shop s??? x??c nh???n ????n
                                                h??ng trong v??ng t???i ??a 4 gi??? l??m
                                                vi???c (kh??ng k??? Ch??? nh???t v?? Ng??y
                                                l???).
                                            </li>
                                        </ol>
                                        <div>
                                            <ul>
                                                <li>
                                                    ??i???n tho???i ?????t h??ng nhanh:
                                                    1800.6879 (mi???n c?????c)
                                                </li>
                                                <li>
                                                    Email: cskh@shoeshop.com.vn
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <h3>Chi ti???t ????n h??ng</h3>
                                    <table className="shop_table">
                                        <thead>
                                            <tr>
                                                <th>S???n ph???m</th>
                                                <th>S??? l?????ng</th>
                                                <th>T???m t??nh</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {shoppingCart.map(
                                                (
                                                    { name, quantity, price },
                                                    i
                                                ) => (
                                                    <tr key={i}>
                                                        <td>{name}</td>
                                                        <td>{quantity}</td>
                                                        <td>
                                                            {formatter.format(
                                                                price * quantity
                                                            )}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>
                                                    <b>T???m t??nh</b>
                                                </td>
                                                <td>-</td>
                                                <td>
                                                    {formatter.format(
                                                        shoppingCart.reduce(
                                                            (a, c) =>
                                                                a +
                                                                c.price *
                                                                    c.quantity,
                                                            0
                                                        )
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Giao h??ng</b>
                                                </td>
                                                <td>-</td>
                                                <td>Mi???n ph??</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>T???ng</b>
                                                </td>
                                                <td>-</td>
                                                <td>
                                                    {formatter.format(
                                                        shoppingCart.reduce(
                                                            (a, c) =>
                                                                a +
                                                                c.price *
                                                                    c.quantity,
                                                            0
                                                        )
                                                    )}
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <div className="checkout-payment">
                                        <ul className="payment_method">
                                            <li>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        name="payment_method"
                                                        id="payment_cod"
                                                        value="COD"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                payment_method:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                    />
                                                    <label htmlFor="payment_cod">
                                                        Thanh to??n sau khi nh???n
                                                        h??ng (COD)
                                                    </label>
                                                </div>

                                                <div>
                                                    <img
                                                        src={cashIcon}
                                                        alt="cash"
                                                        height="32"
                                                        width="64"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        name="payment_method"
                                                        id="payment_ewallet"
                                                        value="eWallet"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                payment_method:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                    />
                                                    <label htmlFor="payment_ewallet">
                                                        Thanh to??n b???ng v?? ??i???n
                                                        t???
                                                    </label>
                                                </div>

                                                <div>
                                                    <img
                                                        src={ewalletIcon}
                                                        height="32"
                                                        width="64"
                                                        alt="vnpay"
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="payment_box">
                                            <p>
                                                T???t c??? ????n h??ng t??? Shoe Shop ?????u
                                                h??? tr??? th??? s???n ph???m tr?????c khi
                                                thanh to??n. <br />
                                                N???u kh??ng v???a size ho???c kh??ng
                                                ??ng ??, vui l??ng g???i tr??? l???i nh??n
                                                vi??n giao nh???n m?? kh??ng ph??t
                                                sinh th??m b???t k??? chi ph?? n??o.
                                            </p>
                                        </div>
                                        <button
                                            type="submit"
                                            className="place-order button"
                                        >
                                            ?????t h??ng
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
