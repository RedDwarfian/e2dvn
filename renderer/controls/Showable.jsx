let z = -1;
let e2d = require('e2d');
module.exports = class Showable {
  constructor(props) {
    Object.assign(this, {
      id: '',
      position: { x: 0, y: 0, rot: 0, sx: 1, sy: 1, cx: 0, cy: 0, a: 1, z: ++z },
      last: { x: 0, y: 0, rot: 0, sx: 1, sy: 1, cx: 0, cy: 0, a: 1, z },
      ease: 'quadInOut',
      duration: 400,
      start: Date.now(),
      dirty: true,
      ratio: 1,
      previousRatio: 0.99,
      active: false,
      previousActive: false,
      hover: false,
      pointer: false,
      hiding: false,
      view: [],
      ready: true,
      ctx: document.createElement('canvas').getContext('2d')
    });
    Showable.prototype.load.call(this, props);
    Object.assign(this.last, this.position);
  }
  load(props) {
    this.id = props.hasOwnProperty('id') ? props.id : this.id;
    this.position.x = props.hasOwnProperty('x') ? props.x : this.position.x;
    this.position.y = props.hasOwnProperty('y') ? props.y : this.position.y;
    this.position.rot = props.hasOwnProperty('rot') ? props.rot : this.position.rot;
    this.position.sx = props.hasOwnProperty('sx') ? props.sx : this.position.sx;
    this.position.sy = props.hasOwnProperty('sy') ? props.sy : this.position.sy;
    this.position.cx = props.hasOwnProperty('cx') ? props.cx : this.position.cx;
    this.position.cy = props.hasOwnProperty('cy') ? props.cy : this.position.cy;
    this.position.a = props.hasOwnProperty('a') ? props.a : this.position.a;
    this.position.z = props.hasOwnProperty('z') ? props.z : this.position.z;
    this.ease = props.hasOwnProperty('ease') ? props.ease : this.ease;
    this.duration = props.hasOwnProperty('duration') ? props.duration : this.duration;
  }
  update() {
    let ease = require('../../ease/index')[this.ease];
    this.ratio = 1;
    if (Date.now() <= this.start + this.duration) {
      this.ratio = ease(
        Date.now() - this.start,
        this.duration
      );
    }
    if (this.previousRatio !== this.ratio) {
      this.dirty = true;
    }
    this.previousRatio = this.ratio;
    
    if (this.active !== this.previousActive) {
      this.dirty = true;
    }
    this.previousActive = this.active;
  }
  render(...children) {
    let x = this.checkComputed(this.last.x) + this.ratio * (this.checkComputed(this.position.x) - this.checkComputed(this.last.x)),
      y = this.checkComputed(this.last.y) + this.ratio * (this.checkComputed(this.position.y) - this.checkComputed(this.last.y)),
      sx = this.checkComputed(this.last.sx) + this.ratio * (this.checkComputed(this.position.sx) - this.checkComputed(this.last.sx)),
      sy = this.checkComputed(this.last.sy) + this.ratio * (this.checkComputed(this.position.sy) - this.checkComputed(this.last.sy)),
      rot = this.checkComputed(this.last.rot) + this.ratio * (this.checkComputed(this.position.rot) - this.checkComputed(this.last.rot)),
      cx = this.checkComputed(this.last.cx) + this.ratio * (this.checkComputed(this.position.cx) - this.checkComputed(this.last.cx)),
      cy = this.checkComputed(this.last.cy) + this.ratio * (this.checkComputed(this.position.cy) - this.checkComputed(this.last.cy)),
      a = this.checkComputed(this.last.a) + this.ratio * (this.checkComputed(this.position.a) - this.checkComputed(this.last.a));
    return <translate x={x} y={y}>
      <rotate angle={rot}>
        <scale x={sx} y={sy}>
          <translate x={-cx} y={-cy}>
            <globalAlpha alpha={a}>
              {children}
            </globalAlpha>
          </translate>
        </scale>
      </rotate>
    </translate>;
  }
  checkComputed(value) {
    return value && value._type === 'computed' ?
      (
        (
          value.unit === 'aw' ? this.width :
          value.unit === 'ah' ? this.height : void 0
        ) * value.value * 0.01
      ) :
      value;
  }
  get completed() {
    return this.ratio === 1;
  }
  autoComplete() {
    this.ratio = 1;
    this.start = Date.now() - this.duration;
  }
  get width() {
    return this.texture.width;
  }
  get height() {
    return this.texture.height;
  }
  serialize(props) {
    return Object.assign({}, props, this.position, {
      id: this.id,
      type: this.type,
      ease: this.ease,
      duration: this.duration
    });
  }
  deserialize(props) {
    Object.assign(this.last, this.position);
    this.start = Date.now();
    this.load(props);
  }
};