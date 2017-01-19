let Interpreter = require('./interpreter/index');
let Renderer = require('./webpack-loader/renderer-loader!./renderer/index.jsx');
let pkg = require('json-loader!./package.json');
let r = new Renderer(
  require('./webpack-loader/theme-loader!./theme/' + pkg.story.theme + '/options.js')
);
let i = new Interpreter(r, r.theme);

