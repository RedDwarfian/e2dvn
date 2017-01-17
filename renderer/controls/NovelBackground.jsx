let Showable = require('../../webpack-loader/renderer-loader!./Character.jsx');
module.exports= class NovelBackground extends Character {
  constructor(props) {
    props.actor = 'Background';
    super(props);
    Object.assign(this, {
      type: 'novelBackground'
    });
  }
};