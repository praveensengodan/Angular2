const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {app:'./src/main.ts',vendor:'./src/vendor.ts'},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.ts','.js'],
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ] 
  },
  module: {
     rules: [
      {
       test: /\.ts$/,
       loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },
  plugins: []
};
