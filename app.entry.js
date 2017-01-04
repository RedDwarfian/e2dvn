let Interpreter = require('./interpreter/index');
let Renderer = require('./renderer/index');

let i = new Interpreter();
let r = new Renderer();

i.on('slide', (s) => r.emit('slide', s));
r.on('input', (i) => i.emit('input', i));