let fs = require('fs');
let babel = require('babel-core');

let code = fs.readFileSync('./menu/main.js');

code = babel.transform(code, {
  plugins: [
    './plugin/menu/transformer.js'
  ]
}).code

code = babel.transform(code, {
  plugins: [
    'minify-dead-code-elimination'
  ]
}).code
console.log(code);