let template = require('babel-template');
let types = require('babel-types');

let speakTemplate = template(`a = (
    INTERPRETER.speak[0] = SPEAKER,
    INTERPRETER.speak[1] = SPOKEN,
    INDEX,
    SPEAKER
)`);


module.exports = (path, state, plugin, { speaker, spoken }) => {
  return path.replaceWith(
    speakTemplate({
      INTERPRETER: plugin.identifiers.INTERPRETER,
      INDEX: plugin.expressions.INDEX,
      SPEAKER: speaker,
      SPOKEN: spoken
    }).expression.right
  );
};