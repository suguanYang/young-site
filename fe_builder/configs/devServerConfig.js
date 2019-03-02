const config = require("./assets");
const path = require('path');
const fs = require('fs');

module.exports = {
  contentBase: config.output_dir,
  port: config.port,
  compress: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, '../../ssl/localhostkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../../ssl/localhostcert.pem'))
  },
};
