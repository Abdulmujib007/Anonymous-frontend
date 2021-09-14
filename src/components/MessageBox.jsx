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
    <div className=' h-screen w-screen bg-gray-800 flex flex-col pt-20 text-2xl pl-20 overflow-auto '>
      <p className='text-xl text-white text-center'>{error}</p>
      <p className='pb-2 text-gray-300 text-center'>messageBox for {username}</p>
      <div className='m-auto w-4/5 md:w-2/5 mb-24 bg-white rounded-xl '>
      <textarea
        className= ' border-transparent text-black  outline-none text-base  p-2 rounded-xl overflow-hidden'
        value={text}
        onChange={handleText}
        maxLength='500'
        cols="48"
        rows="10"
        placeholder="write a message for ......."
      ></textarea>
      <button className='text-white w-full p-1 rounded-base text-2xl text-center mt-1 outline-none pb-2  bg-black font-mono font-semibold rounded-b-lg' onClick={() => addMore(username)}>send</button>
      </div>
      <div className='flex w-full items-center justify-center mb-10'>
      <button className=' text-xl md:text-3xl text-white font-serif font-bold max-w-max rounded-xl p-1' onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default MessageBox;
