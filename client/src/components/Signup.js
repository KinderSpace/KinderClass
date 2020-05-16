import React from "react";
import { Alert } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const initialState = {
  username: "",
  password: "",
  message: "",
  role: "",
};

export default function Signup({ history, setUser }) {
  const { username, password, message, handleSignup, handleChange } = useAuth(
    initialState,
    setUser,
    history
  );

  return (
    <div className="containerLogin">
      <div className="loginForm">
        <form onSubmit={handleSignup}>
          <div className="formGroup">
            <h2>Welcome!</h2>
            <h6>Create an account</h6>
            <label htmlFor="username" />
            <h3> Username</h3>
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
          <div className="checkBox">
            <label htmlFor="kid">Kid</label>
            <input
              type="radio"
              name="role"
              id="kid"
              value="kid"
              onChange={handleChange}
            />
            <label htmlFor="teacher">Teacher</label>
            <input
              type="radio"
              name="role"
              id="teacher"
              value="teacher"
              onChange={handleChange}
            />
          </div>
          {message && <Alert variant="danger">{message}</Alert>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
