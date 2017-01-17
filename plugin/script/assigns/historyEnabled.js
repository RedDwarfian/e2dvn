let types = require('babel-types');
let template = require('babel-template');

let historyEnabledTemplate = tempalte(`
  !(CACHE = RIGHT, INTERPRETER.historyEnabled = CACHE, CACHE)
`)
module.exports = (path, state, plugin, left, right, operator) => {
  path.replaceWith(
    historyEnabledTemplate(
      Object.assign({
        RIGHT: right
      },
        plugin.identifiers,
        plugin.expressions
      )
    )
  );
};