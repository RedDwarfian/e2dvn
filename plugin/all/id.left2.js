let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !({
    x: vw(33.33),
    y: vh(100),
    cx: aw(66.66),
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