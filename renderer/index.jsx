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

    this.ctx = this.canvas.getContext('2d');
    e2d.initialize(this.ctx);

    this.onAny((event, value) => this[event] && this[event](value));

    this.previousMouseState = false;

    this.stack = [];

    let self = this;
    return e2d.raf(function () {
      self.update();
      self.render();
    });
  }
  add(showable) {
    return !this.showables.includes(showable) ? this.showables.push(showable) : void 0;
  }
  remove(showable) {
    let index = this.showables.indexOf(showable);
    if (index !== -1) {
      this.showables.splice(index, 1);
    }
  }
  push() {
    this.stack.push({
      showables: this.showables
    })
    let img = new Image();
    img.src = this.canvas.toDataURL();
    this.showables = [{
      type: 'background',
      texture: img
    }];
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

      if (showable.type === 'actor') {
        let func = require('../ease/index')[showable.ease];
        let elapsed = Date.now() - showable.start;
        let ratio = elapsed > showable.duration ?
          1 :
          func(elapsed, showable.duration);
        for(let j = 0; j < 7; j++) {
          let value = showable.interpolated[j];
          showable.interpolated[j] = showable.previousTransform[j] + ratio * (showable.transform[j] - showable.previousTransform[j]);
          if (!showable.dirty && value !== showable.interpolated[j]) {
            showable.dirty = true;
          }
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
          texture = this.theme.checkbox[
            (showable.checked ? '': 'un') + 'checked' + (showable.active && showable.hover ? 'Active' : '')
          ];
          result.push(
            showable.dirty ? (showable.dirty = false, showable.view = <translate x={showable.x} y={showable.y}>
              <drawImage img={texture} />
              <hitRect id={showable.id} width={texture.width} height={texture.height} />
              <translate x = {texture.width + this.theme.checkbox.textPadding} y={texture.height * 0.5}>
                <textStyle textBaseline="middle" font={this.theme.controlFont}>
                  <fillStyle style={this.theme.controlTextColor}>
                    <fillText text={showable.text} />
                  </fillStyle>
                </textStyle>
              </translate>
            </translate>) : showable.view
          );
          break;

          case "button":
            texture = this.theme.button[
              (showable.selected ? '': 'un') + 'selected' + (showable.active && showable.hover ? 'Active' : '')
            ];
            result.push(
              showable.dirty ? (showable.dirty = false, showable.view = <translate x={showable.x} y={showable.y}>
                <drawImage img={texture} />
                <hitRect id={showable.id} width={texture.width} height={texture.height} />
                <translate x={texture.width * 0.5} y={texture.height * 0.5}>
                  <textStyle textBaseline="middle" font={this.theme.controlFont} textAlign="center">
                    <fillStyle style={showable.selected ? this.theme.controlTextSelectedColor : this.theme.controlTextColor}>
                      <fillText text={showable.text} />
                    </fillStyle>
                  </textStyle>
                </translate>
              </translate>) : showable.view
            );
            break;

          case "slider":
            texture = this.theme.slider['pill' + (showable.active ? 'Active' : '')];
            result.push(
              showable.dirty ? (showable.dirty = false, showable.view = <translate x={showable.x} y={showable.y}>
                <drawImage img={this.theme.slider.capLeft} />>

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
                <drawImage img={this.theme.textarea.texture} />
                <fillStyle style={showable.speakerColor}>
                  <textStyle font={this.theme.textarea.speakerBoxFont} textBaseline="top">
                    <fillText
                      text={showable.speaker}
                      x={this.theme.textarea.speakerBox[0]}
                      y={this.theme.textarea.speakerBox[1]}
                    />
                  </textStyle>
                </fillStyle>
                <fillStyle style={this.theme.textarea.color}>
                  <textStyle font={this.theme.textarea.textFont} textBaseline="top">
                    <clip path={
                      <rect
                        x={this.theme.textarea.textBox[0]}
                        y={this.theme.textarea.textBox[1]}
                        width={this.theme.textarea.textBox[2]}
                        height={this.theme.textarea.textBox[3]}
                      />
                    }>
                      {this.calculateLines(showable, this.theme.textarea)}
                    </clip>
                  </textStyle>
                </fillStyle>
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
  calculateLines(showable) {
    let workingText = showable.text.slice(0, showable.textIndex).trim().replace('\r\n', '\n').replace('\r', '');
    let result = [];
    let index = [];
    let i;
    let lastIndex = 0;
    let testIndex = 0;
    let previousTestIndex = 0;
    let testText = "";
    let ctx = this.ctx;
    let count = 0;
    let forceBreak;
    for (i = 0; i < workingText.length; i++) {
      switch(workingText[i]) {
        case " ":
        case "\t":
          index.push([i, 0]);
          break;
        case "\n":
          index.push([i, 1]);
      }
    }
    index.push([workingText.length, 0]);
    let tempFont = ctx.font;
    ctx.font = this.theme.textarea.textFont;

    for (i = 0; i < index.length; i++) {
      [testIndex, forceBreak] = index[i];
      testText = workingText.slice(lastIndex, testIndex).trim();

      if (forceBreak === 1 || ctx.measureText(testText).width > this.theme.textarea.textBox[2]) {
        result.push(
          <fillText
            text={forceBreak ? testText : workingText.slice(lastIndex, previousTestIndex).trim()}
            x={this.theme.textarea.textBox[0]}
            y={this.theme.textarea.textBox[1] + count * (this.theme.textarea.textFontSize + this.theme.textarea.textLeading)}
          />
        );
        count += 1;
        lastIndex = forceBreak ? testIndex : previousTestIndex;
      }

      previousTestIndex = testIndex;
    }

    result.push(
      <fillText
        text={workingText.slice(lastIndex).trim()}
        x={this.theme.textarea.textBox[0]}
        y={this.theme.textarea.textBox[1] + count * (this.theme.textarea.textFontSize + this.theme.textarea.textLeading)}
      />
    );
    ctx.font = tempFont;
    return result;
  }
};