let template = require('babel-template');
let types = require('babel-types');

let body = template(`
module.exports = function* SCRIPTNAME(INTERPRETER, PROPS) {
  let CACHE;
  BODY;
  RESULT;
}
`);
module.exports = (path, state, plugin, { }) => {
  let RESULT = types.returnStatement(
    types.isExpressionStatement(path.node.body[path.node.body.length - 1]) ? 
      path.node.body.splice(-1, 1)[0].expression :
      types.unaryExpression('void', types.numericLiteral(0))
    );
  path.replaceWith(
    types.program(
      [body({
        SCRIPTNAME: plugin.identifiers.SCRIPTNAME,
        INTERPRETER: plugin.identifiers.INTERPRETER,
        PROPS: plugin.identifiers.PROPS,
        BODY: path.node.body,
        CACHE: plugin.identifiers.CACHE,
        RESULT
      })]
    )
  )
};