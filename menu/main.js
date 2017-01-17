let test = false;
let newGame = Button({
  id: 'new-game',
  x: 100,
  y: 100,
  text: 'New Game',
  onclick: function*() {
    show(newGame, { x: 200, y: 200 });
    wait(400);
    hide(newGame, { a: 0 });
    test = true;
  }
});


show(newGame, {
  a: 1
});

pause();

waitFor(test);
return test;