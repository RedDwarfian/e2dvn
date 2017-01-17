let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');

module.exports = class Checkbox extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      type: 'checkbox',
      texture: null,
      previousTexture: null,
      checked: false,
      previousChecked: false,
      theme: theme,
      text: ''
    });
    this.load(props);
  }
  load(props) {
    this.checked = props.hasOwnProperty('checked') ? props.checked : this.checked;
    this.text = props.hasOwnProperty('text') ? props.text : this.text;
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
  serialize() {
    return super.serialize({
      checked: this.checked,
      text: this.text
    });
  }
  deserialize(props) {
    this.load(props);
    super.deserialize(props);
  }
};