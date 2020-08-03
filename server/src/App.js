import React from "react";
import Header from "./components/header";
import { renderRoutes } from "react-router-config";
import { actions } from "./components/header/store";

const App = (props) => {
  return (
    <div>
      <Header />
      {renderRoutes(props.route.routes)}
    </div>
  );
};

App.loadData = (store) => {
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(actions.getHeaderInfo());
};

export default App;
