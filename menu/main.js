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

let sliderTest = Slider({
  id: 'slider-test',
  x: 100,
  y: 200,
  size: 200,
  onvalue: function*() {
    console.log(sliderTest.value);
    if (sliderTest.value === 1) {
      console.log('ready');
      test = true;
    }
  }
});

let choiceTest = Choice({
  id: 'choice-test',
  x: 100,
  y: 300,
  onclick: function*() {
    console.log("Choice Clicked!");
    test = true;
  }
})

show(newGame, {
  a: 1
});

show(sliderTest,{
  a: 1
});

waitFor(test);
queue(
  './main.js'
);
return test;