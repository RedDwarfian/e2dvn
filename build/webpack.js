let webpack = require('webpack');
let Includer = require('../webpack-plugin/Includer'),
  Imagemin = require('imagemin-webpack-plugin').default;
let { join } = require('path');
let compiler = webpack({
  context: join(__dirname, '../'),
  entry: {
    app: './app.entry.js'
  },
  output: {
    path: join(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [
    new Includer({
      './assets': './assets/*.png',
      './': './public/*',
      './': './package.json'
    }),
    new Imagemin()
  ]
});

compiler.run(function(err, stats) {
  if (err) {
    console.log("A webpack error has occurred.");
    console.log(err);
    return;
  }
  console.log(stats.toString("verbose"));
})