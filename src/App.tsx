import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
