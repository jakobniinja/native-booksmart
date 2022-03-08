// used by react-app-rewired

const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: function (config, env) {
    config.module.rules[1].use[0].options.baseConfig.extends = [
      path.resolve(".eslintrc.js"),
    ];

    const webAliases = {
      "react-native": path.resolve("web/aliases/react-native"),
    };
    Object.assign(config.resolve.alias, webAliases);

    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== "production",
      })
    );

    return config;
  },
  paths: function (paths, env) {
    paths.appIndexJs = path.resolve("index.web.js");
    paths.appSrc = path.resolve(".");
    paths.moduleFileExtensions.push("ios.js");
    return paths;
  },
};
