let template = require('babel-template');
let types = require('babel-types');

let menuTemplate = template(`
  a = (
    INTERPRETER.menuResult[NAME] ||
    (
      INTERPRETER.menu = OPTIONS,
      PAUSE,
      INTERPRETER.menuResult[NAME]
    )
  )
`)


module.exports = (path, state, plugin, { name, options }) => {
  return path.replaceWith(
    menuTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      PAUSE: plugin.expressions.PAUSE,
      OPTIONS: options,
      NAME: name
    }).expression.right
  );
};