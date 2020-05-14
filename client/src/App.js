import React, { useState } from "react";
import "./App.css";
import TuttiFrutti from "./components/TuttiFrutti";
import { Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App(props) {
  const [user, setUser] = useState(props.user);
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <h1>Hello</h1>
      <TuttiFrutti />
      <Route
        exact
        path="/login"
        render={(props) => <Login setUser={setUser} {...props} />}
      />
      <Route
        exact
        path="/signup"
        render={(props) => <Signup setUser={setUser} {...props} />}
      />
    </div>
  );
}

export default App;
