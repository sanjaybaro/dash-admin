import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { appUrl } from '../../Constants/Constant';
import { EditModal } from './EditModal';
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { DeleteModal } from './DeleteModal';



export const Profile = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log("((((((");
        axios.get(`${appUrl}/user`)
            .then((res) => {
                console.log(res);
                setData(res.data.allUser)
            })
    }, [])

    console.log(data);
    return (
        <div>
            {
                data.map((el) => (
                    <div style={{ border: "2px solid grey", margin: "5px" }}>


                        <Wrap>
                            <WrapItem>
                                <Avatar size='xl' name={el.userName} src={`${appUrl}/uploads/${el.profileImage}`} />
                            </WrapItem>
                        </Wrap>
                        <p>User Name : {el.userName} </p>
                        <p>User email : {el.email} </p>
                        <p>User phone : {el.phoneNumber} </p>
                        <div>
                            <EditModal {...el} />
                        </div>

                        <div>
                            <DeleteModal {...el} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
