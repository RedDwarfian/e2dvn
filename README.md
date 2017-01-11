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
```