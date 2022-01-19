import React from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="registerContainer">
      <div className="formContainer">
        <span className="title">SIGN IN</span>
        <div className="inputs">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="formBtn" onClick={handleClick}>
          CREATE
        </button>
        {error && (
          <span className="ps" style={{ color: "red" }}>
            Something went wrong
          </span>
        )}

        <span className="ps">Forgot password?</span>
        <span className="ps">Sign Up</span>
      </div>
    </div>
  );
};

export default Register;
