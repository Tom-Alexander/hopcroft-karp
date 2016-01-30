var webpack = require('webpack');
var env = process.env.WEBPACK_ENV;
var isDist = env === 'dist';
var Uglify = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: isDist ? 'hopcroft.min.js' : 'hopcroft.js',
    path: './dist',
    library: 'hopcroftCarp',
    libraryTarget: 'umd'
  },
  plugins: env === 'dist' ? [new Uglify({minimize: true})] : [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
