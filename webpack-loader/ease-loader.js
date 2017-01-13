
module.exports = function(source, map) {
  let babel = require('babel-core');
  let { code } = babel.transform(source, {
    "plugins": ["transform-inline-functions"]
  });
  return code;
};