let types = require('babel-types');
let template = require('babel-template');

let rotateTemplate = template(`
  ({ rot: VALUE * Math.PI / 180 })
`);
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    rotateTemplate(
      Object.assign({
        VALUE: args[0]
      }, plugin.identifiers)
    ).expression
  );
};