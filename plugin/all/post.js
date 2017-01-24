let types = require('babel-types');
let template = require('babel-template');


let body = template(`
  module.exports = function* menu(INTERPRETER) {
    INITIALPUSH;
    let CACHE;
    let { tb, bg } = INTERPRETER;
    BODY

    FINALPOP;
  };
`);

module.exports = (path, state, plugin, args) => {
  path.replaceWith(
    types.program(
      [body(
        Object.assign({
          BODY: path.node.body,
          INITIALPUSH: plugin.isScript ? template('void 0')() : template('INTERPRETER.push()')(plugin.identifiers),
          FINALPOP: plugin.isScript ? template('void 0')() : template('INTERPRETER.pop()')(plugin.identifiers),
        }, plugin.identifiers)
      )]
    )
  );
};