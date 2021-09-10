import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Create";
import MessageBox from "./components/MessageBox";
import Messages from "./components/Messages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/messages" exact component={Messages} />
        <Route path="/user/:username" exact component={MessageBox} />
      </Switch>
    </div>
  );
};

export default App;
