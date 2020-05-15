import React from "react";
import { Alert } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const initialState = {
  username: "",
  password: "",
  message: "",
};

export default function Login({ setUser, history }) {
  const { username, password, message, handleChange, handleLogin } = useAuth(
    initialState,
    setUser,
    history
  );

  return (
    <div className="containerLogin">
      <div className="loginForm">
        <form onSubmit={handleLogin}>
          <div className="formGroup">
            <h2>Welcome!</h2>
            <h6>Log in with your account</h6>
            <label htmlFor="username" /> <h3> Username</h3>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              id="username"
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password" />
            <h3>Password</h3>

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              id="password"
            />
          </div>

          {message && <Alert variant="danger">{message}</Alert>}
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
