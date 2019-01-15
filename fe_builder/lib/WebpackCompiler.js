// const fs = require("fs");
const webpack = require("webpack");
const EventEmitter = require("events").EventEmitter;

module.exports = class WebpackCompiler extends EventEmitter {
  constructor(compiler, options) {
    super();
    this.options = options;
    this.compiler = compiler;
    // eslint-disable-next-line no-console
    this.log = console.log;
  }

  start() {
    return new Promise((resolve, reject) => {
      this.compiler.run((err, stats) => {
        if (err) {
          this.log(err);
          reject(err);
        } else {
          resolve(stats);
        }
      });
    });
  }

  watch(opt) {
    return new Promise((resolve, reject) => {
      this.compiler.watch(opt, (err, stats) => {
        if (err) {
          reject(err);
        } else {
          resolve(stats);
        }
      });
    });
  }

  listenProgress() {
    const progressPlugin = new webpack.ProgressPlugin(
      (percent, msg, addInfo) => {
        percent = Math.floor(percent * 100);

        if (percent === 100) {
          msg = "Compilation completed";
        }

        if (addInfo) {
          msg = `${msg} (${addInfo})`;
        }
        this.log(msg);
      }
    );
    progressPlugin.apply(this.webpackCompiler);
  }
};

