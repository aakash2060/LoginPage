import React from 'react';
import './App.css';

function App() {
  return (
    <div className ="Login">
    <div className = 'LoginBox'>
      <div className = "appLogo">
        <img src= "./images/logotrans.png" alt="Logo"/>
        </div>
    <div className = 'LoginHeader'>Login </div>
      <div className = "inputs">
        <input className = "email" placeholder = "Email"/>
        <input 
        className = "password" 
        placeholder = "Password"
        type = "password"
        />
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
