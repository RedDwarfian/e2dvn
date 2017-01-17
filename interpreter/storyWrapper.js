import Immutable from 'immutable';
let story = require.context('../webpack-loader/story-loader!../story/', true, /\.js$/i);
module.exports = function(interpreter) {
  let history = [],
    historyIndex = -1,
    currentHistoryIndex = -1,
    slides = [],
    currentSlideIndex = -1,
    slideIndex = -1,
    state = Immutable.Map(),
    currentScript = null;

  while (interpreter.queue.length > 0) {
    let nextScript = interpreter.queue.unshift();
    currentScript = interpreter.script(nextScript)(interpreter, state);
    currentHistoryIndex = historyIndex = history.push(nextScript);
    currentSlideIndex = slideIndex = -1;

    


  }
};