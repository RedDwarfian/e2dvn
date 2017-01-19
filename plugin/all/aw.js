let types = require('babel-types');
let template = require('babel-template');

let queueTemplate = template(`
  !(
    CACHE = TARGET,
    (
      CACHE.hasOwnProperty('definition') ?
      CACHE.definition.moods[CACHE.mood].w :
      CACHE.texture.width
    ) * 0.01)
`)
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    queueTemplate(
      Object.assign({
        TARGET: args[0],
        VALUE: args[1]
      }, plugin.identifiers)
    ).expression.argument
  )
};