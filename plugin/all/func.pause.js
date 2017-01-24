let types = require('babel-types');
let template = require('babel-template');

let pauseTemplate = template(`
  !(PAUSE, void 0)
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    pauseTemplate(
      Object.assign({
        ARGS: args
      },
        plugin.identifiers,
        plugin.expressions
      )
    ).expression.argument
  )
};