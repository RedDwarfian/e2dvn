let b = Button({
  id: 'test',
  x: 300,
  y: 100,
  text: 'Close'
})
show(b);
handle({
  'test': () => {
    return;
  }
});