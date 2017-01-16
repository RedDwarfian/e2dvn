let template = require('babel-template');
let types = require('babel-types');
let saysTemplate = template(`
  !(
    CACHE = [SPEAKER || "",SAYS],
    INTERPRETER.tb.speaker = CACHE[0].hasOwnProperty('name') ? CACHE[0].name : CACHE[0],
    INTERPRETER.tb.speakerColor = CACHE[0].hasOwnProperty('color') ? CACHE[0].color : INTERPRETER.theme.defaultSpeakerColor,
    INTERPRETER.tb.text = CACHE[1].toString(),
    INTERPRETER.tb.textIndex = 0,
    PAUSE,
    CACHE[0]
  )
`);
module.exports = (path, state, plugin, args) => {
  return path.replaceWith(
    saysTemplate(
      Object.assign({
        SPEAKER: args[0],
        SAYS: args[1]
      },
        plugin.identifiers,
        plugin.expressions
      )
    ).expression.argument
  );
};