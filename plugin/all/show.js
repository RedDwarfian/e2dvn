let template = require('babel-template');
let types = require('babel-types');
let buttonTemplate = template(`
  !(
    CACHE = TARGET,
    INTERPRETER.show(CACHE),
    Object.assign(CACHE, PROPS)
  )
`);

module.exports = function(path, state, plugin, args) {
  let target = args[0], props = args[1];

  return path.replaceWith(
    buttonTemplate(
      Object.assign({}, plugin.identifiers, {
        PROPS: props || types.objectExpression([]),
        TARGET: target
      })
    ).expression.argument
  );
};