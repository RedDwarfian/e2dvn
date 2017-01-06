let webpack = require('webpack');
let compiler = webpack(
  require('./webpack.config')
);

compiler.run(function(err, stats) {
  if (err) {
    console.log("A webpack error has occurred.");
    console.log(err);
    return;
  }
  console.log(stats.toString("verbose"));
});