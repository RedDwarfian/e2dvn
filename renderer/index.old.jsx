import e2d from 'e2d';
import crel from 'crel';
let Background = require('./controls/Background.jsx');

let { window: { width, height, title } } = require('../package.json');

import EventEmitter2 from 'eventemitter2';

module.exports = class Renderer extends EventEmitter2 {
  constructor(theme) {
    super();
    this.theme = theme;
    this.showables = [];
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
  push() {
    this.stack.push({
      showables: this.showables
    })
    let img = new Image();
    img.src = this.canvas.toDataURL();
    this.showables = [new Background({ texture: img })];
  }
  pop() {
    this.showables = this.stack.pop().showables;
  }
  update() {
    if (!this.theme.ready) {
      return;
    }
    if (!this.sliderLine) {
      this.sliderLine = this.ctx.createPattern(this.theme.slider.line, 'repeat-x');
    }

    
    let i, showable, pointer = false, ratio, ellapsed;
    //click event
    if (this.mouseData.clicked) {
      for(i = 0; i < this.showables.length; i++) {
        showable = this.showables[i];
        if (this.regions[showable.id]) {
          showable.active = true;
          this.emit('mousedown', showable);
          showable.dirty = true;
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
        if (showable.active) {
          showable.dirty = true;
          showable.active = false;
        }
      }
    }

    for(i = 0; i < this.showables.length; i++) {
      showable = this.showables[i];
      showable.hover = !!this.regions[showable.id];

      //hovering
      if (showable.type === 'button' || showable.type === 'choice' || showable.type === 'slider' || showable.type === 'checkbox') {
        pointer = pointer || showable.hover;
      }

      if (showable.type === 'textarea') {
        let index = showable.textIndex;
        showable.textIndex += showable.speed;
        if (showable.textIndex > showable.text.length) {
          showable.textIndex = showable.text.length;
        }
        if (index !== showable.textIndex) {
          showable.dirty = true;
        }
      }

      if (showable.type === 'slider' && showable.active) {
        let val = showable.value;

        showable.value =
          (this.mouseData.x - showable.x - this.theme.slider.pillActive.width * 0.5) / (showable.width - this.theme.slider.pillActive.width);

        showable.value = Math.max(0, Math.min(1, showable.value));
        pointer = true;
        if (val !== showable.value) {
          this.emit('value', showable);
          showable.dirty = true;
        }
      }

      //animation
      ellapsed = Date.now() - showable.start;
      ratio = ellapsed > showable.duration ?
        1 :
        require('../ease/index')[showable.ease](ellapsed, showable.duration);
      for(let j = 0; j < 9; j++) {
        let value = showable.interpolated[j];
        showable.interpolated[j] = showable.previous.transform[j] + ratio * (showable.transform[j] - showable.previous.transform[j]);
        if (!showable.dirty && value !== showable.interpolated[j]) {
          showable.dirty = true;
        }
      }

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
          
          result.push(
            showable.dirty ? (showable.dirty = false, showable.view = <translate x={showable.x} y={showable.y}>
             
            </translate>) : showable.view
          );
          break;

          case "button":
            texture = this.theme.button[
              (showable.selected ? '': 'un') + 'selected' + (showable.active && showable.hover ? 'Active' : '')
            ];
            result.push(
              showable.dirty ? (showable.dirty = false, showable.view = <setTransform matrix={showable.interpolated}>
                <translate x={-showable.interpolated[7]} y={-showable.interpolated[8]}>
                  <drawImage img={texture} />
                  <hitRect id={showable.id} width={texture.width} height={texture.height} />
                  <translate x={texture.width * 0.5} y={texture.height * 0.5}>
                    <textStyle textBaseline="middle" font={this.theme.controlFont} textAlign="center">
                      <fillStyle style={showable.selected ? this.theme.controlTextSelectedColor : this.theme.controlTextColor}>
                        <fillText text={showable.text} />
                      </fillStyle>
                    </textStyle>
                  </translate>
                </translate>
              </setTransform>) : showable.view
            );
            break;

          case "slider":
            texture = this.theme.slider['pill' + (showable.active ? 'Active' : '')];
            result.push(
              showable.dirty ? (showable.dirty = false, showable.view = <translate x={showable.x} y={showable.y}>
                <drawImage img={this.theme.slider.capLeft} />
                <translate x={this.theme.slider.capLeft.width} y={0}>
                  <fillStyle style={this.sliderLine}>
                    <fillRect
                      width={showable.width - this.theme.slider.capRight.width}
                      height={this.theme.slider.line.height}
                    />
                  </fillStyle>
                </translate>
                <translate x={showable.width - this.theme.slider.capRight.width} y={0}>
                  <drawImage img={this.theme.slider.capRight}/>
                </translate>
                <translate
                  x={(showable.width-texture.width) * showable.value}
                  y={0}>
                  <drawImage img={texture}/>
                  <hitRect id={showable.id} width={texture.width} height={texture.height}></hitRect>
                </translate>
              </translate>) : showable.view
            );
            break;

          case "choice":
            texture = showable.selected ? this.theme.choice.selected :
              showable.active ? this.theme.choice.active : this.theme.choice.choice;
            result.push(
              showable.dirty ? (showable.dirty = false, showable.view = <translate
                x={width * 0.5 - texture.width * 0.5}
                y={showable.number * this.theme.choice.margin + (showable.number - 1) * texture.height} >
                <drawImage img={texture} />
                <hitRect id={showable.id} width={texture.width} height={texture.height} />
                <translate x = {texture.width * 0.5} y={texture.height * 0.5}>
                  <textStyle textBaseline="middle" font={this.theme.choiceFont} textAlign="center">
                    <fillStyle style={showable.selected ? this.theme.choiceTextSelectedColor : this.theme.choiceTextColor}>
                      <fillText text={showable.text} />
                    </fillStyle>
                  </textStyle>
                </translate>
              </translate>) : showable.view
            );
            break;

          case "textarea":
            texture = this.theme.textarea.texture;

            result.push(
              showable.dirty ? (showable.dirty = false, showable.view = <translate x={showable.x} y={showable.y}>
            </translate>) : showable.view
            );
            break;

          case "background":
            result.push(
              <drawImage img={showable.texture} />
            );
            break;

          case "actor":
            result.push(
              showable.dirty ? (showable.dirty = false, showable.view = <setTransform matrix={showable.interpolated}>
                <globalAlpha alpha={showable.interpolated[6]}>
                  <drawImage
                    img={showable.texture}
                    x={0}
                    y={0}
                    width={showable.definition.moods[showable.mood].w}
                    height={showable.definition.moods[showable.mood].h}
                    sx={showable.definition.moods[showable.mood].x}
                    sy={showable.definition.moods[showable.mood].y}
                    sWidth={showable.definition.moods[showable.mood].w}
                    sHeight={showable.definition.moods[showable.mood].h}
                  />
                </globalAlpha>
              </setTransform>) : showable.view
            );
            break;
      }
    }
    return <render ctx={this.ctx}>
      <clearRect width={width} height={height} />
      {result}
    </render>;
  }
  
};