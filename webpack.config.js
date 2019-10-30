const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

debugger;
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
     
    ]
  },
  entry: "./index.js",
  watch: true,
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    overlay: {
      warnings: true,
      errors: true
    },
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
