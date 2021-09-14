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
    <div className="create w-screen h-screen flex flex-col justify-start items-center pt-20 text-2xl">
      <p>{error}</p>
      <div className='bg-white pb-10 px-1 md:px-10 pt-10 mt-8 md:mt-4 rounded-2xl text-center flex flex-col'>
      <p className="pb-3">Login to Anonymous</p>
      <form
        className="flex rounded-lg flex-col pt-8"
        onSubmit={handleLogin}
      >
        
        <input
          className="bg-gray-200 w-4/5 md:w-96 ml-10 md:ml-0  text-xl outline-none border-2 border-gray-300 rounded-lg p-2 font-serif"
          type="text"
          placeholder='Enter Your Username'
          required
          value={username}
          onChange={handleUsername}
        />
        <br />
        <input
          className="bg-gray-200 w-4/5 md:w-96 ml-10 md:ml-0 text-xl outline-none border-2 border-gray-300 rounded-lg p-2 font-serif"
          type="password"
          required
          value={password}
          onChange={handlePassword}
          placeholder='Enter Your Password'
        />
        <button className="mt-10  w-4/5 md:w-96 ml-10 md:ml-0 border-2 text-center border-white rounded-2xl text-white   h-12 bg-blue-400 ">
          Login
        </button>
      </form>
      <p className=' mt-6 text-base'> 
        Dont't have an account?
      <button
        className="border-b-2 border-blue-400  text-center  text-blue-500  p-1 ml-2"
        onClick={handleLogout}
      >
        sign up
      </button>
      </p>
      </div>
    </div>
  );
};

export default Login;
