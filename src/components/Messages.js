import React, { useEffect, useState } from "react";
import Fetch from "../helper/Fetch";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col text-gray-600 bg-purple-300 text-2xl items-center w-screen h-screen pt-16 overflow-x-auto">
      <h2 className="">{username} logged in</h2>
      <div className="mt-20 pl-10 flex justify-start items-start w-screen">
        copy link to messageBox:
        <Link className="text-purple-700" to={messagePage}>
          http://localhost:3000/user/{username}
        </Link>
      </div>
      <p className="mt-10 w-screen flex justify-start pl-10 ">Your Messages:</p>
      <br />
      <div className="flex flex-col w-screen pl-20">
        {message.length === 0
          ? "No messages for you yet lol"
          : message.map((messages, mesInd) => {
              return (
                <div
                  className=" w-max flex flex-col justify-start mr-96  p-3 border-gray-600 border-2 bg-purple-500 m-3 text-gray-200 rounded-lg text-xl"
                  key={`p${mesInd}`}
                >
                  <span className="text-base">Anonymous user says:</span>
                  <span className="ml-20 mt-3">{messages.message}</span>
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
