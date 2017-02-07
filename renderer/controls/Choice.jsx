let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');

module.exports = class Choice extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      type: 'choice',
      texture: null,
      previousTexture: null,
      selected: false,
      previousSelected: false,
      theme: theme,
      text: '',
      previousText: '',
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

    if (this.previousSelected !== this.selected) {
      this.dirty = true;
    }
    this.previousSelected = this.selected;

    if (this.previousText !== this.text) {
      this.dirty = true;
    }
    this.previousText = this.text;

    this.texture = this.theme.choice[
      (this.selected ? 'selected' : (this.active && this.hover ? 'active' : 'choice') )
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