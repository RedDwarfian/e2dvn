let stories = require.context('../webpack-loader/story-loader!../story/', true, /\.js$/i);
module.exports = function* story(interpreter, script, seen, state) {
  let slides = [];
  let story = stories(script)(interpreter, state);
  let intent = 1;
  let isDone = false;
  // load current slides
  for(let i = 0; i < seen; i++) {
    let { value, done } = story.next();
    slides.push(
      interpreter.renderer.getState()
    );
    if (done) {
      isDone = true;
      break;
    }
  }

  let slideIndex = slides.length - 1;
  intent = yield ['pause', slideIndex];
  
  while(true) {
    slideIndex += intent;

    if (slideIndex >= slides.length) {
      if (isDone) {
        return ['advance-history', seen];
      }

      let { value: [type, arg], done } = story.next();


      if (type === 'pause') {
        if (interpreter.historyEnabled) {
          slides.push(
            interpreter.renderer.getState()
          );
        }
        slideIndex = seen = slides.length - 1;
        isDone = done;
      }

      intent = yield [type, seen];
      continue;
    }

    if (slideIndex < 0) {
      return ['previous-history', seen];
    }

    interpreter.renderer.setState(
      slides[slideIndex]
    );
    intent = yield ['pause', seen];
  }
};