const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");
const config = require("./webpack.config.js");
const path = require('path');
const express = require('express');
const app = express();

const compiler = webpack(config);

// Middleware configuration
app.use(webpackDevMiddleware(compiler,{
  stats: { colors: true },
  hot: true,
  quiet: false,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  index: (path.join(__dirname + '/index.html')),
  publicPath: "/build/"
}));
app.use(webpackHotMiddleware(compiler));

// Static file
app.use(express.static('build'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Server
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})