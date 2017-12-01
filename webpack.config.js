var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'app.js',
    publicPath:"../../dist/"
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader","css-loader")

      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders:{
            css: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader'
            })
        }}
      },
      {　　　　　　
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=5000&name=images/[name].[ext]'　　　　
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  plugins:  [

      new ExtractTextPlugin("app.css"),
  ],
  watch: true
}
