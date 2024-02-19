import React, { useEffect, useState } from "react";
import axios from "axios";
import { appUrl } from "../../Constants/Constant";
import { EditModal } from "./EditModal";
import { DeleteModal } from "./DeleteModal";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";

export const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${appUrl}/user`).then((res) => {
      setData(res.data.allUser);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {data.map((el) => (
        <div
          key={el._id}
          style={{
            border: "2px solid grey",
            margin: "20px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            background: "#ffffff",
          }}
        >
          <Wrap>
            <WrapItem>
              <Avatar
                size="xl"
                name={el.userName}
                src={`${appUrl}/uploads/${el.profileImage}`}
              />
            </WrapItem>
          </Wrap>
          <p style={{ margin: "10px 0" }}>User Name: {el.userName} </p>
          <p style={{ margin: "10px 0" }}>User email: {el.email} </p>
          <p style={{ margin: "10px 0" }}>User phone: {el.phoneNumber} </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <EditModal {...el} />
            <DeleteModal {...el} />
          </div>
        </div>
      ))}
    </div>
  );
};
