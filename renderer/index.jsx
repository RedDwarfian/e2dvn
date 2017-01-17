import e2d from 'e2d';
import crel from 'crel';
let { window: { width, height, title } } = require('../package.json');
let Background = require('../webpack-loader/renderer-loader.js!./controls/Background.jsx');
let sortFunc = (left, right) => left.position.z < right.position.z ? -1 : 1;
import EventEmitter2 from 'eventemitter2';

module.exports = class Renderer extends EventEmitter2 {
    constructor(theme) {
    super();
    this.theme = theme;
    this.showables = [];
    this.statics = [];
    crel(document.body, { style: 'margin: 0; padding: 0; '},
      crel('div', { style: `margin: 0 auto; width: ${width}px; height: ${height}px;` },
        this.canvas = crel('canvas', { width, height })
      )
    );

    this.ctx = this.canvas.getContext('2d');
    e2d.initialize(this.ctx);

    this.onAny((event, value) => this[event] && this[event](value));

    this.previousMouseState = false;

    this.stack = [];

    this.mouseData = null;
    this.regions = null;
    this.active = null;
    this.story = require.context('../webpack-loader/story-loader!../story/', true, /\.js$/i)
    let self = this;
    return e2d.raf(function () {
      self.emit('check-waiting');
      self.update();
      self.render();
    });
  }
  add(showable) {
    return !this.showables.includes(showable) ? this.showables.push(showable) : void 0;
  }
  remove(showable) {
    if (this.showables.includes(showable)) {
      this.showables.splice(this.showables.indexOf(showable), 1);
    }
  }
  static(showable) {
    return !this.statics.includes(showable) ? this.statics.push(showable) : void 0;
  }
  push() {
    this.stack.push({
      showables: this.showables
    })
    let img = new Image();
    img.src = this.canvas.toDataURL();
    this.showables = [new Background({ id: 'bg', texture: img })];
  }
  pop() {
    this.showables = this.stack.pop().showables;
  }
  update() {
    if (!this.theme.ready) {
      return;
    }
    let showables = this.showables.concat(this.statics);
    showables.sort(sortFunc);

    this.mouseData = e2d.mouseData(this.ctx);
    this.regions = e2d.activeRegions(this.ctx);

    let i, showable, pointer = false;

    for(i = 0; i < showables.length; i++) {
      showable = showables[i];
      showable.hover = !!this.regions[showable.id];
    }

    //click event
    if (this.mouseData.clicked) {
      let willAdvance = true;
      for(i = 0; i < showables.length; i++) {
        showable = showables[i];
        if (this.regions[showable.id]) {
          showable.active = true;
          this.active = showable;
          this.emit('mousedown', showable);
          willAdvance = false;
        }
      }
      if (willAdvance) {
        this.emit('advance');
      }
    }

    // mouseUp
    if (this.previousMouseState && !this.mouseData.state) {
      let willAdvance = false;
      for(i = 0; i < showables.length; i++) {
        showable = showables[i];
        if (showable.active && showable.hover) {
          this.emit('click', showable);
          willAdvance = true;
        }
        if (showable.active) {
          showable.active = false;
        }
      }
      this.active = null;
      if (willAdvance) {
        this.emit('advance');
      }
    }

    for(i = 0; i < showables.length; i++) {
      let showable = showables[i];
      showable.update();
      if (showable.hiding && showable.ratio === 1) {
        let index = this.showables.indexOf(showable);
        if (index !== -1) {
          this.showables.splice(index, 1);
          i -= 1;
        }
        continue;
      }
      pointer = pointer || showables[i].pointer;
    }

    this.previousMouseState = this.mouseData.state;
    this.canvas.style.cursor = pointer ? 'pointer' : 'default';
    this.renderables = showables;
  }
  render() {
    if (!this.theme.ready) {
      return;
    }
    let result = [], showable;
    for (let i = 0; i < this.renderables.length; i++) {
      showable = this.renderables[i];
      result.push(
        showable.dirty ?
          (showable.dirty = false, showable.view = showable.render())
          : showable.view
      );
    }

    return <render ctx={this.ctx}>
      <clearRect width={this.canvas.width} height={this.canvas.height}/>
      {result}
    </render>;
  }
}