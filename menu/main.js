let test = false;
let newGame = Button({
  id: 'new-game',
  x: 100,
  y: 100,
  text: 'New Game',
  onclick: function*() {
    queue(
      './main.js'
    )
    test = true;
  }
});

show(newGame, {
  a: 1
});

waitFor(test);
return test;