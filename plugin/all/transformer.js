module.exports = (isScript) => ({
    post(file, state) {
      let { path } = file;
      require('./post')(path, state, this, []);
    },
    pre(file, state) {
      let { path } = file;
      this.isScript = isScript;
      require('./pre')(path, state, this, []);
    },
    visitor:{
      CallExpression(path, state) {
        if (path.get('callee').isIdentifier()) {
          let func;
          try {
            func = require('./func.' + path.node.callee.name);
          } catch(err) {
            return;
          }
          return func(path, state, this, path.node.arguments);
        }
      },
      TaggedTemplateExpression(path, state) {
        return require('./func.says')(path, state, this, [path.node.tag, path.node.quasi]);
      },
      ReferencedIdentifier(path, state) {
        let func;
        try {
          func = require('./id.' + path.node.name);
        } catch(err) {
          return;
        }
        return func(path, state, this);
      },
      ReturnStatement: {
        exit(path, state) {
          return require('./return')(path, state, this);
        }
      }
    }
})