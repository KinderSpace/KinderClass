import { useState } from "react";
import { signup, login } from "../services/auth";

export default function useAuth(initialState, setUser, history) {
  const [form, setForm] = useState(initialState);
  const { username, password, message } = form;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSignup(e) {
    e.preventDefault();

    const data = await signup(username, password);
    afterAuth(data);
  }

  async function handleLogin(e) {
    e.preventDefault();

    const data = await login(username, password);
    afterAuth(data);
  }

  function afterAuth(data) {
    if (data.message) {
      setForm({
        ...form,
        message: data.message,
      });
    } else {
      setUser(data);
      history.push("/");
    }
  }

  return {
    username,
    password,
    message,
    handleSignup,
    handleChange,
    handleLogin,
  };
}