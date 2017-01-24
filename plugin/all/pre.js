let types = require('babel-types');
let template = require('babel-template');
module.exports = (path, state, plugin, args) => {
  plugin.identifiers = [
    'interpreter',
    'cache'
  ].reduce(
    (index, key) => (index[key.toUpperCase()] = path.scope.generateUidIdentifier(key), index),
    {}
  );
  plugin.expressions = {
    CONTINUE: types.yieldExpression(
      template(`['continue', void 0]`)().expression
    ),
    PUSH: types.yieldExpression(
      template(`['push', void 0]`)().expression
    ),
    PAUSE: types.yieldExpression(
      template(`['pause', void 0]`)().expression
    )
  }
};