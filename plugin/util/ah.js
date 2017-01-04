let template = require('babel-template');
let types = require('babel-types');

let vwTemplate = template(`
  a = ACTOR.height * VALUE * 0.01
`);
module.exports = (path, state, plugin, { actor, value }) => {
  return path.replaceWith(
    vwTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      ACTOR: actor,
      VALUE: value
    }).expression.right
  );
}