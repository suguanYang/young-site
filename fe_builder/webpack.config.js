const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const devServer = require("./configs/devServerConfig");
const entryConfig = require("./configs/appTypesConfig");

function getAppTypes()  {
  const appTypesOption = process.argv.filter(arg => arg.includes("--appTypes=")) || ["--appTypes=main"];
  return appTypesOption[0].split("=")[1].split(",");  // get [...<apptypes>]
}

function config() {
  const appTypes = getAppTypes();
  const entries = appTypes.map(apptype => path.resolve(__dirname, entryConfig[apptype].path));
  return {
    entry: entries,
    output: {
      path: path.resolve(__dirname, "../public/dist/"),
      filename: "[name].[contenthash].js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env",],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(ts|tsx)?$/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env",],
              },
            },
            "ts-loader",
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
          ],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.less$/,
          use: [
            "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                mimetype: "image/png",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [
        ".js",
        ".jsx",
        ".tsx",
        ".ts",
      ],
    },
    plugins: [
      new ManifestPlugin({
        fileName: path.resolve(__dirname, `../public/manifest-${appTypes}.json`),
        writeToFileEmit: true,
      }),
    ],
    optimization: {
      splitChunks: {
        minChunks: 1,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    devServer,
  };
}

module.exports = config;
