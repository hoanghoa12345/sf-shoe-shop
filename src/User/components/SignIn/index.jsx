import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaLock, FaFacebookF, FaGoogle, FaEnvelope } from 'react-icons/fa'
import SignInImage from '../../assets/images/SignInImage.svg'
import SignUpImage from '../../assets/images/SignUpImage.svg'
import './style.scss'

function SignIn() {
    return (
        <div className="signin">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="btn btn-submit" value="Sign in" />

                        <p className="social-text">Sign in with ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-facebook">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-google">
                                        <FaGoogle />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>

                    <form action="" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <FaEnvelope className="icon" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <FaLock className="icon" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" className="btn btn-submit" value="Sign in" />

                        <p className="social-text">Sign in with ...</p>

                        <div className="social-media">
                            <div className="social-media-ul">
                                <div className="social-media-li">
                                    <a href="" className="social-icon icon-facebook">
                                        <FaFacebookF />
                                    </a>
                                </div>
                                <div>
                                    <a href="" className="social-icon icon-google">
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
                        <h3>New here?</h3>
                        <p>lorem ipsum non sit</p>
                        <Link to="/signup">
                            <button className="btn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </Link>
                    </div>
                    <img src={SignUpImage} className="image" alt="signin" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>lorem ipsum non sit</p>
                        <button className="btn transparent" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                    <img src={SignInImage} className="image" alt="signin" />
                </div>
            </div>
        </div>
    )
}

export default SignIn
