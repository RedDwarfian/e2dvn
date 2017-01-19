let Aya = Character({
  id: 'aya',
  name: 'Aya',
  actor: 'Aya',
  a: 0
});

//start aya here
show(Aya, {
  x: vw(50),
  y: vh(100),
  cx: aw(Aya, 50),
  cy: ah(Aya, 100),
});


Aya.mood = 'Neutral';
show(bg, {
  a: 1
});
show(Aya, {
  a: 1
});
show(tb, {
  a: 1
})

Aya`Hello`;
