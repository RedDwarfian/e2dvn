let template = require('babel-template');
let types = require('babel-types');

let inputDisabledTemplate = template(`
  INTERPRETER.inputDisabled = value
`);
module.exports = (path, state, plugin, { value }) => {
  return path.replaceWith(
    inputDisabledTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      VALUE: value
    }).expression
  );
}