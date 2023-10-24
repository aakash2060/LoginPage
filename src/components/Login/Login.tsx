import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="Login">
      <div className="LoginBox">
        <div className="appLogo">
          <img src="./images/logotrans.png" alt="Logo" />
        </div>
        <div className="LoginHeader"> User Login </div>
        <div className="inputs">
          <input className="email" placeholder="Email" />
          <input
            className="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <a
            onClick={() => setShowPassword(!showPassword)}
            className="showPasswordLink"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </a>
          <a href="/forgot-password" className="forgotPasswordLink">
            Forgot Password?
          </a>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", color: "black" }}
        >
          <button className="submitbutton">Login</button>
          <Link to="/SignUp" className="signupbutton">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
