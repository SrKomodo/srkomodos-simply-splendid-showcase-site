const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
}
