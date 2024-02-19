
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { appUrl } from '../Constants/Constant'


export const appContent = createContext()
export const ContextApi = ({children}) => {
    
    const token = localStorage.getItem('Token')
    const [isAuth, setIsAuth] = useState(false)
    const userId = localStorage.getItem('UserId')
    const [userData, setUserData] = useState({})
    const [loginOpen, setLoginOpen] = useState(false)
    const [userProfileLoading, setUserProfileLoading] = useState(false)
    

    console.log("Token", token)
    
    
    useEffect(()=>{
      
        if(token){
            setIsAuth(true)
            // setUserProfileLoading(true)
            // axios.get(`${appUrl}user/${userId}`)
            // .then((res)=>{
            //     // console.log(res);
            //     setUserData(res.data.user)
            //     setUserProfileLoading(false)
            // })
            // .catch((err)=>{
            //     console.log(err);
            // })
        }
    }, [])

    // console.log("contextApi login open", loginOpen);

    return <appContent.Provider value={{isAuth, setIsAuth, userData, loginOpen, setLoginOpen, userProfileLoading}}>{children}</appContent.Provider>

  
}
