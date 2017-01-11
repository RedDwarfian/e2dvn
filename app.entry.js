let package = require('json-loader!./package.json');
let theme = require('./webpack-loader/theme-loader!./theme/' + package.story.theme + '/options.js');

let Renderer = require('./webpack-loader/renderer-loader!./renderer/index.jsx');

let renderer = new Renderer(theme);

renderer.emit('add', {
  id: 'test',
  type: 'textarea',
  active: false,
  hover: false,
  x: 0,
  y: package.window.height * 0.5,
  text: `
    Bacon ipsum
    dolor sit
    emet. Bacon ipsum dolor amet officia prosciutto chuck est, pig pastrami aliqua incididunt. Ea nisi dolor, occaecat in quis pancetta venison sausage enim velit. Culpa shank leberkas meatball tenderloin. Ad ham dolore, excepteur short loin ullamco landjaeger reprehenderit adipisicing.
  `,
  textIndex: 0,
  speed: 1,
  speaker: 'Speaker!',
  speakerColor: 'red',
  lines: []
})