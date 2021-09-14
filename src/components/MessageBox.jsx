/* eslint-disable no-const-assign */
import React, { useState } from "react";
import Fetch from "../helper/Fetch";
const MessageBox = ({ match,history }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const handleText = (e) => setText(e.target.value);
  const addMore = (username) => {
    if (text)
      Fetch.addMessages({ message: text }, username)
        .then(() => {
          setText("");
          setError(`Anonymous message succesfully sent to ${username}`);
          setTimeout(() => {
            setError("");
          }, 3000);
        })
        .catch(() => {
          setText("");
          setError("invalid link");
          setTimeout(() => {
            setError("");
          }, 3000);
        });
  };
  const { username } = match.params;
  const handleSignUp = () => {
    history.push('/')
  }
  return (
    <div className=' h-screen w-screen bg-gray-900 flex flex-col pt-20 text-2xl pl-20 overflow-auto '>
      <p className='text-xl text-white text-center'>{error}</p>
      <p className='pb-2 text-gray-300 text-center'>messageBox for {username}</p>
      <div className='m-auto w-4/5 md:w-2/5 md:h-60 '>
      <textarea
        className= ' text-white bg-purple-600 h-44 outline-none text-base pl-2 border-2 border-gray-400 rounded-xl'
        value={text}
        onChange={handleText}
        cols="50"
        rows="1"
        placeholder="write a message for ......."
      ></textarea>
      <button className='flex w-14 p-1 rounded-lg text-xl text-center mt-1 outline-none border-2 border-gray-500 bg-purple-600 ' onClick={() => addMore(username)}>send</button>
      </div>
      <div className='flex items-center justify-center mt-40'>
      <button className='border-2 border-gray-500 bg-purple-600 text- text-lg max-w-max rounded-xl p-1' onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default MessageBox;
