let test = Button({})

let newGame = Button({
  id: 'new-game',
  x: 100,
  y: 100,
  text: 'New Game'
});

let options = Button({
  id: 'options',
  x: 100,
  y: 200,
  text: 'Options'
});

let exit = Button({
  id: 'exit',
  x: 100,
  y: 300,
  text: 'Exit'
});

show(newGame, {});
show(options, {});
show(exit, {});
handle({
  'new-game': () => {
     queue(
      './main.js'
     );
     return;
  },
  'options': () => {
     open(
       './options.js'
     );
  }
});