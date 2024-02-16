import React, { useState } from 'react'
// import style from '../CSS/Signup.module.css'
import style from '../SignUp/Signup.module.css'
import { Link } from 'react-router-dom'



export const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    
   

 

    







    
    // Function when user click on Submit Button 

    const userLoginClick = (e) => {
        setLoading(true)
        e.preventDefault();
        const data = {
            email
        }
        
        setLoading(false)
    }


    return (
        <div className={style.signupContainer}>


            <div>

                

                {/* Heading */}

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
                            onChange={(e) => {
                               
                            }}

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
