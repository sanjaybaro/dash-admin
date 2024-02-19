import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { appUrl, userSignUp } from "../../../Constants/Constant";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpLoader, setSignUpLoader] = useState(false);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);

  const userSignClick = (e) => {
    const data = {
      email,
      password,
      phoneNumber,
      userName,
    };
    e.preventDefault();
    setSignUpLoader(true);
    console.log(data);
    axios.post(`${appUrl}${userSignUp}`, data).then((res) => {
      console.log(res);
      alert(`${res.data.message}`);
      setSignUpLoader(false);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f9f9f9",
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          background: "white",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Link
            to={"/userProfile"}
            style={{
              textDecoration: "none",
              color: "#333",
              marginRight: "20px",
              padding: "8px 16px",
              borderRadius: "4px",
              background: "#ccc",
              transition: "background 0.3s",
            }}
          >
            Profile
          </Link>
          <Link
            to={"/login"}
            style={{
              textDecoration: "none",
              color: "#333",
              padding: "8px 16px",
              borderRadius: "4px",
              background: "#ccc",
              transition: "background 0.3s",
            }}
          >
            Login
          </Link>
        </div>
        <h1 style={{  textAlign: "center" ,margin:"10px"}}>Sign Up</h1>
        <form
          onSubmit={userSignClick}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Email</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "300px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Username</label>
            <input
              type="text"
              placeholder="Username"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "300px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Phone</label>
            <input
              type="number"
              placeholder="Phone Number"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "300px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Password</label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "300px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div>
            <input
              type="submit"
              disabled={signUpLoader}
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                border: "none",
                background: "#007bff",
                color: "white",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
