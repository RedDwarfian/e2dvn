let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !(INTERPRETER.wait = Date.now() + WAIT, INTERPRETER.waiting = true, PAUSE, void 0)
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign(
        {
          WAIT: args[0]
        },
        plugin.identifiers,
        plugin.expressions
      )
    ).expression.argument
  )
};