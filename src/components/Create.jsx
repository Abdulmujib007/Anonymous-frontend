import React from "react";
import { useState } from "react";
import Fetch from "../helper/Fetch";

const Create = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSucess] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newObj = {
      username: username,
      password: password,
    };
    try {
      await Fetch.addUser(newObj);
      console.log({ history });
      history.push("/login");
      setUsername("");
      setPassword("");
    } catch (exception) {
      if (!username || !password) {
        setSucess("pls enter username or password");
      } else {
        setSucess("username not available,choose another username");
        setUsername("");
        setPassword("");
      }
      setTimeout(() => {
        setSucess("");
      }, 3000);
    }
  };
  const showLogin = () => history.push("/login");

  return (
    <div className="bg-purple-500 w-screen h-screen flex flex-col  items-center  gap-y-5 text-2xl pt-4">
      <p className="text-red-400">{success}</p>
      <h1 className="p-tag text-white text-3xl">create account</h1>
      <form className="flex flex-col ">
        username{" "}
        <input
          className="input-tag"
          type="text"
          value={username}
          onChange={handleUsername}
          required
        />{" "}
        <br />
        password{" "}
        <input
          className="input-tag"
          type="text"
          value={password}
          onChange={handlePassword}
          required
        />{" "}
        <br />
        <button
          className=" w-52 rounded-lg ml-6 border-white border-2 bg-purple-400 text-gray-600 outline-none"
          onClick={handleSubmit}
        >
          create account
        </button>
      </form>
      <button
        className="w-auto rounded-lg border-white border-2 bg-purple-400 text-gray-600 outline-none p-1"
        onClick={showLogin}
      >
        Already have an account
      </button>
    </div>
  );
};

export default Create;
