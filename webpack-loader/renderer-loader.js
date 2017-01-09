
module.exports = function(source, map) {
  let babel = require('babel-core');
  let { code } = babel.transform(source, {
    "plugins": ["e2dx"]
  });
  return code;
};