let story = require('./story');
import Immutable from 'immutable';

module.exports = function* history(interpreter, history, queue, state = Immutable.Map()) {
  history = history.slice();
  let currentIndex = history.length - 1;
  queue = queue.slice();
  let seen = 0;
  let nextScript = '';
  let currentScript = null;
  let intent = 1;
  if (currentIndex === -1) {
    nextScript = queue.unshift();
    seen = 0;
    currentIndex = history.push({
      script: nextScript,
      seen
    });
  } else {
    nextScript = history[currentIndex].script;
    seen = history[currentIndex].seen;
  }
  currentScript = story(interpreter, nextScript, seen, state);

  let action = '';

  interpreter.removeAllListeners('save');
  interpreter.on('save', () => {
    interpreter.openSave(history, queue);
  });


  while(true) {
    let { done, value: [action, arg = void 0] } = currentScript.next(intent);

    if (done || action === 'advance-history') {
      currentIndex += 1;
      if (currentIndex >= history.length) {
        nextScript = queue.unshift();
        seen = 0;
      } else {
        nextScript = history[currentIndex].script;
        seen = history[currentIndex].seen;
      }
      if (!nextScript) {
        return ['done', void 0];
      }
      currentIndex = history.push(nextScript);
      currentScript = story(interpreter, nextScript, seen, state);
      continue;
    }

    if (action === 'previous-history') {
      if (!history[currentIndex -1]) {
        intent = yield ['pause', void 0];
        continue;
      }
      currentIndex -= 1;
      nextScript = history[currentIndex].script;
      seen = history[currentIndex].seen;
      currentScript = story(interpreter, nextScript, seen, state);
    }
    seen = arg;
    if (seen > history[currentIndex].seen) {
      history[currentIndex].seen = seen;
    }
    intent = yield [action, void 0];
    
  }

};