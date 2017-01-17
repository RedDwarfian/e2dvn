let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');

module.exports = class Button extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      type: 'button',
      texture: null,
      previousTexture: null,
      selected: false,
      previousSelected: false,
      theme: theme,
      text: '',
      onclick: function*(){},
      dirty: true
    });
    this.load(props);
  }
  load(props) {
    this.selected = props.hasOwnProperty('selected') ? props.selected : this.selected;
    this.text = props.hasOwnProperty('text') ? props.text : this.text;
    this.onclick = props.hasOwnProperty('onclick') ? props.onclick : this.onclick;
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
  serialize() {
    return super.serialize({
      selected: this.selected,
      text: this.text,
      onclick: this.onclick
    });
  }
  deserialize(props) {
    this.load(props);
    return super.deserialize(props);
  }
};