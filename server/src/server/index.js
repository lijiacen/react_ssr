const express = require("express");
const app = express();
const port = 3001;

import React from "react";
//使用 react-dom/server renderToString编译react dom变成字符串，直接插入html中
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routers";

app.use(express.static("public")); //发现请求是个静态文件，则去public根目录下面找

app.get("/", (req, res) => {
  const content = renderToString(() => {
    return (
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    );
  });

  res.send(`<html>
  <head></head>
  <body>
      <div id="root">${content}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
