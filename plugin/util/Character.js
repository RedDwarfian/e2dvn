let template = require('babel-template');
let types = require('babel-types');
let { posix: { dirname, relative } } = require('path');
//pushes a script to the current stack, causes a continue, then returns the return value
let characterTemplate = template(`
  a = (
    Object.assign({}, INTERPRETER.assets('./' + ACTOR + '.json'), {
      __type: 'Character',
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      sx: 1,
      sx: 1,
      rot: 0,
      ease: 'linear',
      duration: 1/6,
      start: 0,
      mood: "Neutral",
      hover: false,
      clicked: false,
      color: COLOR
    })
  )
`);
module.exports = (path, state, plugin, { actor, color, }) => {
  return path.replaceWith(
      characterTemplate({
        INTERPRETER: plugin.identifiers.INTERPRETER,
        ACTOR: actor,
        COLOR: color
      }).expression.right
  );
};