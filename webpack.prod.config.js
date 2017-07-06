const path = require('path')
module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, './build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [

      {
        test: /\.(js|jsx)?$/,
        loaders: 'babel-loader',
        query: {
          presets:['env','react']
        },
        exclude: /node_modules/,
      },

      // {
      //   test: /\.(js|jsx)?$/,
      //   loader: 'react-hot-loader',
      //   exclude: /node_modules/,
      // },

      {
        test: /\.scss$/,
        use:
        [
            {
            loader: "style-loader" // creates style nodes from JS strings
            },
            {
            loader: "css-loader" // translates CSS into CommonJS
            },
            {
            loader: "sass-loader" // compiles Sass to CSS
            }
        ],
        exclude: /node_modules/
      },

      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //       'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      //       'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      //   ]
      // },

    ],

  },

}
