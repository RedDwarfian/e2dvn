let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');

module.exports = class Textarea extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      theme: theme,
      speaker: '',
      previousSpeaker: '',
      speakerColor: '',
      text: props.text || "",
      textIndex: 0,
      texture: theme.textarea.texture,
      previousTextIndex: -1,
      speed: 1,
      ctx: props.ctx,
      dirty: true,
    });
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
  calculateLines() {
    let workingText = this.text.slice(0, this.textIndex).trim().replace('\r\n', '\n').replace('\r', '');
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

      if (forceBreak === 1 || this.ctx.measureText(testText).width > this.theme.textarea.textBox[2]) {
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
            {this.calculateLines(this, this.theme.textarea)}
          </clip>
        </textStyle>
      </fillStyle>
    );
  }
};
