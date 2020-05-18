import React, { useState, useEffect } from "react";
import "./App.css";
import TuttiFrutti from "./components/tuttiFrutti/TuttiFrutti";
import { Route, Switch, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import TuttiFruttiLetter from "./components/tuttiFrutti/TuttiFruttiLetter";
import Stats from "./components/Stats";
import Profile from "./components/Profile";
import MathMars from "./components/mathMars/MathMars";
import ProtectedRoute from "./components/ProtectedRoute";

////SOCKET IO
import socketIOClient from "socket.io-client";

//If there is a problem put socket in state
let socket;
///SOCKET IO

function App(props) {
  const [user, setUser] = useState(props.user);

  // const [response, setResponse] = useState("");
  /////SOCKET IO
  const [linkTo, setLinkTo] = useState("");

  ///ComponentDidMount for classes
  useEffect(() => {
    socket = socketIOClient("http://localhost:5555");
    socket.on("New game", (data) => {
      setLinkTo(data.newGame);
    });
  }, []);

  // const emit = () => {
  //   socket.emit("Hello", { markus: "/games/tutti-frutti" });
  // };

  //////SOCKET IO

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      {/* <Profile user={user} setUser={setUser} /> */}

      {linkTo && (
        <Link to={linkTo} onClick={() => setLinkTo("")}>
          <h1>Go</h1>
        </Link>
      )}
      <Switch>
        <Route
          exact
          path="/games"
          render={(props) => <Games user={user} socket={socket} {...props} />}
        />
        <Route
          exact
          path="/games/tutti-frutti"
          render={(props) => (
            <TuttiFrutti user={user} socket={socket} {...props} />
          )}
        />
        <Route
          exact
          path="/games/math-mars"
          render={(props) => (
            <MathMars user={user} socket={socket} {...props} />
          )}
        />
        <Route
          exact
          path="/games/tutti-frutti/:letter"
          render={(props) => <TuttiFruttiLetter user={user} {...props} />}
        />
        <ProtectedRoute
          exact
          path="/stats"
          user={user}
          socket={socket}
          component={Stats}
          //render={(props) => <Stats user={user} socket={socket} {...props} />}
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
      </Switch>
    </div>
  );
}

export default App;
