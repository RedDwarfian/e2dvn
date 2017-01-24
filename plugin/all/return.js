let template = require('babel-template');
let returnTemplate = template(`
  return (POP, INTERPRETER.returnValue = VALUE, ['continue', void 0]);
`)

module.exports = (path, state, plugin) => {
  let functionPath = path.findParent((parent) => parent.isFunction());
  if (functionPath) {
    return;
  }
  path.replaceWith(
    returnTemplate(
      Object.assign({
        VALUE: path.node.argument,
        POP: plugin.isScript ? template('void 0')() : template('INTERPRETER.pop()')(plugin.identifiers)
      },
        plugin.identifiers,
        plugin.expressions
      )
    )
  );
  return path.skip();
}