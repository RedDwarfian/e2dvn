let types = require('babel-types');
let template = require('babel-template');

let scaleTemplate = template(`
  (CACHE = VALUE, { sx: CACHE, sy: CACHE })
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    scaleTemplate(
      Object.assign({
        VALUE: args[0]
      }, plugin.identifiers)
    ).expression
  )
};