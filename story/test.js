//to call a sub-script
let result = call('./relative/path/to/script.js', ...args);

//flags can only be set ONCE

//to set a flag use two parameters
flag('result', someImmutablePrimative);

//to get a flag use the first parameter
let flagResult = flag('result');

//menus look like this
let menuResult = menu('fav_color', {
  "red": "You like the color red",
  "blue": "You like the color blue",
  "green": "You like the color green"
});

//persistent data for unlocking game content is mutable, can be changed globally
persist('saw_scene_1', true);

//to get it, use the first argument
let saw_scene_1 = persist('saw_scene_1');

//to setup the game scripts in order, use the queue function
queue(
  './path/to/act.1.js',
  './path/to/act.2.js',
  './path/to/act.3.js',
  './path/to/act.4.js'
);

//set the background color, or name of background using strings or arrays like this

//white
scene([255, 255, 255, 1]);
scene('white');

//bg relative to assets folder
scene('./Background/url.jpg');

//point the Character function to the assets sub-folder
let Aya = Character('Aya');
//Show Syntax:
// ['x', 'y', 'cx', 'cy', 'sx', 'sy', 'size', 'rot', 'ease', 'duration']
show(Aya, Smile,
  //position
  x = xPosition, y = yPosition,
  //center properties
  cx = centerX, cy = centerY,
  //size properties
  sx = scaleX, sy = scaleY, size = scale,
  //rotation
  rot = radians,
  //animation properties
  ease = easeFunctionName, duration = seconds
);

//Causing someone to speak
Aya`Hello World!`;
speak(Aya, `Hello World!`);
speak('Narator', `Hello World!`);