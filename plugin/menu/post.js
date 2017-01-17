let types = require('babel-types');
let template = require('babel-template');

let body = template(`
  module.exports = function* menu(INTERPRETER) {
    INTERPRETER.push();
    let CACHE;
    BODY
    INTERPRETER.pop();
  };
`)

module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    types.program(
      [body(
        Object.assign({
          BODY: path.node.body
        }, plugin.identifiers)
      )]
    )
  );
};