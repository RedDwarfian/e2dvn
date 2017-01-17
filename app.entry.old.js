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
  push() {
    renderer.emit('push');
  },
  pop() {
    renderer.emit('pop');
  },
  script: null,
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
  
}






advance();