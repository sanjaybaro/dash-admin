import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { appUrl, userLogin } from "../../../Constants/Constant";
import { appContent } from "../../../ContextApi/ContextApi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setIsAuth } = useContext(appContent);

  const userLoginClick = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
    axios.post(`${appUrl}${userLogin}`, data).then((res) => {
      console.log(res);
      alert(`${res.data.message}`);
      localStorage.setItem("Token", res.data.token);
      localStorage.setItem("UserId", res.data.userId);
      setLoading(false);
      setIsAuth(true);
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f4f4f4" }}>
      <div style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", background: "white" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ marginBottom: "20px" }}>
            <Link to={"/userProfile"} style={{ textDecoration: "none", color: "#333", marginRight: "20px", padding: "8px 16px", borderRadius: "4px", background: "#ccc", transition: "background 0.3s" }}>Profile</Link>
            <Link to={"/"} style={{ textDecoration: "none", color: "#333", padding: "8px 16px", borderRadius: "4px", background: "#ccc", transition: "background 0.3s" }}>SignUp</Link>
          </div>
          <div style={{ padding: "20px", textAlign: "center", borderRadius: "8px", background: "#f0f0f0", transition: "background 0.3s" }}>
            <h1 style={{ marginBottom: "20px" }}>Login</h1>
            <form onSubmit={userLoginClick}>
              <div style={{ marginBottom: "10px" }}>
                <label style={{ marginRight: "10px" }}>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" }}
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
                  style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <input type="submit" disabled={loading} style={{ padding: "8px 16px", borderRadius: "4px", border: "none", background: "#007bff", color: "white", cursor: "pointer", transition: "background 0.3s" }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
