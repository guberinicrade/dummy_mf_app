import React, { useState, useRef } from "react";
import classes from "../../../css_modules/main.module.css";

const LoginPage = (props) => {
  //state
  //functions
  const checkInputValidity = () => {
    if (props.username === "" || props.password === "") {
      props.setErrorMsg("Please fill all fields!");
      return;
    }
    props.handleLogin();
  };
  return (
    <div className={classes.login}>
      <div className={classes["login-container"]}>
        <div className={classes["input-container"]}>
          <h2>
            Team 1 <br /> Please Log in
          </h2>
          <input
            type="text"
            placeholder="Username"
            onInput={(event) => {
              props.setUsername(event.target.value);
            }}
            onFocus={()=>{props.setErrorMsg('')}}
          />
          <input
            type="password"
            placeholder="Password"
            onInput={(event) => {
              props.setPassword(event.target.value);
            }}
            onFocus={()=>{props.setErrorMsg('')}}
          />
        </div>
        <button
          className={classes["login-button"]}
          onClick={checkInputValidity}
        >
          Log in
        </button>
        {props.errorMsg && <span className={classes['login-error']}>{props.errorMsg}</span>}
        {props.isLoggedIn}
      </div>
    </div>
  );
};

export default LoginPage;
