let template = require('babel-template');
let types = require('babel-types');

let persistSetTemplate = template(`
  a = (
    INTERPRETER.persist = INTERPRETER.persist.set(NAME, VALUE), INTERPRETER.persist.get(NAME)
  )
`)
let persistTemplate = template(`
  a = INTERPRETER.get(NAME)
`);


module.exports = (path, state, plugin, { args }) => {
  if (args.length > 1) {
    let [ NAME, VALUE ] = args;
    return path.replaceWith(
      persistSetTemplate({
        INTERPRETER: plugin.identifiers.INTERPRETER,
        NAME,
        VALUE
      }).expression.right
    );
  }
  return path.replaceWith(
    persistTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      NAME: args[0]
    }).expression.right
  );
};