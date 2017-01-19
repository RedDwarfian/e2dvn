module.exports = function() {
  return {
    post(file, state) {
      let { path } = file;
      require('./post')(path, state, this, []);
    },
    pre(file, state) {
      let { path } = file;
      require('../all/pre')(path, state, this, []);
    },
    visitor:{
      CallExpression(path, state) {
        if (path.get('callee').isIdentifier()) {
          let func;
          try {
            func = require('./funcs/' + path.node.callee.name);
          } catch(err) {
            try {
              func = require('../all/funcs' + path.node.callee.name);
            } catch(err) {
              return;
            }
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
      },
      TaggedTemplateExpression(path, state) {
        require('../all/says')(path, state, this, [path.node.tag, path.node.quasi])
      },
      Identifier(path, state) {
        console.log("root test", path.parentPath.isMemberExpression() && path.parentPath.node.object.name !== path.node.name, path.node.name);
        if (path.parentPath.isMemberExpression() && path.parentPath.node.object.name !== path.node.name) {
          return;
        }
        let func;
        try {
          func = require('./identifiers/' + path.node.name);
        } catch(err) {
          return;
        }
        func(path, state, this);
      },
    }
  }
}