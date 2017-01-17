let template = require('babel-template');

let waitForTemplate = template(`
  while(!CONDITION) {
    PAUSE
  }
`);
module.exports = (path, state, plugin, args) => {
  if (!path.parentPath.isExpressionStatement()) {
    return;
  }
  return path.parentPath.replaceWith(
    waitForTemplate(
      Object.assign({
        CONDITION: args[0]
      },
        plugin.identifiers,
        plugin.expressions
      )
    )
  );
};