/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    FaUser,
    FaLock,
    FaFacebookF,
    FaGoogle,
    FaEnvelope
} from 'react-icons/fa'

import { postLogin, postRegister } from '../../../api/httpRequest'
import { login_success, login_failure } from '../../../Admin/Redux/Action'

import SignInImage from '../../assets/images/SignInImage.svg'
import SignUpImage from '../../assets/images/SignUpImage.svg'

import './style.scss'

function SignIn() {
    // const loginSuccess = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChangeInputLogin = e => {
        const { name, value } = e.target
        setLogin({ ...login, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()

        try {
            const { data } = await postLogin({ ...login })

            localStorage.setItem('user', JSON.stringify(data))
            // localStorage.setItem('firstLogin', true)

            // window.location.href = '/'
            // getUser.isAdmin === true ? navigate('/admin') : navigate('/')

            if (data.isAdmin) {
                navigate('/admin')
            } else {
                navigate('/')
            }

            // navigate('/')

            dispatch(login_success(login))
        } catch (err) {
            console.log('Login Error', err)
            // alert('Đăng nhập thất bại')
            dispatch(login_failure(err))
        }
    }

    const onChangeInputRegister = e => {
        const { name, value } = e.target
        setRegister({ ...register, [name]: value })
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try {
            await postRegister({ ...register })
            // await axios.post('/user/register', { ...user })

            // localStorage.setItem('firstLogin', true)

            // window.location.href = '/'
            // navigate('/')
            const signIn = document.querySelector('.signin')
            signIn.classList.remove('sign-up-mode')
        } catch (err) {
            alert('Đăng ký thất bại')
        }
    }

    const handleClickRegister = e => {
        e.preventDefault()
        const signIn = document.querySelector('.signin')
        signIn.classList.add('sign-up-mode')
    }

    const handleClickLogin = e => {
        e.preventDefault()
        const signIn = document.querySelector('.signin')
        signIn.classList.remove('sign-up-mode')
    }
    return (
        <div className="signin">
            <div className="forms-container">
                <div className="signin-signup">
                    <form
                        action=""
                        className="sign-in-form"
                        onSubmit={loginSubmit}
                    >
                        <h2 className="title">Login</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Email"
                                className="input-contain"
                                name="email"
                                value={login.email}
                                onChange={onChangeInputLogin}
                            />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-contain"
                                name="password"
                                value={login.password}
                                onChange={onChangeInputLogin}
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn-sign-signup btn-submit input-contain"
                            value="Sign in"
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                className="btn-sign-signup input-contain"
                                value="Home"
                            />
                        </Link>

                        <p className="social-text">Login with ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a
                                        href=""
                                        className="social-icon icon-facebook"
                                    >
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a
                                        href=""
                                        className="social-icon icon-google"
                                    >
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>

                    <form
                        action=""
                        className="sign-up-form"
                        onSubmit={registerSubmit}
                    >
                        <h2 className="title">Register</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="input-contain"
                                name="name"
                                value={register.name}
                                onChange={onChangeInputRegister}
                            />
                        </div>
                        <div className="input-field">
                            <FaEnvelope className="icon" />
                            <input
                                type="text"
                                placeholder="Email"
                                className="input-contain"
                                name="email"
                                value={register.email}
                                onChange={onChangeInputRegister}
                            />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input-contain"
                                name="password"
                                value={register.password}
                                onChange={onChangeInputRegister}
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn-sign-signup btn-submit"
                            value="Sign Up"
                        />
                        <Link to="/">
                            <input
                                type="submit"
                                className="btn-sign-signup input-contain"
                                value="Home"
                            />
                        </Link>

                        <p className="social-text">Register With ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a
                                        href=""
                                        className="social-icon icon-facebook"
                                    >
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a
                                        href=""
                                        className="social-icon icon-google"
                                    >
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3 className="h3-signin-signup">New here?</h3>
                        <p className="p-signin-signup">lorem ipsum non sit</p>
                        <button
                            className="btn-sign-signup transparent"
                            id="sign-up-btn"
                            onClick={handleClickRegister}
                        >
                            Register
                        </button>
                    </div>
                    <img src={SignUpImage} className="image" alt="signin" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3 className="h3-signin-signup">New here?</h3>
                        <p className="p-signin-signup">lorem ipsum non sit</p>
                        <button
                            className="btn-sign-signup transparent"
                            id="sign-in-btn"
                            onClick={handleClickLogin}
                        >
                            Login
                        </button>
                    </div>
                    <img src={SignInImage} className="image" alt="signin" />
                </div>
            </div>
        </div>
    )
}

export default SignIn
