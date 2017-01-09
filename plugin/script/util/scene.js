let template = require('babel-template');
let types = require('babel-types');

let sceneTemplate = template(`
  a = (
    INTERPRETER.scene = SCENE,
    void 0
  )
`)
module.exports = (path, state, plugin, { scene }) => {
  path.replaceWith(
    sceneTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      SCENE: scene
    })
  );
};