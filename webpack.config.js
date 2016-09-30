var path = require('path');

module.exports = {
  cache: true,
  entry: {
    octokat: [
      './src/octokat.js',
    ]
  },
  output: {
    library: 'Octokat',
    libraryTarget: 'umd',
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.coffee$/, loader: 'coffee-loader' }
    ]
  },
  resolve: {
    alias: {
      xmlhttprequest: path.join(__dirname, '/src/hacks/xmlhttprequest-filler.js'),
    },
    extensions: ['', '.coffee']
  }
};
