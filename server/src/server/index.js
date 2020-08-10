const express = require("express");
const app = express();
const port = 3001;
import { render } from "./utils";
import { matchRoutes } from "react-router-config";
import routes from "../Routers";
import { getStore } from "../store";
import proxy from "express-http-proxy";
import e from "express";

app.use(express.static("public")); //发现请求是个静态文件，则去public根目录下面找
app.use(
  "/api",
  proxy("http://47.95.113.63", {
    proxyReqPathResolver: function (req) {
      return "/ssr/api" + req.url;
    }
  })
);

app.get("*", (req, res) => {
  const store = getStore(req);
  //拿到异步数据，并填充到store中，解决服务端componentDidMount不执行的问题

  //store里面填充什么，需要结合当前用户请求地址和路由做判断
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];

  //循环matchRoutes，把匹配上的路由中，自定义静态方法loadData()都执行一边
  matchedRoutes.map((mr) => {
    if (mr.route.loadData) {
      const promise = new Promise((resovle, reject) => {
        //无论数据请求是否有误，正确走then，错误走catch。resovle都会被正确触发
        mr.route.loadData(store).then(resovle).catch(resovle);
      });
      promises.push(promise);
    }
  });
  Promise.all(promises).then(() => {
    let context = {};
    let html = render(req, store, routes, context);

    //重定向
    if (context.action === "REPLACE") {
      res.redirect(301, context.url);
    } else if (context.notFound) {
      //404
      res.status(404); //修改状态码
      res.send(html);
    } else {
      res.send(html);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
