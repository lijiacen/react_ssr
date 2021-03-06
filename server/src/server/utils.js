//使用 react-dom/server renderToString编译react dom变成字符串，直接插入html中
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import React from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

export const render = (req, store, routes, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  let cssStr = context.css.length ? context.css.join("\n") : "";
  return `
      <html>
        <head>
          <style>${cssStr}</style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.context = ${JSON.stringify(store.getState())}
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>`;
};
