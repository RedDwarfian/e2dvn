let template = require('babel-template');

let buttonTemplate = template(`
  new INTERPRETER.NovelBackground(PROPS);
`);
module.exports = function(path, state, plugin, args) {
  return path.replaceWith(
    buttonTemplate(
      Object.assign({
        PROPS: args[0]
      },
        plugin.identifiers,
        plugin.expressions
      )
    ).expression
  );
};