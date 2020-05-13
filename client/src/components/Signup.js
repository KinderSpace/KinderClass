import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const initialState = {
  username: "",
  password: "",
  message: "",
};

export default function Signup({ history, setUser }) {
  const { username, password, message, handleSignup, handleChange } = useAuth(
    initialState,
    setUser,
    history
  );

  return (
    <>
      <h2>Signup</h2>
      <Form onSubmit={handleSignup}>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            id="username"
          ></Form.Control>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="password"
          ></Form.Control>
        </Form.Group>

        {message && <Alert variant="danger">{message}</Alert>}
        <Button type="submit">Signup</Button>
      </Form>
    </>
  );
}
