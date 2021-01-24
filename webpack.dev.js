const path = require('path')
const webpack = require('webpack')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel_loader"
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
    })
  ]
}
