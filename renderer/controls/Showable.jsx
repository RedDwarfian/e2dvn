let z = -1;
let e2d = require('e2d');
module.exports = class Showable {
  constructor(props) {
    Object.assign(this, {
      id: props.id,
      position: {
        x: props.x || 0,
        y: props.y || 0,
        rot: props.rot || 0,
        sx: typeof props.sx === 'number' ? props.sx : 1,
        sy: typeof props.sy === 'number' ? props.sy : 1,
        cx: props.cx || 0,
        cy: props.cy || 0,
        a: typeof props.a === 'number' ? props.a : 1,
        z: ++z
      },
      last: {
        x: props.x || 0,
        y: props.y || 0,
        rot: props.rot || 0,
        sx: typeof props.sx === 'number' ? props.sx : 1,
        sy: typeof props.sy === 'number' ? props.sy : 1,
        cx: props.cx || 0,
        cy: props.cy || 0,
        a: typeof props.a === 'number' ? props.a : 1,
        z: z
      },
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
      view: []
    });

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
};