let template = require('babel-template');
let types = require('babel-types');
let { basename, extname } = require('path');
module.exports = (path, state, plugin, {}) => {
  plugin.identifiers = {};
  ['interpreter', 'cache', 'props'].forEach(
    (name) => plugin.identifiers[name.toUpperCase()] = path.scope.generateUidIdentifier(name)
  );
  plugin.identifiers.SCRIPTNAME = path.scope.generateUidIdentifier(basename(plugin.file.opts.filename, extname(plugin.file.opts.filename)));
  let void0 = types.unaryExpression('void', types.numericLiteral(0));
  plugin.yieldIndex = -1;
  plugin.expressions = {
    PAUSE: types.yieldExpression(types.arrayExpression([ types.stringLiteral('pause'), void0 ])),
    CONTINUE: types.yieldExpression(types.arrayExpression([ types.stringLiteral('continue'), void0 ])),
    INDEX: types.yieldExpression(types.arrayExpression([
      types.stringLiteral('index'),
      types.memberExpression(
        plugin.identifiers.INTERPRETER,
        types.identifier('index')
      )
    ]))
  };
};