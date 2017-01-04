let template = require('babel-template');
let types = require('babel-types');

//pushes a script to the current stack, causes a continue, then returns the return value
let callTemplate = template(`
  a = (
    Object.assign({}, require('json-loader!../assets/' + NAME + '.json'), { color: COLOR })
  )
`);
module.exports = (path, state, plugin, { script, props }) => {
  return path.replaceWith(
    types.yieldExpression(
      callTemplate({
        INTERPRETER: plugin.identifiers.INTERPRETER,
        SCRIPT: script,
        PROPS: types.arrayExpression(props)
      }).expression.right,
      true
    )
  );
};