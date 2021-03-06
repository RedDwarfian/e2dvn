let template = require('babel-template');
let types = require('babel-types');
let choiceTemplate = template(`
  (CACHE = new INTERPRETER.Choice(PROPS, INTERPRETER.theme), INTERPRETER.apply(CACHE, ...ARGS), Object.assign(CACHE.last, CACHE.position), CACHE)
`);
module.exports = function(path, state, plugin, args) {
  return path.replaceWith(
    choiceTemplate(
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