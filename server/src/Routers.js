import { Route } from "react-router-dom";
import React from "react";
import home from "./container/home";

export default (
  <div>
    <Route path="/" exact component={home}></Route>
  </div>
);
