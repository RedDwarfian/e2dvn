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
        let err, func;
        if (path.get('callee').isIdentifier()) {
          try{
            func = require('./funcs/' + path.node.callee.name);
          } catch (err) {
            return;
          }
          func(path, state, this, path.node.arguments);
        }
      }
    }
  }
}