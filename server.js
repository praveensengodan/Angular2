var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require("./webpack.config.js");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: './build',
  historyApiFallback: {
    index: './build/index.html'
  },
  quiet: false,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  stats: { colors: true },
  publicPath: config.output.publicPath,
});
server.listen(8080,function() {
  console.info('localhost runing at 8000');
});