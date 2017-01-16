let package = require('json-loader!./package.json');
let theme = require('./webpack-loader/theme-loader!./theme/' + package.story.theme + '/options.js');
let story = require.context('./webpack-loader/story-loader!./story/', true, /\.js$/i);
let Renderer = require('./webpack-loader/renderer-loader!./renderer/index.jsx');
let menus = require.context('./webpack-loader/menu-loader!./menu/', true, /\.js$/i);
let renderer = new Renderer(theme);
let Textarea = require('./webpack-loader/renderer-loader!./renderer/controls/Textarea.jsx');
renderer.emit('push');


let interpreter = {
  show: (item, props) => {
    renderer.emit('add', item);
    for(let name in props) {
      if (item.hasOwnProperty(name)) {
        item[name] = props[name];
      }
      if (item.position.hasOwnProperty(name)) {
        item.position[name] = props[name];
      }
    }
  },
  script: null,
  clicked: null,
  queue: [],
  menus,
  menu: [],
  wait: Date.now(),
  waiting: false,
  theme,
  Button: require('./webpack-loader/renderer-loader!./renderer/controls/Button.jsx'),
  Checkbox: require('./webpack-loader/renderer-loader!./renderer/controls/Checkbox.jsx'),
  Textarea: require('./webpack-loader/renderer-loader!./renderer/controls/Textarea.jsx')
};


interpreter.menu.push(
  menus('./main.js')(interpreter)
);

let advance = () => {
  if (interpreter.tb.textIndex !== interpreter.tb.text.length) {
    return interpreter.tb.textIndex = interpreter.tb.text.length;
  }

  if (interpreter.waiting) {
    if (interpreter.wait >= Date.now()) {
      return;
    }
    interpreter.waiting = false;
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
    case 'pause':
      return;
    case 'push':
      renderer.emit('push');
      return advance();
  }
}


renderer.on('click', (showable) => {
  interpreter.clicked = showable;
});
renderer.on('check-waiting', () => {
  if (interpreter.waiting && interpreter.wait <= Date.now()) {
    return advance();
  }
});
renderer.on('advance', advance);


let tb = new Textarea({
  id: 'text',
  y: package.window.height,
  cy: theme.textarea.texture.height,
  a: 0,
  ctx: renderer.ctx
}, theme);
interpreter.tb = tb;
renderer.emit('static', tb);

advance();