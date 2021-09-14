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
    <div className="create w-screen h-screen flex flex-col  items-center  gap-y-5 text-2xl pt-4">
      <p className="text-center">{success}</p>
      <div className='bg-white pb-14 px-1  md:px-10 pt-10 mt-14 md:mt-10 rounded-2xl text-center flex flex-col '>
      <h1 className="p-tag text-black text-4xl  font-medium ">create account</h1>
      <p className='text-lg mt-2'>
        Already have an account? 
        <button
        className="text-blue-500 border-b-2  outline-none  border-blue-400 ml-1"
        onClick={showLogin}
      >
         Sign in
      </button>
      </p>
      <form className= "flex flex-col mt-10 ">
        <input
          className=" bg-gray-200 w-4/5  md:w-96   ml-10  md:ml-0   text-xl outline-none border-2 border-gray-300 rounded-lg p-2 font-serif"
          type="text"
          placeholder='Username'
          value={username}
          onChange={handleUsername}
          required
        />{" "}
        <br />
        <input
          className=" bg-gray-200 ml-10 md:ml-0 w-4/5 md:w-96  text-xl outline-none border-2 border-gray-300 rounded-lg p-2 font-serif"
          type="text"
          placeholder='Password'
          value={password}
          onChange={handlePassword}
          required
        />{" "}
        <br />
        <button
          className=" mt-4 ml-10 md:ml-0 w-4/5 md:w-96 h-14 rounded-2xl border-white border-2 bg-blue-400 text-white outline-none"
          onClick={handleSubmit}
        >
          Sign up
        </button>
      </form>
     
      </div>
    </div>
  );
};

export default Create;
