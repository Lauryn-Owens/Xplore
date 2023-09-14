import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import '../pageStyles/signup.css';
import logo from '../images/globalmages/Logo.png';
import backgroundImage from '../images/globalmages/manOnMountain.png';

export default function Signup() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const[agree,setAgree] = useState(false);

    function SuccessfulAgree(){
            setAgree(!agree);
    }
    function passwordValidation(){

    }
    return (
        <main className="sign_up">
            <section className="sign_up--left">
                <h2>Create Your Account</h2>
                <p className="sign_up--get_started">Let's Get You Started</p>
                <button className="sign_up--left--icon_btn">
                    <Link
                        className='sign_up--left--icon_btn--link'
                        to="/dummySignUp">
                        Sign Up with Google
                    </Link>
                </button>
                <button className="sign_up--left--icon_btn">
                    <Link
                        className='sign_up--left--icon_btn--link'
                        to="/dummySignUp">
                        Sign Up with Apple
                    </Link>
                </button>
                <ul className="sign_up--left--list">
                    <li className="sign_up--left--list--line"></li>
                    <li id="or">Or</li>
                    <li className="sign_up--left--list--line"></li>
                </ul>
                <form>
                    <label htmlFor="name">Name</label>
                    <input required type="text" id="name" name="name"
                        placeholder='Enter your name'
                        onChange={(e) => setFormData({...formData,
                        name:e.target.value
                        })}
                    />
                    <label htmlFor="email">Email</label>
                    <input  required type="email" name="email" id="email"
                        placeholder='Enter your email'
                        onChange={(e) => setFormData({...formData,
                            email:e.target.value
                            })}
                    />
                    <label htmlFor="password">Password</label>
                    <input required type="password" name="password" id="password"
                        placeholder='Enter your password'
                        onChange={(e) => setFormData({...formData,
                            password:e.target.value
                            })}
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input required type="password" name="confirmPassword" id="confirmPassword"
                        placeholder='Confirm your password'
                        onChange={(e) => setFormData({...formData,
                            confirmPassword:e.target.value
                            })}
                    />
                    <div className='sign_up--left--list--agree--terms_conditions'>
                       {/**Make this input manually required because a 
                        * hidden input tag cannot be required(by using useState hook)
                        */}
                        <input  type="checkbox"  name="agree" id="agree"
                            onClick={()=>{
                                SuccessfulAgree();
                            }}
                        />
                        <label htmlFor="agree" id="agree_label">
                            <span
                            style={{opacity: agree ? 'none' : 'initial'}}
                            >&#10003;</span>
                        </label>
                        <p htmlFor="agree" id="agree_text">I agree to all <span>{/**MAKE A LINK EVENTUALLY */}Terms and Conditions</span></p>
                    </div>
                    <button
                    type="submit"
                    className='sign_up--left--signup'
                    >
                        <Link
                            className='sign_up--left--signup--link'
                            to="/dashboardHome"
                            onClick={(e) => {
                                if(formData.name.length === 0 && 
                                    formData.email.length === 0 &&
                                    formData.password.length === 0 &&
                                    formData.confirmPassword.length === 0 &&
                                    formData.password.length < 8 &&
                                    formData.confirmPassword.length < 8 &&
                                    agree === false &&
                                    formData.password !== formData.confirmPassword 
                                    ){
                                        e.preventDefault();
                                    }   
                                if( formData.password !== formData.confirmPassword){
                                    e.preventDefault();
                                    alert('Password and Confirm Password not the same!!!');
                                }
                                if(formData.password.length < 8 || formData.confirmPassword.length < 8){
                                    e.preventDefault();
                                    alert('Check password lengths!!!');
                                }
                            }}
                        >Sign Up</Link>
                    </button>
                </form>
                <p className="sign_up--left--account_already">
                    Already have an account ?
                    <span>
                        <Link
                            to="/signin"
                            className="sign_up--left--account_already--signin"
                        >
                        Sign In
                        </Link>
                    </span>
                </p>
            </section>
            <section className="sign_up--right">
                <img src={logo} alt="logo" id="logo" />
                <img src={backgroundImage} id="background_image" alt="Logo Image" />
            </section>
        </main>
    )
}