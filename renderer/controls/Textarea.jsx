let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');
let parser = require('pegjs-loader!../text-parser.pegjs');
module.exports = class Textarea extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      type: 'textarea',
      theme: theme,
      speaker: '',
      previousSpeaker: null,
      speakerColor: '',
      lines: [],
      textIndex: 0,
      texture: theme.textarea.texture,
      previousTextIndex: -1,
      speed: 1,
      dirty: true,
    });

    Object.defineProperty(this, 'text', {
      get() {
        return this.lines.join('\n');
      },
      set(value) {
        parser.font = this.theme.textarea.textFont;
        parser.maxWidth = this.theme.textarea.textBox[2];
        this.lines = parser.parse(value);
      },
      configurable: false,
      enumerable: true
    })
    this.load(props);
  }
  load(props) {
    this.speaker = props.hasOwnProperty('speaker') ? props.speaker : this.speaker;
    this.speakerColor = props.hasOwnProperty('speakerColor') ? props.speakerColor : this.speakerColor;
    this.text = props.hasOwnProperty('text') ? props.text : this.text;
  }
  update() {
    if (!this.theme.ready) {
      return;
    }
    this.textIndex += this.speed;
    if (this.textIndex > this.text.length) {
      this.textIndex = this.text.length;
    }
    if (this.previousTextIndex !== this.textIndex) {
      this.dirty = true;
    }
    this.previousTextIndex = this.textIndex;
    if (this.speaker !== this.previousSpeaker) {
      this.dirty = true;
    }
    this.previousSpeaker = this.speaker;
    return super.update();
  }
  get completed() {
    return this.ratio === 1 && this.textIndex === this.text.length;
  }
  autoComplete (){
    this.textIndex = this.text.length;
    return super.autoComplete();
  }
  calculateLines() {
    let currentIndex = 0;
    let lines = [];
    for (let i = 0; i < this.lines.length; i++) {
      let line = this.lines[i];
      if (line.length + currentIndex > this.textIndex) {
        line = line.slice(0, this.textIndex - currentIndex);
        lines.push(
          <fillText
            x={this.theme.textarea.textBox[0]}
            y={this.theme.textarea.textLeading * i + i * this.theme.speakerBoxFontSize}
            text={line}
          />
        );
        return lines;
      }
      lines.push(
        <fillText
          x={this.theme.textarea.textBox[0]}
          y={this.theme.textarea.textLeading * i + i * this.theme.speakerBoxFontSize}
          text={line}
        />
      );
      currentIndex += line.length;
    }
    return lines;
  }
  render() {
    return super.render(
      <drawImage img={this.theme.textarea.texture} />,
      <fillStyle style={this.speakerColor}>
        <textStyle font={this.theme.textarea.speakerBoxFont} textBaseline="top">
          <fillText
            text={this.speaker}
            x={this.theme.textarea.speakerBox[0]}
            y={this.theme.textarea.speakerBox[1]}
          />
        </textStyle>
      </fillStyle>,
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
            {this.calculateLines()}
          </clip>
        </textStyle>
      </fillStyle>
    );
  }
  serialize() {
    return super.serialize({
      text: this.text,
      speaker: this.speaker,
      speakerColor: this.speakerColor
    });
  }
  deserialize(props) {
    this.load(props);
    this.textIndex = this.text.length;
    this.previousTextIndex = -1;
  }
};
