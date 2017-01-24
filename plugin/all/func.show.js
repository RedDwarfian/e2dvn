let template = require('babel-template');
let types = require('babel-types');
let buttonTemplate = template(`
  !(
    TARGET = INTERPRETER.renderer.find(TARGET.id) || TARGET,
    Object.assign(TARGET.last, TARGET.position),
    INTERPRETER.show(TARGET, ...PROPS),
    TARGET.start = Date.now(),
    TARGET.hiding = false,
    TARGET
  )
`);

module.exports = function(path, state, plugin, args) {
  let target = args[0];
  if (!types.isIdentifier(target)) {
    return;
  }
  return path.replaceWith(
    buttonTemplate(
      Object.assign({}, plugin.identifiers, {
        PROPS: types.arrayExpression(args.slice(1)),
        TARGET: target
      })
    ).expression.argument
  );
};