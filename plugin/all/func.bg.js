let template = require('babel-template');
let bgTemplate = template(`
  !(INTERPRETER.bg)
`)
module.exports = (path, state, plugin) => {
  return path.replaceWith(
    bgTemplate(
      Object.assign({}, plugin.identifiers, plugin.expressions)
    ).expression.argument
  );
}