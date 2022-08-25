import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import classes from "../../css_modules/main.module.css";

import "./index.css";

const App = ({ counter, resetCounter }) => {
  return (
    <div className={classes.container}>
      <Header counter={counter} resetCounter={resetCounter}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export default App
