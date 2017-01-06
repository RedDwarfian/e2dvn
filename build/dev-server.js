let webpack = require('webpack'),
 { join } = require('path');
let compiler = webpack(
  require('./webpack.config')
);

let express = require('express');
let app = express();

app.use('/', express.static(join(__dirname, '../dist/')));

let listening = false;

compiler.watch({
  aggregateTimeout: 300
}, function(err, stats) {
  if (err) {
    console.log("A webpack error has occurred.");
    console.log(err);
    return;
  }
  console.log(stats.toString("verbose"));
  !listening && app.listen(8080, 'localhost', (err) => console.log(err ? err : "Now listening on port 8080!"));
  listening = true;
});



