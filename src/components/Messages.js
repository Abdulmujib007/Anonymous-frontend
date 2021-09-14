import React, { useEffect, useState } from "react";
import Fetch from "../helper/Fetch";

const Messages = ({ history }) => {
  const [message, setMessage] = useState([]);
  const user = window.localStorage.getItem("loggedUser");
  const username = JSON.parse(user).username;
  useEffect(() => {
    Fetch.getUserData(username)
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const messagePage = `/user/${username}`;
  const logOut = () => {
    window.localStorage.clear();
    history.push("/login");
  };
  
  return (
    <div className="message first-div flex flex-col text-gray-600 text-2xl items-center w-screen h-screen pt-16 overflow-auto overflow-x-hidden">
      <h2 className="">{username} logged in</h2>
      <div className="mt-20  md:flex-row flex flex-col">
       <span className='text-base md:text-xl'>
         copy link to messageBox:
         </span> 
        <span className="text-purple-700   text-base md:text-xl " to={messagePage}>
        https://anonymously.netlify.app/user/{username}
        </span>
      </div>
      <p className="mt-10 w-screen flex justify-start pl-10 ">Your Messages:</p>
      <br />
      <div className="page ml-10 md:ml-20 flex flex-col">
        {message.length === 0
          ? "No messages for you yet lol"
          : message.map((messages, mesInd) => {
              return (
                <div
                  className="w-4/5 md:w-2/4 flex flex-col justify-start p-3 border-gray-600 border-2 bg-purple-500  text-gray-200 rounded-lg text-xl mb-3"
                  key={`p${mesInd}`}
                >
                  <span className="text-base">Anonymous user say:</span>
                  <span className=" ml-2 mt-1 md:ml-8 md:mt-3">{messages.message}</span>
                </div>
              );
            })}
      </div>
      <button
        className="mt-36 mb-10  rounded-lg border-purple-500 border-2 bg-gray-400 text-gray-700 outline-non p-1"
        onClick={logOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Messages;
