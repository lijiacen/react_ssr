const express = require("express");
const app = express();
const port = 3001;
import { render } from "./utils";
import React from "react";

app.use(express.static("public")); //发现请求是个静态文件，则去public根目录下面找

app.get("*", (req, res) => {
  res.send(render(req));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
