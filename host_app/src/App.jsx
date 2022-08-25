import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "child/Child";
import "./index.css";
import classes from "../../css_modules/main.module.css";
import { StoreProvider, useStore } from "store/store";

const App = () => {
  const [counter, setCounter] = useState(0);
  const { count, increment } = useStore();
  const handleSetCounter = () => {
    setCounter(counter + 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };

  useEffect(() => {
    console.log(store);
  }, []);
  return (
    <div className={classes.host_container}>
      <div className={classes.host_div}>
        <p>I belong to the HOST APP from Arlind</p>
        <p>{counter}</p>
        <button onClick={handleSetCounter}>increment</button>
      </div>
      <Header counter={counter} resetCounter={resetCounter} />
      <p>this comes from the store {count}</p>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
