import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import Fetch from "../helper/Fetch";
const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const oneUser = await Fetch.login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(oneUser));
      setUsername("");
      setPassword("");
      history.push("/messages");
    } catch (exception) {
      setError("invalid passwrod or username,pls try again");
      setUsername("");
      setPassword("");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  const handleLogout = () => {
    history.push("/");
  };
  return (
    <div className="w-screen h-screen  bg-gray-600 flex flex-col justify-start items-center pt-20 text-2xl">
      <p>{error}</p>
      <p className="pb-3">Login to Anonymous</p>
      <form
        className="flex rounded-lg flex-col bg-gray-400 p-12"
        onSubmit={handleLogin}
      >
        username{" "}
        <input
          className="input-tag"
          type="text"
          required
          value={username}
          onChange={handleUsername}
        />
        <br />
        password{" "}
        <input
          className="input-tag"
          type="password"
          required
          value={password}
          onChange={handlePassword}
        />
        <button className="mt-6 border-2 text-center border-white bg-purple-500 rounded-lg text-gray-800 w-40 ml-12">
          login
        </button>
      </form>
      <button
        className="mt-6 border-2 text-center border-white bg-purple-500 rounded-lg text-gray-800 w-50 p-1 ml-2"
        onClick={handleLogout}
      >
        Create Account?
      </button>
    </div>
  );
};

export default Login;
