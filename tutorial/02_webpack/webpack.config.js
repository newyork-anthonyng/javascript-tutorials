const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: "./app.js",
  
  output: {
    filename: "./bundle.js"
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["babel-preset-react"]
        }
      }
    ]
  },
  
  plugins: [
    // new UglifyJsPlugin()
  ]
};

module.exports = config;