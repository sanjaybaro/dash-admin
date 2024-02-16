
import React, { useEffect, useState } from 'react'
import style from '../userProfile/UserProfile.module.css'
import { Avatar, Button } from '@chakra-ui/react'
import { EditModal } from './EditModal'
import { DeleteModal } from './DeleteModal'
import axios from 'axios'
import { appUrl } from '../../../Constants/Constant'

export const UserProfile = () => {

  const [userData, setUserData] = useState([])
  const [loading, setLoading] =- useState(false)

  useEffect(()=>{
    console.log("((((((");
    axios.get(`${appUrl}/user`)
    .then((res)=>{
      console.log(res);
    })
  }, [])
 
  return (
    <div className={style.dashboardComponentContainer}>
      {/* { loading &&
        userData.map((data) => (
          <div key={data.id} className={style.userCard}>
            <div className={style.userCardAvatar}>
              <Avatar
                size='lg'
                name={`${data.userName}`}
                src=''
              />
            </div>
      
            <p><span>User Name:</span> {data.userName}</p>
            <p><span>Phone:</span> {data.phoneNumber}</p>
            <p><span>Email:</span> {data.email}</p>
            
            <div className={style.ButtonEditorContainer}>

             

              <div className={style.editModalContainer} >
                <EditModal {...data} />
              </div>

              <div className={style.editModalContainer}>
                <DeleteModal {...data}/>
              </div>

             
            </div>
          </div>
        ))
      } */}

      {/* userData */}

      
    </div>
  )
}
