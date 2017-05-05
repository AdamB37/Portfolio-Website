import path from 'path'

module.exports = {
  entry: "index.js",
  entry: "./public/index.js",
  output: {
    path: path.join(__dirname, './build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.jsx?$|\.css$/,
        loader: 'babel-loader',
        query: {
          presets:['env','react']
        },
        include: [
          path.resolve(__dirname, 'public')
        ],
        exclude: /node_modules/,
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    }]
  },
}
