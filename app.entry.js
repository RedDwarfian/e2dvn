let package = require('json-loader!./package.json');
let theme = require('./webpack-loader/theme-loader!./theme/' + package.story.theme + '/options.js');
let story = require.context('./webpack-loader/story-loader!./story/', true, /\.js$/i);
let Renderer = require('./webpack-loader/renderer-loader!./renderer/index.jsx');
let menus = require.context('./webpack-loader/menu-loader!./menu/', true, /\.js$/i);
let renderer = new Renderer(theme);
renderer.emit('push');


let interpreter = {
  show: (item) => renderer.emit('add', item),
  script: null,
  clicked: null,
  queue: [],
  menus,
  menu: [],
  waiting: false
};


interpreter.menu.push(
  menus('./main.js')(interpreter)
);

let advance = () => {
  if (interpreter.waiting) {
    return;
  }
  let target = interpreter.menu.length > 0 ? interpreter.menu[interpreter.menu.length - 1] : interpreter.script;

  let { done, value } = target.next();
  if (done) {
    renderer.emit('pop');
    if (interpreter.menu.length > 0) {
      interpreter.menu.pop();
    }
    if (interpreter.menu.length === 0) {
      if (interpreter.queue.length === 0) {
        return console.log("Exit");
      } else {
        interpreter.script = story(interpreter.queue.pop());
      }
    }
  }
  let [type, arg] = value && value.constructor === Array && value.length === 2 ? value : ['continue', null];

  switch(type) {
    case 'continue':
      return advance();
    case 'wait':
      interpreter.waiting = true;
      return setTimeout(() => {
        interpreter.waiting = false;
        advance();
      }, arg);
    case 'push':
      renderer.emit('push');
      return advance();
  }
}

advance();
renderer.on('click', (showable) => {
  interpreter.clicked = showable;
  return advance();
});