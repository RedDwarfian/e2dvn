let template = require('babel-template');
let types = require('babel-types');
let buttonTemplate = template(`
  !(
    CACHE = TARGET,
    Object.assign(CACHE.last, CACHE.position),
    INTERPRETER.show(CACHE, PROPS),
    CACHE.start = Date.now(),
    CACHE.hiding = true,
    CACHE
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