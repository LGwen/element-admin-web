const path = require("path");
const webpack = require("webpack");
// const createThemeColorReplacerPlugin = require("./config/plugin.config")

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
const vueConfig = {
  publicPath: "./",
  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    // if prod, add externals
    externals: {}
  },

  chainWebpack: config => {
    config.resolve.alias.set("@$", resolve("src"));

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-icon-loader")
      .loader("vue-svg-icon-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      });

    // if prod is on
    // assets require on cdn
    // if (isProd) {
    //   config.plugin("html").tap(args => {
    //     args[0].cdn = assetsCDN
    //     return args
    //   })
    // }
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          "primary-color": "#b40019",
          "link-color": "#b40019",
          "border-radius-base": "4px"
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: 8000,
    host: "0.0.0.0",
    contentBase: "./dist",
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      "X-Custom-Foo": "bar",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    },
    proxy: {
      "/user/*": {
        target: "http://192.168.1.8:8080",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/user": "user" }
      }
    }
  },
  // disable source map in production
  productionSourceMap: false,
  lintOnSave: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
};

// // preview.pro.loacg.com only do not use in your production;
// if (process.env.VUE_APP_PREVIEW === "true") {
//   console.log("VUE_APP_PREVIEW", true)
//   // add `ThemeColorReplacer` plugin to webpack plugins
//   vueConfig.configureWebpack.plugins.push(createThemeColorReplacerPlugin())
// }

module.exports = vueConfig;
