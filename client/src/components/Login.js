import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
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
    <>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label htmlFor="username">Username: </Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            id="username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password: </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="password"
          />
        </Form.Group>
        {message && <Alert variant="danger">{message}</Alert>}
        <Button type="submit">Signup</Button>
      </Form>
    </>
  );
}
