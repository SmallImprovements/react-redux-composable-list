const webpack = require('webpack');
const path = require('path');
var Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: 'react-redux-data-grid',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    root: path.resolve(__dirname),
    modulesDirectories: ['src', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'redux': {
      root: 'Redux',
      commonjs: 'redux',
      commonjs2: 'redux',
      amd: 'redux',
    },
    'react-redux': {
      root: 'ReactRedux',
      commonjs: 'react-redux',
      commonjs2: 'react-redux',
      amd: 'react-redux',
    }
  },
  node: {
    Buffer: false
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new Visualizer({
      filename: './statistics.html'
    })
  ]
};
