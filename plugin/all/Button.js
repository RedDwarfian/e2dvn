let template = require('babel-template');

let buttonTemplate = template(`
  Object.assign({}, {
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
  }, PROPS);
`);
module.exports = function(path, state, plugin, args) {
  return path.replaceWith(
    buttonTemplate({
      PROPS: args[0]
    }).expression
  );
};