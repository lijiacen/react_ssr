import Home from "./container/home";
import Translation from "./container/translation";
import NotFound from "./container/not_found";
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
        path: "/translation",
        component: Translation,
        exact: true,
        loadData: Translation.loadData
      },
      {
        component: NotFound
      }
    ]
  }
];
