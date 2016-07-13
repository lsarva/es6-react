var path = require('path')
var nodeExternals = require('webpack-node-externals')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = [
  {
    entry: path.join(__dirname, '/react/templates/browser'),
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
  },
  {
    entry: path.join(__dirname, '/react/templates/server'),
    output: {
      path: path.join(__dirname, '/public/js'),
      filename: 'template.js',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: './node_modules/'
        }
      ]
    },
    resolve: {
      root: [path.join(__dirname, 'react')],
      extensions: ['', '.js', '.jsx']
    }
  }
]
