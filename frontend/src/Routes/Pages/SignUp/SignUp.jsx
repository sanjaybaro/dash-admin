import React, { useState } from 'react'
import style from '../SignUp/Signup.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import App from '../../../App';
import { appUrl, userSignUp } from '../../../Constants/Constant';

// SIGN UP COMPONENT

export const SignUp = () => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signUpLoader, setSignUpLoader] = useState(false)
    const [userName, setUserName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(null)
    

     


    // Function when user Click on submit button during SignUp
    const userSignClick = (e) => {
        const data = {
            email,
            password,
            phoneNumber,
            userName
        }
        e.preventDefault();
        setSignUpLoader(true)
        console.log(data);
        axios.post(`${appUrl}${userSignUp}`, data)
        .then((res)=>{
            console.log(res);
            alert(`${res.data.message}`)
            setSignUpLoader(false)
        })
        

    }


    return (
        <div className={style.signupContainer}>


            <div>

               
               
               <div>
                <Link to={'/userProfile'}>Profile</Link>
               </div>

                <h1>Sign Up</h1>


                <form onSubmit={userSignClick}>

                    <div>
                        <label> Email</label>
                    </div>

                    {/* Email Input */}
                    <div>
                        <input type='email'
                            placeholder='Email'
                            required
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            

                        />
                    </div>

                    <div>
                        <label>UserName</label>
                    </div>

                    {/* Email Input */}
                    <div>
                        <input type='text'
                            placeholder='UserName'
                            required
                            value={userName}
                            onChange={(e)=>{setUserName(e.target.value)}}
                            

                        />
                    </div>

                    <div>
                        <label>Phone</label>
                    </div>

                    {/* Email Input */}
                    <div>
                        <input type='number'
                            placeholder='Phone Number'
                            required
                            value={phoneNumber}
                            onChange={(e)=>{setPhoneNumber(e.target.value)}}
                            

                        />
                    </div>




                    <div>
                        <label>Password</label>
                    </div>

                    {/* Email Input */}
                    <div>
                        <input type='password'
                            placeholder='Password'
                            required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            

                        />
                    </div>

                   

                    <div>
                        <input type="submit" disabled={signUpLoader} />
                    </div>
                </form>

                <div>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>


        </div>
    )
}
