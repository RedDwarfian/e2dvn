let Aya = Character({
    id: 'aya',
    name: 'Aya',
    actor: 'Aya'
  },
  center,
  mood('Neutral'),
  invisible
);

show(bg, visible);
show(Aya, visible);
show(tb, visible);

rotate(Math.PI);
rotateTau(0.25);
rotateDeg(-90);

Aya`Hello`;
