let types = require('babel-types');
let template = require('babel-template');

let ahTemplate = template(`
  !({ _type: 'computed', unit: 'ah', value: VALUE })
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    ahTemplate(
      Object.assign({
        VALUE: args[0]
      }, plugin.identifiers)
    ).expression.argument
  )
};