const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server/lib/Server");

const assetsConfig = require("./configs/assets");
const WebpackCompiler = require("./lib/WebpackCompiler");
const compilerConfigCreator = require("../webpack.config");

const config = compilerConfigCreator();


const ENV = process.env.NODE_ENV;

if (ENV === "development") {
  const server = new WebpackDevServer(webpack(config), config.devServer);

  server.listen(assetsConfig.port, assetsConfig.host, () => {
    console.info(`starting webpackDevServer at ${assetsConfig.host}:${assetsConfig.port}`);
  });
} else if (ENV === "production") {
  const compiler = new WebpackCompiler(webpack(config), config);

  compiler.start();
}

