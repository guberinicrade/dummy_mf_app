import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Child from "child/Child";
import "./index.css";
import classes from "../../css_modules/main.module.css";
import { StoreProvider, useStore } from "store/store";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate()
  //state
  const [users, setUsers] = useState([
    { username: "rade", password: "123" },
    { username: "zhika", password: "123" },
    { username: "arlind", password: "123" },
    { username: "alex", password: "123" },
    { username: "iryna", password: "123" },
  ]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //functions
  const handleLogin = () => {
    for (const user of users) {
      if (user.username === username && user.password === password) {
        navigate('/home')
        return;
      }
    }
  };

  return (
    <div className={classes.host_container}>
      <div className={classes.wrapper}>
        <Routes>
          <Route
            path={"/"}
            element={
              <LoginPage
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin}
              />
            }
          />
          <Route path={"home"} element={<Child/>}/>
        </Routes>
      </div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById("app")
);
