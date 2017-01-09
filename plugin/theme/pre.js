module.exports = function(path, state, plugin, args) {
  plugin.identifiers = {
    CREATEIMAGE: path.scope.generateUidIdentifier("createImage"),
    LOADFONT: path.scope.generateUidIdentifier('loadFont')
  };
};