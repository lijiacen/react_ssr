import Home from "./container/home";
import Login from "./container/login";
import App from "./App";

//嵌套路由+二级路由
export default [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData
      },
      {
        path: "/login",
        exact: true,
        component: Login
      }
    ]
  }
];
