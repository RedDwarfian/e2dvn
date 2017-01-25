let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !({
    a: 0.75,
    cy: ah(90)
  })
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign({}, plugin.identifiers)
    ).expression.argument
  )
};