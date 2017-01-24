let template = require('babel-template');
let types = require('babel-types');

let buttonTemplate = template(`
  (CACHE = new INTERPRETER.Character(PROPS), INTERPRETER.apply(CACHE, ...ARGS), Object.assign(CACHE.last, CACHE.position), CACHE)
`);
module.exports = function(path, state, plugin, args) {
  return path.replaceWith(
    buttonTemplate(
      Object.assign({
        PROPS: args[0],
        ARGS: types.arrayExpression(args)
      },
        plugin.identifiers,
        plugin.expressions
      )
    ).expression
  );
};