let types = require('babel-types');
let template = require('babel-template');

let historyEnabledTemplate = template(`
  (INTERPRETER.historyEnabled = VALUE)
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    historyEnabledTemplate(
      Object.assign({
        VALUE: args[0]
      }, plugin.identifiers)
    ).expression
  )
};