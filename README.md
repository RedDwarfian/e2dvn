# e2dvn

A JS framework for visualnovels coded in JS.

Nothing here yet!

## Specifications

```javascript

//choice
renderer.emit('add', {
  id: 'red',
  text: "I like the color red.",
  type: 'choice',
  active: false,
  hover: false,
  selected: false,
  number: 1
});

//slider
renderer.emit('add', {
  id: 'test-slider',
  type: 'slider',
  value: 0.70,
  active: false,
  hover: false,
  width: 200,
  x: 100,
  y: 100
});

//checkbox
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

//textarea
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
});


let texture = new Image();
texture.src = require('file-loader!./assets/Aya.png');
texture.onload = () => renderer.emit('add', {
  type: 'actor',
  x: 0,
  y: 0,
  alpha: 1,
  cx: 0,
  cy: 0,
  sx: 1,
  sy: 1,
  definition: require('json-loader!./assets/Aya.json'),
  rotation: 0,
  start: Date.now(),
  duration: 2000,
  ease: 'quadInOut',
  texture,
  mood: 'Sad',
  previousTransform: [1, 0, 0, 1, 0, 0, 1],
  transform: [1.1, 0, 0, 1.1, 100, 100, 0.5],
  interpolated: [0, 0, 0, 0, 0, 0, 0],
  view: [],
  dirty: true
});
```