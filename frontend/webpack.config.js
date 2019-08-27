// configuração webpack
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // entrada
  entry: "./src/index.jsx",
  // saida
  output: {
    path: __dirname + "/public",
    filename: "./app.js"
  },
  // servidor
  devServer: {
    port: 8080,
    contentBase: "./public"
  },
  // resolução das extrensões
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules",
      jquery: "modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js",
      bootstrap: "modules/admin-lte/bootstrap/js/bootstrap.js"
    }
  },
  // disponibilizar o jquery
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin("app.css")
  ],
  //lista de loader
  module: {
    loaders: [
      {
        // arquivos javascript
        test: /.js[x]?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        // arquivos css
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        //arquivos de fontes e imagens
        test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: "file"
      }
    ]
  }
};
