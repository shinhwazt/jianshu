var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'app.js',
    publicPath:"/dist/"
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {　　　　　　
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=5000&name=images/[name].[ext]'　　　　
      }
    ],
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  watch: true
}
