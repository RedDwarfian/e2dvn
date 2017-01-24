let fs = require('fs');
let babel = require('babel-core');

let code = fs.readFileSync('./story/main.js');

code = babel.transform(code, {
  plugins: [
    './plugin/script/transformer.js'
  ],
  parserOpts: {
    allowReturnOutsideFunction: true
  }
}).code

console.log(code);