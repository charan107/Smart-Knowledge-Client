import React from 'react';
import Login from "../Components/Login";
import Signup from "../Components/SignUp";
import '../styles/AuthContainer.css'; // Import the CSS file

function AuthContainer() {
  return (
    <div className="auth-container">
      <div className="form-container">
        <Login />
        <Signup />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default AuthContainer;
