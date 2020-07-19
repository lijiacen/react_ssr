const express = require("express");
const app = express();
const port = 3001;

import React from "react";
//使用 react-dom/server renderToString编译react dom变成字符串，直接插入html中
import { renderToString } from "react-dom/server";
import Home from "../src/container/home";

const content = renderToString(<Home />);

app.get("/", (req, res) =>
  res.send(`<html>
  <head></head>
  <body>
    ${content}
  </body>
</html>`)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
