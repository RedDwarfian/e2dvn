let template = require('babel-template');

let urlTemplate = template(`
  LOADFONT(NAME, require('file-loader!' + SOURCE));
`);
module.exports = function(path, state, plugin, args) {
  return path.replaceWith(
    urlTemplate({
      LOADFONT: plugin.identifiers.LOADFONT,
      NAME: args[0],
      SOURCE: args[1]
    }).expression
  );
};