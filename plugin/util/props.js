let template = require('babel-template');
let types = require('babel-types');

let vwTemplate = template(`
  a = PROPS
`);
module.exports = (path, state, plugin, { actor, value }) => {
  return path.replaceWith(
    vwTemplate({
      PROPS: plugin.identifiers.PROPS
    }).expression.right
  );
}