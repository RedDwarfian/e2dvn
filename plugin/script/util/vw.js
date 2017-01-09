let template = require('babel-template');
let types = require('babel-types');

let vwTemplate = template(`
  a = INTERPRETER.config.width * VALUE * 0.01
`);
module.exports = (path, state, plugin, { value }) => {
  return path.replaceWith(
    vwTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      VALUE: value
    }).expression.right
  );
}