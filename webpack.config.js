var path = require('path')

module.exports = {
  entry: path.join(__dirname, '/react/containers'),
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: './node_modules/',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  resolve: {
    root: [path.join(__dirname, 'react')],
    extensions: ['', '.js', '.jsx']
  }
}
