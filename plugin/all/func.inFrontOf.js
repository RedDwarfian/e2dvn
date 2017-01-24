let types = require('babel-types');
let template = require('babel-template');

let awTemplate = template(`
  ({ z: VALUE.z + 1 })
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    awTemplate(
      Object.assign({
        VALUE: args[0]
      }, plugin.identifiers)
    ).expression
  )
};