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
          func(path, state, this, path.node.arguments);
        }
      },
      TaggedTemplateExpression(path, state) {
        return require('./func.says')(path, state, this, [path.node.tag, path.node.quasi]);
      },
    }
})