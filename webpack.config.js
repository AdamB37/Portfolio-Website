const path = require('path')
module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, './build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        query: {
          presets:['env','react']
        },
        exclude: /node_modules/,
    }]
  },
}
