import Home from "./container/home";
import Login from "./container/login";

export default [
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
];
