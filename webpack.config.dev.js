const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: 'react-redux-composeable-list',
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
  }
};
