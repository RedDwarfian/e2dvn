let stories = require.context('../webpack-loader/story-loader!../story/', true, /\.js$/i);
module.exports = function* story(interpreter, script, seen, state) {
  let slides = [];
  let story = stories(script)(interpreter, state);
  let intent = 1;

  // load current slides
  for(let i = 0; i < seen; i++) {
    let { value, done } = story.next();
    slides.push(
      interpreter.getShowableState()
    );
    if (done) {
      break;
    }
  }

  let slideIndex = slides.length - 1;
  intent = yield ['pause', slideIndex];
  
  while(true) {
    slideIndex += intent;
    if (slideIndex >= slides.length) {
      let { value: [type, arg], done } = story.next();

      if (type === 'pause') {
        if (interpreter.historyEnabled) {
          slides.push(
            interpreter.renderer.getState()
          );
        }
        slideIndex = seen = slides.length - 1;

        yield ['pause', seen];
        continue;
      }

      if (done) {
        
      }

      yield [type, seen];
      continue;
    }

    if (slideIndex > 0)
  }
};