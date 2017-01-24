let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !(INTERPRETER.queue.push(ARGS), void 0)
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign({
        ARGS: args
      }, plugin.identifiers)
    ).expression.argument
  )
};