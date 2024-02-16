import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from '../Pages/SignUp/SignUp'
import { Login } from '../Pages/Login/Login'
import { PrivateRoute } from './PrivateRoute'
import { UserProfile } from '../Pages/userProfile/UserProfile'
import { Profile } from '../Pages/Profile'



export const AllRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/userProfile' element={
                <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            } />
        </Routes>
    )
}
