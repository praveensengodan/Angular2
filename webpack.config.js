const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Angular 2 App',
    template: './index.html'
  }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: './build'
  }
};
