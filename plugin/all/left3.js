let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !({
    x: vw(10),
    y: vh(100),
    cx: aw(0),
    cy: ah(100)
  })
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign({}, plugin.identifiers)
    ).expression.argument
  )
};