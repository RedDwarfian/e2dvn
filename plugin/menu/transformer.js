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
          let func;
          try {
            func = require('./funcs/' + path.node.callee.name);
          } catch(err) {
            return;
          }
          func(path, state, this, path.node.arguments);
        }
      },
      AssignmentExpression(path, state) {
        if (path.get('left').isIdentifier()) {
          let func;
          try {
            func = require('./assigns/' + path.node.left.name);
          } catch(err) {
            return;
          }
          func(path, state, this, path.node.left, path.node.right, path.node.operator);
        }
      }
    }
  }
}