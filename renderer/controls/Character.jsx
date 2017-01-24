let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let e2d = require('e2d');

module.exports = class Character extends Showable {
  constructor(props) {
    super(props);
    Object.assign(this, {
      type: 'character',
      mood: 'Neutral',
      previousMood: '',
      actor: '',
      previousActor: '',
      color: '',
      name: '',
      ready: true,
      texture: null,
      previousTexture: null,
      definition: null
    })
    this.load(props);
  }
  load(props) {
    if (props.hasOwnProperty('actor') && props.actor !== this.actor) {
      this.setActor(props.actor);
    }
    this.displayName = props.hasOwnProperty('displayName') ? props.displayName : this.displayName;
    this.color = props.hasOwnProperty('color') ? props.color : this.color;
  }
  setActor(actor) {
    this.ready = false;
    this.actor = actor;
    this.texture = new Image();
    this.texture.src = require('file-loader!../../assets/' + actor + '.png');
    this.texture.onload = () => this.ready = true;
    this.definition = require('json-loader!../../assets/' + actor + '.json');
  }
  get width() {
    return this.defintion.moods[this.mood].w;
  }
  get height() {
    return this.defintion.moods[this.mood].h;
  }
  update() {
    if (!this.ready) {
      return;
    }

    if (this.mood !== this.previousMood) {
      this.dirty = true;
    }
    this.previousMood = this.mood;

    if (this.actor !== this.previousActor) {
      this.setActor(this.actor);
      this.dirty = true;
    }
    this.previousActor = this.actor;
  }
  render() {
    if (!this.ready) {
      return this.view;
    }
    let mood = this.definition[this.mood];
    let width = mood.w;
    let height = mood.h;
    return super.render(
      <drawImage img={this.texture}
        x={0} y={0} width={width} height={height}
        sx={mood.x} sy={mood.y} sWidth={width} sHeight={height}
      />
    );
  }
  serialize() {
    return super.serialize({
      mood: this.mood,
      actor: this.actor,
      color: this.color,
      name: this.name
    });
  }
  deserialize(props) {
    this.load(props);
    return super.deserialize(props);
  }
}