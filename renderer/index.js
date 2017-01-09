import e2d from 'e2d';
import crel from 'crel';
let { window: { width, height, title } } = require('../package.json');

import EventEmitter2 from 'eventemitter2';

module.exports = class Interpreter extends EventEmitter2 {
  constructor(theme) {
    super();
    this.theme = theme;
    this.showables = [];
    crel(document.body, { style: 'margin: 0; padding: 0; '},
      crel('div', { style: `margin: 0 auto; width: ${width}px; height: ${height}px;` },
        this.canvas = crel('canvas', { width, height })
      )
    );

    this.windowBackground = null;
    this.ctx = this.canvas.getContext('2d');
    e2d.initialize(this.ctx);

    this.on('add', (showable) => this.showables.push(showable));
    this.on('remove', (showable) => {
      let index = this.showables.indexOf(showable);
      if (index !== -1) {
        this.showables.splice(index, 1);
      }
    });

    this.controlTextColor = `rgba(${this.theme.controlTextColor[0]}, ${this.theme.controlTextColor[1]}, ${this.theme.controlTextColor[2]}, ${this.theme.controlTextColor[3]})`;
    this.controlTextSelectedColor = `rgba(${this.theme.controlTextSelectedColor[0]}, ${this.theme.controlTextSelectedColor[1]}, ${this.theme.controlTextSelectedColor[2]}, ${this.theme.controlTextSelectedColor[3]})`;
    this.controlFont = `${this.theme.controlTextSize}px ${this.theme.controlFont}`;
    this.previousMouseState = false;
    return e2d.raf(() => {
      this.update();
      this.render();
    });
  }
  update() {
    if (this.theme.ready && !this.windowBackground) {
      this.windowBackground = this.ctx.createPattern(this.theme.windowBackground, 'repeat');
    }
    this.mouseData = e2d.mouseData(this.ctx);
    this.regions = e2d.activeRegions(this.ctx);
    let i, showable, pointer = false;
    //click event
    if (this.mouseData.clicked) {
      for(i = 0; i < this.showables.length; i++) {
        showable = this.showables[i];
        if (this.regions[showable.id]) {
          showable.active = true;
          this.emit('mousedown', showable);
        }
      }
    }

    // mouseUp
    if (this.previousMouseState && !this.mouseData.state) {
      for(i = 0; i < this.showables.length; i++) {
        showable = this.showables[i];
        if (showable.active && showable.hover) {
          this.emit('click', showable);
        }
        showable.active = false;
      }
    }

    //hovering
    for(i = 0; i < this.showables.length; i++) {
      showable = this.showables[i];
      showable.hover = !!this.regions[showable.id];
      pointer = pointer || showable.hover;
    }
    this.previousMouseState = this.mouseData.state;
    this.canvas.style.cursor = pointer ? 'pointer' : 'default';
  }
  render() {
    if (!this.theme.ready) {
      return <render ctx={this.ctx}>
        <clearRect width={width} height={height} />
        <translate x={width * 0.5} y={height * 0.5}>
          <textStyle textBaseline="middle" textAlign="center">
            <fillText text="Now Loading!" />
          </textStyle>
        </translate>
      </render>;
    }
    let result = [];
    let texture;
    for (let i = 0; i < this.showables.length; i++) {
      let showable = this.showables[i];
      switch(showable.type) {

        case "checkbox":
          texture = this.theme.checkbox[
            (showable.checked ? '': 'un') + 'checked' + (showable.active && showable.hover ? 'Active' : '')
          ];
          result.push(
            <translate x={showable.x} y={showable.y}>
              <drawImage img={texture} />
              <hitRect id={showable.id} width={texture.width} height={texture.height} />
              <translate x = {texture.width + this.theme.checkbox.textPadding} y={texture.height * 0.5}>
                <textStyle textBaseline="middle" font={this.controlFont}>
                  <fillStyle style={this.controlTextColor}>
                    <fillText text={showable.text} />
                  </fillStyle>
                </textStyle>
              </translate>
            </translate>
          );
          break;

          case "button":
            texture = this.theme.button[
              (showable.selected ? '': 'un') + 'selected' + (showable.active && showable.hover ? 'Active' : '')
            ];
            result.push(
            <translate x={showable.x} y={showable.y}>
              <drawImage img={texture} />
              <hitRect id={showable.id} width={texture.width} height={texture.height} />
              <translate x = {texture.width * 0.5} y={texture.height * 0.5}>
                <textStyle textBaseline="middle" font={this.controlFont} textAlign="center">
                  <fillStyle style={showable.selected ? this.controlTextSelectedColor : this.controlTextColor}>
                    <fillText text={showable.text} />
                  </fillStyle>
                </textStyle>
              </translate>
            </translate>
          );
      }
    }
    return <render ctx={this.ctx}>
      <clearRect width={width} height={height} />
      <fillStyle style={this.windowBackground}>
        <fillRect width={width} height={height} />
      </fillStyle>
      {result}
    </render>
  }
};