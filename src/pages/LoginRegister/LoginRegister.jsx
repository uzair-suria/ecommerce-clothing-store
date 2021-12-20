import React from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import "./LoginRegister.scss";

const LoginRegister = () => {
  return (
    <>
      <div className="login-register">
        <Login />
        <Register />
      </div>
    </>
  );
};

export default LoginRegister;
