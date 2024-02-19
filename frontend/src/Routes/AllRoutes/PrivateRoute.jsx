import React, { useContext } from 'react'
import { appContent } from '../../ContextApi/ContextApi'
import { Navigate } from 'react-router-dom'


export const PrivateRoute = ({ children }) => {
    const {isAuth} = useContext(appContent)
    console.log("isAuth", isAuth);
    if(isAuth){
        return children;
        
    }
    else{
        // alert('Please Login To Continue.')
        return <Navigate to={'/login'} />
    }



}
