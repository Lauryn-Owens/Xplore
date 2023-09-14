import React from 'react';
import {Link} from 'react-router-dom';

import '../pageStyles/signin.css';
import logo from '../images/globalmages/Logo.png';
import backgroundImage from '../images/globalmages/manOnMountain.png';

export default function Signin(){
    return(
        <main className="sign_in">
            <section className="sign_in--left">
                <h2>Login</h2>
                <p className="sign_in--get_started">Welcome Back</p>
                <button className="sign_in--left--icon_btn">
                    <Link
                        className='sign_in--left--icon_btn--link'
                        to="/dummySignUp">
                        Sign Up with Google
                    </Link>
                </button>
                <button className="sign_in--left--icon_btn">
                    <Link
                        className='sign_in--left--icon_btn--link'
                        to="/dummySignUp">
                        Sign Up with Apple
                    </Link>
                </button>
                <ul className="sign_in--left--list">
                    <li className="sign_in--left--list--line"></li>
                    <li id="or">Or</li>
                    <li className="sign_in--left--list--line"></li>
                </ul>
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        placeholder='Enter your email'
                    />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        placeholder='Enter your password'
                    />
                    <button className='sign_in--left--signup'>
                        <Link
                            className='sign_in--left--signup--link'
                            to="/dashboardHome"
                        >Login</Link>
                    </button>
                </form>
                <p className="sign_in--left--no_account">
                    Do not have an account ?
                    <span>
                        <Link
                            to="/signup"
                            className="sign_in--left--no_account--signup"
                        >
                            Sign Up
                        </Link>
                    </span>
                </p>
            </section>
            <section className="sign_in--right">
                <img src={logo} alt="logo" id="logo" />
                <img src={backgroundImage} id="background_image" alt="Logo Image" />
            </section>
        </main>
    )
}