import React, { useContext, useState } from 'react'
// import style from '../CSS/Signup.module.css'
import style from '../SignUp/Signup.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { appUrl, userLogin } from '../../../Constants/Constant'
import { Navigate } from 'react-router-dom'
import { appContent } from '../../../ContextApi/ContextApi'

export const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { isAuth, setIsAuth } = useContext(appContent)















    // Function when user click on Submit Button 

    const userLoginClick = (e) => {
        setLoading(true)
        e.preventDefault();
        const data = {
            email,
            password
        }
        console.log(data);
        axios.post(`${appUrl}${userLogin}`, data)
            .then((res) => {
                console.log(res);
                alert(`${res.data.message}`)
                localStorage.setItem('Token', res.data.token)
                localStorage.setItem('UserId', res.data.userId)
                setLoading(false);
                setIsAuth(true)
                // return <Navigate to='/userProfile' />
            })


    }


    return (
        <div className={style.signupContainer}>


            <div>



                {/* Heading */}
                <div>
                    <Link to={'/userProfile'}>Profile</Link>
                </div>

                {
                    <div>
                        {/* isAuth ? <h1>Loged In Continue Onboarding</h1> : ( <> */}

                        <h1>Login</h1>


                        <form onSubmit={userLoginClick}>

                            <div>
                                <label> Email</label>
                            </div>

                            {/* Email Input */}
                            <div>
                                <input type='email'
                                    placeholder='Email'
                                    required
                                    onChange={(e) => { setEmail(e.target.value) }}

                                />
                            </div>

                            <div>
                                <label>Password</label>
                            </div>

                            {/* Password Input */}
                            <div>
                                <input type='password'
                                    placeholder='Password'
                                    required
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}

                                />
                            </div>



                            <div>
                                <input type="submit" disabled={loading} />
                            </div>
                        </form>
                        {/* </> */}
                        {/* ) */}
                    </div>
                }

                <div>
                    <Link to={'/'}>SignUp</Link>
                </div>
            </div>


        </div>
    )
}
