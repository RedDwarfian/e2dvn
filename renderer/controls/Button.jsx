let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');

module.exports = class Button extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      texture: null,
      previousTexture: null,
      selected: props.selected || false,
      previousSelected: props.selected || false,
      theme: theme,
      text: props.text,
      dirty: true
    });
  }
  update() {
    if (!this.theme.ready) {
      return;
    }
    if (this.active !== this.previousActive) {
      this.dirty = true;
    }
    this.previousActive = this.active;

    if (this.previousSelected !== this.selected) {
      this.dirty = true;
    }
    this.previousSelected = this.selected;

    this.texture = this.theme.button[
      (this.selected ? '': 'un') + 'selected' + (this.active && this.hover ? 'Active' : '')
    ];
    if (this.texture !== this.previousTexture) {
      this.dirty = true;
    }
    this.previousTexture = this.texture;
    this.pointer = this.hover;
    return super.update();
  }
  render() {
    return super.render(
      <hitRect id={this.id} width={this.texture.width} height={this.texture.height} />,
      <drawImage img={this.texture} />,
      <translate x={this.texture.width * 0.5} y={this.texture.height * 0.5}>
        <textStyle textBaseline="middle" font={this.theme.controlFont} textAlign="center">
          <fillStyle style={this.selected ? this.theme.controlTextSelectedColor : this.theme.controlTextColor}>
            <fillText text={this.text} />
          </fillStyle>
        </textStyle>
      </translate>
    );
  }
};