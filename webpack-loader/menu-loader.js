
module.exports = function(source, map) {
  let babel = require('babel-core');
  let { code } = babel.transform(source, {
    "plugins": [
      ["./plugin/menu/transformer", { filename: this.resourcePath }]
    ],
    "parserOpts": {
      "allowReturnOutsideFunction": true
    }
  });
  return code;
};