let template = require('babel-template');
let types = require('babel-types');

let showTemplate = template(`
  a = (
    !INTERPRETER.show.includes(TARGET) ? INTERPRETER.show = INTERPRETER.show.push(TARGET) : void 0,
    ASSIGNMENTS,
    TARGET
  )
`);

let assignmentMapTemplate = template(`TARGET.PROPERTY = VALUE`);
module.exports = (path, state, plugin, { target, args }) => {
  let props = ['x', 'y', 'cx', 'cy', 'sx', 'sy', 'size', 'rot', 'ease', 'duration'];

  let assignments = [];
  for (let arg of args) {
    if (types.isIdentifier(arg))  {
      assignments.push(
        [types.identifier('mood'), types.stringLiteral(arg.name)]
      );
      continue;
    }

    if (types.isAssignmentExpression(arg) && arg.left && props.includes(arg.left.name)) {
      assignments.push(
        [types.identifier(arg.left.name), arg.right]
      );
    }
  }

  path.replaceWith(
    showTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      TARGET: target,
      ASSIGNMENTS: types.sequenceExpression(
        assignments.map(
          ([PROPERTY, VALUE]) => assignmentMapTemplate({
            TARGET: target,
            PROPERTY,
            VALUE
          }).expression
        )
      )
    })
  );
};