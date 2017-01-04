let template = require('babel-template');
let types = require('babel-types');

let queueTemplate = template(`
  a = (
    INTERPRETER.queue = INTERPRETER.queue.concat(TARGET),
    void 0
  )
`);
module.exports = (path, state, plugin, { args }) => {
  path.replaceWith(
    queueTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      TARGET: types.arrayExpression(args)
    }).expression.right
  );
};