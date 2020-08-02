import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Routers";
import getStore from "../store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        {Routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
