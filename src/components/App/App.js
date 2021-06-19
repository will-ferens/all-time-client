import React from "react";
import User from "../User/User";
import Login from "../Login/Login";

const code = new URLSearchParams(window.location.search).get("code");

function App(props) {
  return <div className="App">{code ? <User params={code} /> : <Login />}</div>;
}

export default App;