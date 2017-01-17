let template = require('babel-template');
let returnTemplate = template(`
  return (INTERPRETER.pop(), INTERPRETER.returnValue = VALUE, ['continue', void 0]);
`)

module.exports = (path, state, plugin) => {
  let functionPath = path.findParent((parent) => parent.isFunction());
  if (functionPath) {
    return;
  }
  path.replaceWith(
    returnTemplate(
      Object.assign({
        VALUE: path.node.argument
      },
        plugin.identifiers,
        plugin.expressions
      )
    )
  );
  return path.skip();
}