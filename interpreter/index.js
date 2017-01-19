import EventEmitter2 from 'eventemitter2';
import { Map } from 'immutable';

let history = require('./history');
module.exports = class Interpreter extends EventEmitter2 {
  constructor(renderer, theme) {
    super();
    Object.assign(this, {
      script: null,
      queue: [],
      menus: require.context('../webpack-loader/menu-loader!../menu/', true, /\.js$/i),
      state: Map(),
      renderer,
      theme,
      menu: [
        require('../webpack-loader/menu-loader!../menu/main')(this)
      ],
      wait: Date.now(),
      waiting: false,
      Button: require('../webpack-loader/renderer-loader!../renderer/controls/Button.jsx'),
      Character: require('../webpack-loader/renderer-loader!../renderer/controls/Character.jsx'),
      Checkbox: require('../webpack-loader/renderer-loader!../renderer/controls/Checkbox.jsx'),
      NovelBackground: require('../webpack-loader/renderer-loader!../renderer/controls/NovelBackground.jsx'),
      Choice: null,
      historyEnabled: false
    })
    this.renderer.on('click', (showable) => {
      if (showable.onclick) {
        this.menu.push(showable.onclick());
      }
    });
    this.renderer.on('mouse-down', () => {
      if (!this.renderer.active) {
        this.advance();
      }
    })
    this.renderer.on('check-waiting', () => {
      if (this.waiting && this.wait <= Date.now()) {
        return this.advance();
      }
    });
    this.renderer.on('advance', () => this.advance());
    this.renderer.emit('push');
    this.advance();
  }
  show(item, props) {
    this.renderer.emit('add', item);
    for(let name in props) {
      if (item.hasOwnProperty(name)) {
        item[name] = props[name];
      }
      if (item.position.hasOwnProperty(name)) {
        item.position[name] = props[name];
      }
    }
  }
  push() {
    this.renderer.emit('push');
  }
  pop() {
    this.renderer.emit('pop');
  }
  advance() {
    if (this.renderer.active) {
      return;
    }

    if (this.waiting) {
      if (this.wait >= Date.now()) {
        return;
      }
      this.waiting = false;
    }
    let target = this.menu.length > 0 ? this.menu[this.menu.length - 1] : this.script;

    let { done, value } = target.next();
    if (done) {
      //renderer.emit('pop');
      if (this.menu.length > 0) {
        this.menu.pop();
      }
      if (this.menu.length === 0) {
        if (this.queue.length === 0) {
          console.log("exit");
        } else {
          this.state = Map();
          this.script = history(this, [], this.queue.splice(0, this.queue.length));
        }
      }
    }
    let [type, arg] = value && value.constructor === Array && value.length === 2 ? value : ['continue', null];

    switch(type) {
      case 'continue':
        return this.advance();
      case 'pause':
        return;
      case 'push':
        this.renderer.emit('push');
        return this.advance();
      case 'load':
        this.menu.splice(0, this.menu.length);
        //get the state and load it
        this.script = history(this, [], this.queue.splice(0, this.queue.length), Immutable.map());
        return this.advance();
    }

  }
};