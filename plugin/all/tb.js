let template = require('babel-template');
let tbTemplate = template(`
  !(INTERPRETER.tb)
`)
module.exports = (path, state, plugin) => {
  return path.replaceWith(
    tbTemplate(
      Object.assign({}, plugin.identifiers, plugin.expressions)
    ).expression.argument
  );
}