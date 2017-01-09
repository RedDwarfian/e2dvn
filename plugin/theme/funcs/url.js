let template = require('babel-template');

let urlTemplate = template(`
  CREATEIMAGE(require('file-loader!' + SOURCE));
`);
module.exports = function(path, state, plugin, args) {
  return path.replaceWith(
    urlTemplate({
      CREATEIMAGE: plugin.identifiers.CREATEIMAGE,
      SOURCE: args[0]
    }).expression
  );
};