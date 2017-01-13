module.exports = function* menu(_interpreter) {
  let _cache;

  let test = Object.assign({}, {
    id: '',
    text: "",
    type: 'button',
    x: 0,
    y: 0,
    active: false,
    hover: false,
    selected: false,
    view: [],
    dirty: true
  }, {});

  let newGame = Object.assign({}, {
    id: '',
    text: "",
    type: 'button',
    x: 0,
    y: 0,
    active: false,
    hover: false,
    selected: false,
    view: [],
    dirty: true
  }, {
    id: 'new-game',
    x: 100,
    y: 100,
    text: 'New Game'
  });

  let options = Object.assign({}, {
    id: '',
    text: "",
    type: 'button',
    x: 0,
    y: 0,
    active: false,
    hover: false,
    selected: false,
    view: [],
    dirty: true
  }, {
    id: 'options',
    x: 100,
    y: 200,
    text: 'Options'
  });

  let exit = Object.assign({}, {
    id: '',
    text: "",
    type: 'button',
    x: 0,
    y: 0,
    active: false,
    hover: false,
    selected: false,
    view: [],
    dirty: true
  }, {
    id: 'exit',
    x: 100,
    y: 300,
    text: 'Exit'
  });

  _cache = newGame, _interpreter.show(_cache), Object.assign(_cache, {});
  _cache = options, _interpreter.show(_cache), Object.assign(_cache, {});
  _cache = exit, _interpreter.show(_cache), Object.assign(_cache, {});

  while (true) {
    switch (_interpreter.clicked && _interpreter.clicked.id) {
      case 'new-game':
        _interpreter.queue.push('./main.js'), void 0;
        return null;
        break;

      case 'options':
        _interpreter.menus.push(_interpreter.menus('./options')), yield ['continue', void 0], void 0;
        break;
    }

    yield;
  }
};

