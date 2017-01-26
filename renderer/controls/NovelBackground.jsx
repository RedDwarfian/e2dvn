let Showable = require('../../webpack-loader/renderer-loader!./Showable.jsx');
let crel = require('crel');
let e2d = require('e2d');
module.exports= class NovelBackground extends Showable {
  constructor(props) {
    super(props);

    //must be set as own property otherwise the engine won't set the mood
    Object.defineProperty(this, 'mood', {
      get() {
        return this[Symbol.for('mood')];
      },
      set(value) {
        this.previousMood = this.mood;
        this[Symbol.for('mood')] = value;
      },
      enumerable: true,
      configurable: false,
    });


    Object.assign(this, {
      ready: false,
      dirty: true,
      previousMood: 'black',
      mood: 'black',
      definition: require('json-loader!../../assets/Background.json'),
      texture: crel('img', {
        src: require('file-loader!../../assets/Background.png'),
      }),
      renderer: props.renderer
    });
    this.texture.onload = () => {
      this.ready = true;
      this.dirty = true;
      this.start = Date.now();
    };
  }

  get width() {
    return this.definition.moods[this.mood] ? this.definition.moods[this.mood].w : this.renderer.width;
  }
  get height() {
    return this.definition.moods[this.mood] ? this.definition.moods[this.mood].h : this.renderer.height;
  }
  render() {
    let previousMood = this.definition.moods[this.previousMood];
    let mood = this.definition.moods[this.mood];
    return super.render(
      <globalAlpha alpha = {1 - this.ratio}>
        {
           previousMood ?
            <drawImage img={this.texture}
              x={0} y={0} width={previousMood.w} height={previousMood.h}
              sx={previousMood.x} sy={previousMood.y} sWidth={previousMood.w} sHeight={previousMood.h}
            /> :
            <fillStyle style={this.previousMood}>
              <fillRect width={this.renderer.width}  height={this.renderer.height}/>
            </fillStyle>
        }
      </globalAlpha>,
      <globalAlpha alpha={this.ratio}>
        {
          mood ?
            <drawImage img={this.texture}
              x={0} y={0} width={mood.w} height={mood.h}
              sx={mood.x} sy={mood.y} sWidth={mood.w} sHeight={mood.h}
            /> :
            <fillStyle style={this.mood}>
              <fillRect width={this.renderer.width}  height={this.renderer.height} />
            </fillStyle>
        }
      </globalAlpha>
    );
  }
};