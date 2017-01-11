module.exports = (path, state, plugin, args) => {
  plugin.identifiers = [
    'interpreter'
  ].reduce(
    (index, key) => (index[key] = path.scope.generateUidIdentifier(key), index),
    {}
  );
};