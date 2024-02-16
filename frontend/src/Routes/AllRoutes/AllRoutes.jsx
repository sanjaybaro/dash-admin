import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from '../Pages/SignUp/SignUp'
import { Login } from '../Pages/Login/Login'
import { PrivateRoute } from './PrivateRoute'



export const AllRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}
