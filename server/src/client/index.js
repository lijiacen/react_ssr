import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "../Routers";
import { getClientStore } from "../store";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={getClientStore(window.context)}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
