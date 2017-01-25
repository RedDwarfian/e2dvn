let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !({
    x: vw(50),
    y: vh(50),
    cx: aw(50),
    cy: ah(50)
  })
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign({}, plugin.identifiers)
    ).expression.argument
  )
};