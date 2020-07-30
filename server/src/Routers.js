import { Route } from "react-router-dom";
import React from "react";
import Home from "./container/home";
import Login from "./container/login";

export default (
  <div>
    <Route path="/" exact component={Home}></Route>
    <Route path="/login" exact component={Login}></Route>
  </div>
);
