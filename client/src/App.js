import React, { useState } from "react";
import "./App.css";
import TuttiFrutti from "./components/TuttiFrutti";
import { Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import TuttiFruttiLetter from "./components/TuttiFruttiLetter";

function App(props) {
  const [user, setUser] = useState(props.user);
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <h1>Hello</h1>
      <Route
        exact
        path="/games/tutti-frutti"
        render={(props) => <TuttiFrutti user={user} {...props} />}
      />
      <Route
        exact
        path="/games/tutti-frutti/:letter"
        render={(props) => <TuttiFruttiLetter user={user} {...props} />}
      />
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
