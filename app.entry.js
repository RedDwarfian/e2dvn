let package = require('json-loader!./package.json');
let theme = require('./webpack-loader/theme-loader!./theme/' + package.story.theme + '/options.js');

let Renderer = require('./webpack-loader/renderer-loader!./renderer/index');

let renderer = new Renderer(theme);

renderer.emit('add', {
  id: 'test',
  type: 'checkbox',
  checked: false,
  active: false,
  hover: false,
  x: package.window.width * 0.5,
  y: package.window.height * 0.5,
  text: 'testing'
});

let choices = [100, 200, 300].map((y, index) => ({
  id: 'test' + y,
  type: 'button',
  selected: false,
  active: false,
  hover: false,
  x: 50,
  y: y,
  text: 'testing' + index
}));

choices.forEach((choice) => renderer.emit('add', choice));

renderer.on('click', (showable) => {
  if (choices.includes(showable)) {
    for(let i = 0; i < choices.length; i++) {
      let choice = choices[i];
      choice.selected = choice === showable;
    }
  } else {
    showable.checked = !showable.checked;
  }
});


renderer.emit('add', {
  id: 'test-slider',
  type: 'slider',
  value: 70,
  active: false,
  hover: false,
  x: 100,
  y: 100
});