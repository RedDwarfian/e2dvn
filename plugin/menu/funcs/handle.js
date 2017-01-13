let types = require('babel-types');
let template = require('babel-template');

let handleTemplate = template(`
  while(true) {
    SWITCH
    YIELD
  }
`);

module.exports = (path, state, plugin, args) => {

  let obj = args[0];
  let properties = obj.properties.filter(
    (prop) => !prop.shorthand && types.isFunction(prop.value)
  );
  if (types.isExpressionStatement(path.parentPath.node)) {
    let VALUE = path.scope.generateUidIdentifier('value');
    let result = handleTemplate(
      Object.assign({
        SWITCH: types.switchStatement(
          template(`INTERPRETER.clicked && INTERPRETER.clicked.id`)(plugin.identifiers).expression,
          properties.map(
            (prop) => {
              let body = prop.value.body.body;
              return types.switchCase(
                prop.key,
                body.concat(
                  [types.breakStatement()]
                )
              );
            }
          )
        ),
        VALUE: VALUE,
        YIELD: types.yieldExpression(
          types.arrayExpression([
            types.stringLiteral('pause'),
            types.unaryExpression('void',
              types.numericLiteral(0)
            )
          ])
        )
      }, plugin.identifiers)
    );
    path.parentPath.replaceWith(
      result
    );
  }
}