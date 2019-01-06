const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "", dir);
}

// webpack
module.exports = {
  // add config alias
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.101.6:30645"
      },
      "/v1": {
        target: "http://192.168.101.5:30880"
      }
    },
    host: "localhost",
    port: 8080,
    open: true
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.include
      .add(resolve('src/assets')) // eslint-disable-line
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "[name]"
      });
  }
};
