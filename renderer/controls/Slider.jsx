let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');

module.exports = class Slider extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      type: 'slider',
      backgroundTexture: null,
      size: props.size,
      pill: null,
      theme: theme,
      capLeft: theme.slider.capLeft,
      line: theme.slider.line,
      linePattern: null,
      capRight: theme.slider.capRight,
      value: 0,
      previousValue: -1,
      onvalue: function*(){},
      dirty: true
    });
    theme.slider.line.onload = () => {
      let tmpctx = document.createElement('canvas').getContext('2d');
      this.linePattern = tmpctx.createPattern(this.line,'repeat-x');
    }
    this.load(props);
  }
  load(props) {
    this.onvalue = props.hasOwnProperty('onvalue') ? props.onvalue : this.onvalue;
  }
  update(renderer) {
    if (!this.theme.ready) {
      return;
    }
     
    if (this.active) {
      let { mouseData: { x } } = renderer;
      let relativeX = x - this.position.x - (this.pill.width * 0.5);
      this.value = relativeX / (this.size - this.pill.width);
      if (this.value > 1) {
        this.value = 1;
      }
      if (this.value < 0) {
        this.value = 0;
      }
    }

    if (this.value !== this.previousValue) {
      this.dirty = true;
      if (this.onvalue) {
        renderer.emit('value', this);
        renderer.emit('advance');
      }
    }
    this.previousValue = this.value;

    this.pill = this.theme.slider[
      'pill' + (this.active ? 'Active' : '')
    ];

    this.pointer = this.hover || this.active;
    return super.update();
  }
  render() {
    return super.render(
      <drawImage img={this.capLeft} />,
      
      <translate x={this.capLeft.width} y={0}>
        <fillStyle style={this.linePattern}>
          <fillRect
            width={this.size - this.capLeft.width - this.capRight.width}
            height={this.line.height}
          />
        </fillStyle>
      </translate>,

      <translate x={this.size - this.capRight.width} y={0}>
        <drawImage img={this.capRight} />
      </translate>,

      <translate x={(this.size - this.pill.width) * this.value} y={0}>
        <hitRect id={this.id} width={this.pill.width} height={this.pill.height} />
        <drawImage img={this.pill} />
      </translate>
    );
  }
  serialize() {
    return super.serialize({
      size: this.size,
      value: this.value
    });
  }
  deserialize(props) {
    this.load(props);
    return super.deserialize(props);
  }
};