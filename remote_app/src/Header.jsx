import React from "react";
import classes from "../../css_modules/main.module.css";

const Header = ({ counter, resetCounter }) => {
  return <div className={classes.header}>I am a REMOTE APP {counter} <button onClick={resetCounter}>reset</button></div>;
};

export default Header;
