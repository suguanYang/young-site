const config = require("./scriptsAddress")
const path = require("path")
const fs = require("fs")

const envConfig = config[process.env.NODE_ENV]
module.exports = {
  // contentBase: envConfig.path,
  port: envConfig.port,
  compress: true,
  https: {
    key: fs.readFileSync(path.join(__dirname, "../../ssl/localhostkey.pem")),
    cert: fs.readFileSync(path.join(__dirname, "../../ssl/localhostcert.pem"))
  },
}
