module.exports = function() {
  return {
    post(file, state) {
      let { path } = file;
      require('./post')(path, state, this, []);
    },
    pre(file, state) {
      let { path } = file;
      require('./pre')(path, state, this, []);
    },
    visitor:{
      CallExpression(path, state) {
        if (path.get('callee').isIdentifier()) {
          try {
            require('./funcs/' + path.node.callee.name)(path, state, this, path.node.arguments);
          } catch(err) {

          }
        }
      }
    }
  }
}