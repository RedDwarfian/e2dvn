let types = require('babel-types');
let template = require('babel-template');

let easeTemplate = template(`
  ({ ease: VALUE })
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    easeTemplate(
      Object.assign({
        VALUE: args[0]
      }, plugin.identifiers)
    ).expression
  )
};