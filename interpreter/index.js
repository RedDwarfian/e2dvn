let { Map, List } = require('immutable');
module.exports = class Interpreter extends EventEmitter2 {
  constructor() {
    super();
    this.scripts = require.context('../webpack-loader/story-loader!../story/', true, /\.js/i);
    this.speak = ['', ''];
    this.show = List();
  }
};