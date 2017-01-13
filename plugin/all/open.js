let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !(INTERPRETER.menu.push(
      INTERPRETER.menus(MENU)(INTERPRETER, ...ARGS)
    ), PUSH, void 0)
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign(
        {
          MENU: args[0],
          ARGS: types.arrayExpression(args.slice(1)),
        },
        plugin.identifiers,
        plugin.expressions
      )
    ).expression.argument
  )
};