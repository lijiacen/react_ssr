//使用 react-dom/server renderToString编译react dom变成字符串，直接插入html中
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routers";
import React from "react";

export const render = (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
  );
  return `<html>
  <head></head>
  <body>
      <div id="root">${content}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`;
};
