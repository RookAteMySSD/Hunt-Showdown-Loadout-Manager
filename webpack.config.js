const path = require('path')

module.exports = {
  mode: 'production',
  entry: './Client/src',
  output: {
    path: path.resolve(__dirname, 'Client/Public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}