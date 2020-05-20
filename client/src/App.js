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
import MathMars from "./components/mathMars/MathMars";
import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./components/Landing/Homepage";
////SOCKET IO
import socketIOClient from "socket.io-client";

//If there is a problem put socket in state
let socket;
///SOCKET IO

const KidGameComponent = ({ setLinkTo, linkTo }) => {
  return (
    <div className="congratulations">
      <div className="popUpLink">
        <div className="linkToGame">
          <p>Your teacher has started a new game!</p>
          <Link to={linkTo} onClick={() => setLinkTo("")}>
            <h1>Go!</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

const TeacherGameComponent = () => {
  return (
    <div className="congratulations">
      <div className="popUpLink">
        <div className="linkToGame">
          <p>New game sent!</p>
        </div>
      </div>
    </div>
  );
};

function App(props) {
  const [user, setUser] = useState(props.user);
  const [connectedUsers, setConnectedUsers] = useState([]);
  /////SOCKET IO
  const [linkTo, setLinkTo] = useState("");

  ///ComponentDidMount for classes
  useEffect(() => {
    socket = socketIOClient();
    socket.on("connected-users", (data) => {
      setConnectedUsers(data.connectedUsers);
    });
    socket.on("send-game", (data) => {
      setLinkTo(data.newGame);
    });
  }, []);

  const gameSentMessage = () => {
    if (user && user.role === "kid") {
      return <KidGameComponent linkTo={linkTo} setLinkTo={setLinkTo} />;
    } else if (user && user.role === "teacher") {
      setTimeout(() => {
        setLinkTo("");
      }, 2000);
      return <TeacherGameComponent />;
    } else return <></>;
  };

  const CleanerComponent = gameSentMessage();

  const join = (username) => {
    socket.emit("join", {
      username: username,
    });
  };

  const left = (username) => {
    socket.emit("left", {
      username: username,
    });
  };
  //////SOCKET IO
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} left={left} />

      {linkTo && CleanerComponent}

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Homepage
              user={user}
              socket={socket}
              {...props}
              connectedUsers={connectedUsers}
            />
          )}
        />
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
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={setUser} {...props} join={join} />}
        />

        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup setUser={setUser} {...props} join={join} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
