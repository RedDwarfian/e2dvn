let template = require('babel-template');
let types = require('babel-types');

let body = template(`
module.exports = function* SCRIPTNAME(INTERPRETER, PROPS) {
  let CACHE;
  BODY
}
`);
module.exports = (path, state, plugin, { }) => {

  path.replaceWith(
    types.program(
      [body({
        SCRIPTNAME: plugin.identifiers.SCRIPTNAME,
        INTERPRETER: plugin.identifiers.INTERPRETER,
        PROPS: plugin.identifiers.PROPS,
        BODY: path.node.body,
        CACHE: plugin.identifiers.CACHE
      })]
    )
  )
};