const path = require("path");
const nodeExternals = require("webpack-node-externals"); //部分后端用的node包被babel-loader的node_modules忽略,需要用此工具导入
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              },
              esModule: false
            }
          }
        ]
      }
    ]
  },
  externals: [nodeExternals()]
});
