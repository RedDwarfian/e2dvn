let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  ({
    a: 1
  })
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign({}, plugin.identifiers)
    ).expression
  )
};