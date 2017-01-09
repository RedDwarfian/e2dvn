let template = require('babel-template');
let types = require('babel-types');

let body = template(`
let options = {
  [Symbol.for('count')]: 0,
  [Symbol.for('loaded')]: 0,
  ready: false
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
    LOADFONT: plugin.identifiers.LOADFONT
  });
  path.replaceWith(
    types.program(
      bodyResult
    )
  )
};