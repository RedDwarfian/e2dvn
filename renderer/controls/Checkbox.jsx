let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');

module.exports = class Checkbox extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      texture: null,
      previousTexture: null,
      checked: props.checked || false,
      previousChecked: props.checked || false,
      theme: theme,
      text: props.text
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

    if (this.previousChecked !== this.checked) {
      this.dirty = true;
    }
    this.previousChecked = this.checked;

    this.texture = this.theme.checkbox[
      (this.checked ? '': 'un') + 'checked' + (this.active && this.hover ? 'Active' : '')
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
      <drawImage img={this.texture} />,
      <hitRect id={this.id} width={this.texture.width} height={this.texture.height} />,
      <translate x = {this.texture.width + this.theme.checkbox.textPadding} y={this.texture.height * 0.5}>
        <textStyle textBaseline="middle" font={this.theme.controlFont}>
          <fillStyle style={this.theme.controlTextColor}>
            <fillText text={this.text} />
          </fillStyle>
        </textStyle>
      </translate>
    );
  }
};