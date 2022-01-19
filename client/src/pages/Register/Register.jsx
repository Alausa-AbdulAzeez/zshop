import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="formContainer">
        <span className="title">CREATE AN ACCOUNT</span>
        <div className="inputs">
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="lastname" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
        </div>
        <button className="formBtn">CREATE</button>
      </div>
    </div>
  );
};

export default Register;
