const path = require("path");
// const webpack = require('webpack');
const ManifestPlugin = require("webpack-manifest-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const devServer = require("./fe_builder/configs/devServerConfig");
const entryConfig = require("./fe_builder/configs/appTypesConfig");

const DEV = process.env.NODE_ENV !== "production";

function config() {
	return {
	  entry: path.resolve(__dirname, "./fe/pages/index/index.tsx"),
	  output: {
	    path: path.resolve(__dirname, "./public/webpack/"),
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
	      fileName: "../manifest-fe-manifest.json",
	      writeToFileEmit: true,
	    }),
	  ],
	  optimization: {
	    runtimeChunk: "single",
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