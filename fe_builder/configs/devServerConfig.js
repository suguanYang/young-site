const config = require("./assets");

module.exports = {
  contentBase: config.output_dir,
  port: config.port,
  compress: true,
  https: true,
};
