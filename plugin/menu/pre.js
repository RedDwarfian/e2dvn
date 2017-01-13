let types = require('babel-types');
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
      types.arrayExpression([
        types.stringLiteral('continue'),
        types.unaryExpression(
          'void',
          types.numericLiteral(0)
        )
      ])
    ),
    PUSH: types.yieldExpression(
      types.arrayExpression([
        types.stringLiteral('push'),
        types.unaryExpression('void',
          types.numericLiteral(0)
        )
      ])
    )
  }
};