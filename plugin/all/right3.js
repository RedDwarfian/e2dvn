let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !({
    x: vw(90),
    y: vh(100),
    cx: aw(100),
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