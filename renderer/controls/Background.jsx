let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');
module.exports = class Background extends Showable {
  constructor(props) {
    super(props);
    this.texture = props.texture;
  }
  update() {
    return super.update();
  }
  render() {
    return super.render(
      <drawImage img={this.texture} />
    );
  }
};