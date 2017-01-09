let template = require('babel-template');
let types = require('babel-types');

let flagTemplate = template(`
  a = (
    INTERPRETER.flags.get(FLAG)
  )
`);

let setFlagTemplate = template(`
  a = (
    INTERPRETER.flags.has(FLAG) ? void 0 : INTERPRETER.flags.set(FLAG, VALUE),
    INTERPRETER.flags.get(FLAG)
  )
`);
module.exports = (path, state, plugin, { args }) => {

  if (args.length === 1) {
    return path.replaceWith(
      flagTemplate({
        INTERPRETER: plugin.identifiers.INTERPRETER,
        FLAG: args[0]
      }).expression.right
    );
  }

  return path.replaceWith(
    setFlagTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      FLAG: args[0],
      VALUE: args[1]
    }).expression.right
  );
};