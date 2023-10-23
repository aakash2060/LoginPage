import React, { useState } from 'react';
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className ="Login">
    <div className = 'LoginBox'>
      <div className = "appLogo">
        <img src= "./images/logotrans.png" alt="Logo"/>
        </div>
    <div className = 'LoginHeader'>    User Login </div>
      <div className = "inputs">
        <input className = "email" placeholder = "Email"/>
        <input 
        className = "password" 
        placeholder = "Password"
        type = {showPassword ? 'text' : 'password'}/>
        <a onClick ={() => setShowPassword(!showPassword)}
                className= "showPasswordLink">
          {showPassword ? 'Hide Password' : 'Show Password'}
          </a>
          <a href="/forgot-password" className="forgotPasswordLink">
            Forgot Password?
          </a>
      </div>
      <div style ={{display: "flex", justifyContent: "center", color: 'black'}}>
        <button className = "submitbutton">Login</button>
        <button className = "signupbutton">Sign Up</button>
      
    </div>
    </div>
    </div>
  );
}

export default App;
