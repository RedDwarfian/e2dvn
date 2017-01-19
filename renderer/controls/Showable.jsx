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
      ready: true
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
    this.dirty = this.dirty || this.previousRatio !== this.ratio;
    this.previousRatio = this.ratio;
  }
  render(...children) {
    let x = this.last.x  + this.ratio * (this.position.x - this.last.x),
      y = this.last.y  + this.ratio * (this.position.y - this.last.y),
      sx = this.last.sx + this.ratio * (this.position.sx - this.last.sx),
      sy = this.last.sy + this.ratio * (this.position.sy - this.last.sy),
      rot = this.last.rot  + this.ratio * (this.position.rot - this.last.rot),
      cx = this.last.cx + this.ratio * (this.position.cx - this.last.cx),
      cy = this.last.cy + this.ratio * (this.position.cy - this.last.cy),
      a = this.last.a  + this.ratio * (this.position.a - this.last.a);
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