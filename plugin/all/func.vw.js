let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !(INTERPRETER.renderer.width * VALUE * 0.01)
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign({
        VALUE: args[0]
      }, plugin.identifiers)
    ).expression.argument
  )
};