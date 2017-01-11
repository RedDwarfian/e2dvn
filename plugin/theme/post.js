let template = require('babel-template');
let types = require('babel-types');

let body = template(`
let options = {
  [Symbol.for('count')]: 0,
  [Symbol.for('loaded')]: 0,
  ready: false
};

let HUE = (p, q, t) => {
  if(t < 0) t += 1;
  if(t > 1) t -= 1;
  if(t < 1/6) return p + (q - p) * 6 * t;
  if(t < 1/2) return q;
  if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
};
let hsla = (h, s, l, a) => {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  return [
    Math.round(__hue(p, q, h + 1/3) * 255),
    Math.round(__hue(p, q, h) * 255),
    Math.round(__hue(p, q, h - 1/3) * 255),
    1
  ];
};

let CREATEIMAGE = (src) => {
  let img = new Image();
  img.src = src;
  options[Symbol.for('count')] += 1;
  img.addEventListener('load', () => {
    options[Symbol.for('loaded')] += 1;
    if (!options.ready && options[Symbol.for('count')] === options[Symbol.for('loaded')]) {
      options.ready = true;
    }
  })
  return img;
};
let LOADFONT = (name, src) => {
  let FontFaceObserver = require('fontfaceobserver');
  let font = new FontFaceObserver(name);
  let ff = \`
    @font-face{
      font-family: \$\{name\};
      src: url("\$\{src\}")
    }
  \`;
  let tag = document.createElement('style');
  tag.type = 'text/css';
  if (tag.styleSheet){
    tag.styleSheet.cssText = ff;
  } else {
    tag.appendChild(document.createTextNode(ff));
  }
  document.head.appendChild(tag);
  font.load().then(() => {
    options[Symbol.for('loaded')] += 1;
    if (!options.ready && options[Symbol.for('count')] === options[Symbol.for('loaded')]) {
      options.ready = true;
    }
  });
}

BODY;
module.exports = options;
`);
module.exports = (path, state, plugin, { }) => {
  let bodyResult = body({
    BODY: path.node.body,
    CREATEIMAGE: plugin.identifiers.CREATEIMAGE,
    LOADFONT: plugin.identifiers.LOADFONT,
    HUE: plugin.identifiers.HUE
  });
  path.replaceWith(
    types.program(
      bodyResult
    )
  )
};