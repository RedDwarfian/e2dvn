/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["e2d"] = factory();
	else
		root["e2d"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

class Instruction {
  constructor(type, props) {
    this.type = type;
    this.props = props;
    return Object.seal(this);
  }
}

Object.seal(Instruction);
Object.seal(Instruction.prototype);

module.exports = Instruction;


/***/ },
/* 1 */
/***/ function(module, exports) {

let transformPoints = (points, matrix) => {
  let result = [],
      x, y;

  for(let i = 0; i < points.length; i++) {
    [x, y] = points[i];
    result.push([
      matrix[0] * x + matrix[2] * y + matrix[4],
      matrix[1] * x + matrix[3] * y + matrix[5]
    ]);
  }
  return result;
};

module.exports = transformPoints;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0),
  cache = new Instruction('beginPath');

let beginPath = () => cache;

module.exports = beginPath;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let cache = new Instruction('closePath');

let closePath = () => cache;

module.exports = closePath;


/***/ },
/* 4 */
/***/ function(module, exports) {


let cycleMouseData = (ctx) => {
  let mouseData = ctx.canvas[Symbol.for('mouseData')];
  if (mouseData) {
    mouseData.dx = mouseData.x - mouseData.previousX;
    mouseData.dy = mouseData.y - mouseData.previousY;

    mouseData.previousX = mouseData.x;
    mouseData.previousY = mouseData.y;

    mouseData.clicked = 0;
  }
};

module.exports = cycleMouseData;

/***/ },
/* 5 */
/***/ function(module, exports) {

let det = 0;
let invertMatrix = ([a, b, c, d, e, f]) => (
  det = 1 / (a * d - c * b),
  [
    d * det,
    -c * det,
    -b * det,
    a * det,
    (b * f - e * d) * det,
    (e * b - a * f) * det
  ]
);
 module.exports = invertMatrix;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let lineTo = (x, y) => new Instruction('lineTo', { x, y });

module.exports = lineTo;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let moveTo = (x, y) => new Instruction('moveTo', { x, y });

module.exports = moveTo;


/***/ },
/* 8 */
/***/ function(module, exports) {

let pointInRect = ([px, py], [[x, y], [width, height]]) => px > x && py > y && px < width && py < height;

module.exports = pointInRect;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('restore');

let setTransform = (matrix, ...children) => [
  new Instruction('setTransform', [
    matrix[0],
    matrix[1],
    matrix[2],
    matrix[3],
    matrix[4],
    matrix[5]
  ]),
  children,
  end
];

module.exports = setTransform;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

let pointInPolygon = __webpack_require__(56);
let transformPoints = __webpack_require__(1);
let invertMatrix = __webpack_require__(5);
let pointInRect = __webpack_require__(8);

let matrix = new Float64Array(6);

module.exports = (ctx) => {
  let regions = ctx.canvas[Symbol.for('regions')],
    mousePoints = ctx.canvas[Symbol.for('mousePoints')],
    mouseData = ctx.canvas[Symbol.for('mouseData')],
    results = {};

  //the mouse might have held still, add the current mouse position
  if (mousePoints.length === 0) {
    mousePoints.push([mouseData.x, mouseData.y, mouseData.state]);
  }

  for(let region of regions) {

    //invert the region matrix and transform the mouse points
    let transformedMousePoints = transformPoints(mousePoints, invertMatrix(region.matrix));
    //the mouse points are now relative to the mouse region

    if (!region.polygon) {
      for (let mousePoint of transformedMousePoints) {
        if (pointInRect(mousePoint, region.points)) {
          region.hover = true;
          region.clicked = !!mouseData.clicked;
          results[region.id] = region;
          break;
        }
      }
      continue;
    }

    //loop over each point until one is matched
    for(let mousePoint of transformedMousePoints) {
      if (pointInPolygon(mousePoint, region.points)) {
        region.hover = true;
        region.clicked = !!mouseData.clicked;
        results[region.id] = region;
        break;
      }
    }
  }
  return results;
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0),
    pi2 = Math.PI * 2;

let arc = (...args) => {
  let  [x, y, r, startAngle, endAngle, counterclockwise] = args;
  let props = { x: 0, y: 0, r: x, startAngle: 0, endAngle: pi2, counterclockwise: false };


  if (args.length > 3) {
    props.startAngle = startAngle;
    props.endAngle = endAngle;
    props.counterclockwise = !!counterclockwise;
  }

  if (args.length > 1){
    props.x = x;
    props.y = y;
    props.r = r;
  }

  return new Instruction("arc",  props);
};

module.exports = arc;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let arcTo = (x1, y1, x2, y2, r) => new Instruction('arcTo', { x1, y1, x2, y2, r });

module.exports = arcTo;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let bezierCurveTo = (cp1x, cp1y, cp2x, cp2y, x, y) => new Instruction('bezierCurveTo', {
  cp1x,
  cp1y,
  cp2x,
  cp2y,
  x,
  y
});


module.exports = bezierCurveTo;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let clearRect = (...args) => new Instruction('clearRect',
  args.length > 2 ?
    { x: args[0], y: args[1], width: args[2], height: args[3] } :
    { x: 0, y: 0, width: args[0], height: args[1] }
);


module.exports = clearRect;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let begin = new Instruction('beginClip'),
  performClip = new Instruction('clip'),
  end = new Instruction('endClip');

let clip = (path, ...children) => [
  begin,
  path,
  performClip,
  children,
  end
];

module.exports = clip;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let cache = new Instruction('clipPath');

let clipPath = () => cache;

module.exports = clipPath;


/***/ },
/* 17 */
/***/ function(module, exports) {

let createRegularPolygon = (radius = 0, position = [0, 0], sides = 3) => {
  let polygon = [];
  for(let i = 0; i < sides; i++) {
    polygon.push([
      position[0] + radius * Math.cos(Math.PI * 2 * i / sides),
      position[1] + radius * Math.sin(Math.PI * 2 * i / sides)
    ]);
  }
  return polygon;
};

module.exports = createRegularPolygon;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let drawImage = (...args) => {
  let [img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight] = args;

  if (args.length === 9) {
    return new Instruction('drawImageSource', {
      img,
      sx,
      sy,
      sWidth,
      sHeight,
      dx,
      dy,
      dWidth,
      dHeight
    });
  }

  if (args.length >= 5) {
    return new Instruction('drawImageSize', {
      img,
      dx: sx,
      dy: sy,
      dWidth: sWidth,
      dHeight: sHeight
    });
  }

  if (args.length >= 3) {
    return new Instruction('drawImage', {
      img,
      dx: sx,
      dy: sy
    });
  }

  return new Instruction('drawImage', {
    img,
    dx: 0,
    dy: 0
  });
};

module.exports = drawImage;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0),
    pi2 = Math.PI * 2;

let ellipse = (...args) => {
  let [x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise] = args;

  let props = { x: 0, y: 0, radiusX: x, radiusY: y, rotation: 0, startAngle: 0, endAngle: pi2, anticlockwise: false };

  if (args.length > 5) {
    props.startAngle = startAngle;
    props.endAngle = endAngle;
    props.anticlockwise = !!anticlockwise;
  }

  if (args.length > 4) {
    props.rotation = rotation;
  }

  if (args.length > 2){
    props.x = x;
    props.y = y;
    props.radiusX = radiusX;
    props.radiusY = radiusY;
  }

  return new Instruction("ellipse",  props);
};

module.exports = ellipse;


/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = (ctx, ...methods) => {
  let extensions = ctx[Symbol.for('extensions')];
  if (!extensions) {
    extensions = ctx[Symbol.for('extensions')] = {};
  }
  methods.forEach(
    (method) => Object.assign(extensions, method)
  );
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let cache = new Instruction('fill');

let fill = () => cache;

module.exports = fill;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {



let Instruction = __webpack_require__(0),
    pi2 = Math.PI * 2;

let fillArc = (...args) => {
  let [x, y, r, startAngle, endAngle, counterclockwise] = args;
  let props = { x: 0, y: 0, r: x, startAngle: 0, endAngle: pi2, counterclockwise: false };


  if (args.length > 3) {
    props.startAngle = startAngle;
    props.endAngle = endAngle;
    props.counterclockwise = !!counterclockwise;
  }

  if (args.length >= 2) {
    props.x = x;
    props.y = y;
    props.r = r;
  }

  return new Instruction("fillArc",  props);
};

module.exports = fillArc;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let fillRect = (...args) => new Instruction('fillRect',
  args.length > 2 ?
    { x: args[0], y: args[1], width: args[2], height: args[3] } :
    { x: 0, y: 0, width: args[0], height: args[1] }
);

module.exports = fillRect;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('endFillStyle');

let fillStyle = (value, ...children) => [
    new Instruction('fillStyle', { value }),
    children,
    end
];

module.exports = fillStyle;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let fillText = (...args) => {
  let [text, x, y, maxWidth] = args;
  if (args.length < 4) {
    maxWidth = null;
  }
  if (args.length < 3) {
    x = 0;
    y = 0;
  }
  return new Instruction('fillText', { text, x, y, maxWidth });
};

module.exports = fillText;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {



let Instruction = __webpack_require__(0);
let end = new Instruction('endGlobalAlpha');

let globalAlpha = (value, ...children) => [
  new Instruction('globalAlpha', { value }),
  children,
  end
];
module.exports = globalAlpha;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {



var Instruction = __webpack_require__(0);

let end = new Instruction('endGlobalCompositeOperation');

let globalCompositeOperation = (value, ...children) => [
  new Instruction('globalCompositeOperation', { value }),
  children,
  end
];

module.exports = globalCompositeOperation;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let hitRect = (id, ...args) => {
  let [x, y, width, height] = args;
  if (args.length <= 3) {
    width = x;
    height = y;
    x = 0;
    y = 0;
  }
  return new Instruction('hitRect', {
    id,
    points: [
      [x, y],
      [x + width, y + height]
    ]
  });
};

module.exports = hitRect;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let hitRegion = (id, points) => new Instruction('hitRegion', { id, points });

module.exports = hitRegion;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('endImageSmoothingEnabled');

let imageSmoothingEnabled = (value, ...children) => [
  new Instruction('imageSmoothingEnabled', { value }),
  children,
  end
];
module.exports = imageSmoothingEnabled;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

let keycode = __webpack_require__(55);

module.exports = (ctx) => {
  let { canvas } = ctx;

  //mouseData
  canvas[Symbol.for('mouseData')] = {
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    previousX: 0,
    previousY: 0,
    state: false,
    clicked: 0
  };

  let keys = canvas[Symbol.for('keyData')] = {};

  for (let name in keycode.code) {
    if (keycode.code.hasOwnProperty(name)) {
      keys[name] = false;
    }
  }

  //mouse regions
  canvas[Symbol.for('regions')] = [];
  canvas[Symbol.for('mousePoints')] = [];

  //make the canvas receive touch and mouse events
  canvas.tabIndex = 1;

  let mouseMove = (evt) => {
    let { clientX, clientY } = evt;
    //get left and top coordinates
    let { left, top } = canvas.getBoundingClientRect();

    let mouseData = canvas[Symbol.for('mouseData')];

    let point = [clientX - left, clientY - top, mouseData.state];

    mouseData.x = point[0];
    mouseData.y = point[1];

    let points = canvas[Symbol.for('mousePoints')];

    points.push(point);

    //store the last 100 stored positions for hover detection
    if (points.length > 100) {
      points.splice(0, points.length - 100);
    }

    evt.preventDefault();
    return false;
  };

  canvas.addEventListener('mousemove', (evt) => mouseMove(evt));
  canvas.addEventListener('mousedown', (evt) => {
    let { target } = evt;
    if (target === canvas) {
      let mouseData = canvas[Symbol.for('mouseData')];

      if (!mouseData.state) {
        mouseData.clicked += 1;
      }

      mouseData.state = true;
      return mouseMove(evt);
    }
  });
  canvas.addEventListener('mouseup', (evt) => {
    let mouseData = canvas[Symbol.for('mouseData')];
    mouseData.state = false;
    return mouseMove(evt);
  });
  canvas.addEventListener('keydown', (evt) => {
    canvas[Symbol.for('keyData')][keycode(evt.keyCode)] = true;
    evt.preventDefault();
    return false;
  });
  canvas.addEventListener('keyup', (evt) => {
    canvas[Symbol.for('keyData')][keycode(evt.keyCode)] = false;
    evt.preventDefault();
    return false;
  });
};

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = (ctx) => ctx.canvas[Symbol.for('keyData')];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('endLineStyle');

let lineStyle = (value, ...children) => {

  value = value || {};
  var result = {
    lineWidth: null,
    lineCap: null,
    lineJoin: null,
    miterLimit: null,
    lineDash: null,
    lineDashOffset: null
  };

  if (typeof value.lineWidth !== 'undefined') {
    result.lineWidth = value.lineWidth;
  }
  if (typeof value.lineCap !== 'undefined') {
    result.lineCap = value.lineCap;
  }
  if (typeof value.lineJoin !== 'undefined') {
    result.lineJoin = value.lineJoin;
  }
  if (typeof value.miterLimit !== 'undefined') {
    result.miterLimit = value.miterLimit;
  }
  if (typeof value.lineDash !== 'undefined') {
    result.lineDash = value.lineDash || [];
  }
  if (typeof value.lineDashOffset !== 'undefined') {
    result.lineDashOffset = value.lineDashOffset;
  }
  return [
    new Instruction('lineStyle', result),
    children,
    end
  ];
};

module.exports = lineStyle;


/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = (ctx) => ctx.canvas[Symbol.for('mouseData')];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

let moveTo = __webpack_require__(7), lineTo = __webpack_require__(6);

let moveToLineTo = (point, index) => index === 0 ?
  moveTo(point[0], point[1]) :
  lineTo(point[0], point[1]);

module.exports = moveToLineTo;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

let beginPath = __webpack_require__(2)(),
    closePath = __webpack_require__(3)();

let path = (...children) => [
  beginPath,
  children,
  closePath
];

module.exports = path;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let quadraticCurveTo = (cpx, cpy, x, y) => new Instruction('quadraticCurveTo', {
  cpx,
  cpy,
  x,
  y
});

module.exports = quadraticCurveTo;


/***/ },
/* 38 */
/***/ function(module, exports) {

let raf = (func) => {
  let funcCaller = function() {
    requestAnimationFrame(funcCaller);
    func();
  };

  requestAnimationFrame(funcCaller);
};

module.exports = raf;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let rect = (...args) => new Instruction('rect',
  args.length > 2 ?
    { x: args[0], y: args[1], width: args[2], height: args[3] } :
    { x: 0, y: 0, width: args[0], height: args[1] }
);

module.exports = rect;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {


//initialize all the properties

let identity = [1, 0, 0, 1, 0, 0],
  matrix = new Float64Array(identity),
  fillStyleStack = [],
  strokeStyleStack = [],
  lineStyleStack = [],
  textStyleStack = [],
  shadowStyleStack = [],
  globalCompositeOperationStack = [],
  globalAlphaStack = [],
  imageSmoothingEnabledStack = [],
  transformStack = new Float64Array(501 * 6),
  transformStackIndex = 6,
  concat = [].concat,
  supportsEllipse = false;

if (typeof CanvasRenderingContext2D !== 'undefined') {
  supportsEllipse = CanvasRenderingContext2D.prototype.hasOwnProperty('ellipse');
}

//transform points function
const transformPoints = __webpack_require__(1);
const cycleMouseData = __webpack_require__(4);

const increaseTransformStackSize = () => {
  let cache = transformStack;
  transformStack = new Float64Array(transformStack.length + 600); //add 100 more
  transformStack.set(cache);
  return this;
};

transformStack.set(identity);

const PI2 = Math.PI * 2;

let empty = (target) => target && target.splice(0, target.length);

module.exports = (...args) => {
  let children = args.slice(0, -1),
   ctx = args[args.length - 1],
   isTransformDirty = true;

  let regions = ctx.canvas[Symbol.for('regions')],
    mousePoints = ctx.canvas[Symbol.for('mousePoints')],
    extensions = ctx.canvas[Symbol.for('extensions')];

  let cache;

  cycleMouseData(ctx);

  empty(regions);
  empty(mousePoints);

  let len = children.length;

  //flatten children during the loop process to save cpu
  for (let i = 0; i < len; i++) {
    let child = children[i];

    //flattening algorithm
    if (child && child.constructor === Array) {
      children = concat.apply([], children);
      child = children[i];

      //repeat as necessary
      while (child && child.constructor === Array) {
        children = concat.apply([], children);
        child = children[i];
      }

      len = children.length;
    }

    //child must be truthy
    if (!child) {
      continue;
    }

    let { props, type } = child;

    switch(type) {
      case 'transform':
        matrix[0] = transformStack[transformStackIndex - 6];
        matrix[1] = transformStack[transformStackIndex - 5];
        matrix[2] = transformStack[transformStackIndex - 4];
        matrix[3] = transformStack[transformStackIndex - 3];
        matrix[4] = transformStack[transformStackIndex - 2];
        matrix[5] = transformStack[transformStackIndex - 1];

        //increase the index
        transformStackIndex += 6;
        if (transformStackIndex > transformStack.length) {
          increaseTransformStackSize();
        }

        //perform the transform math
        transformStack[transformStackIndex - 6] = //d
          matrix[0] * props[0] + matrix[2] * props[1];
        transformStack[transformStackIndex - 5] = //b
          matrix[1] * props[0] + matrix[3] * props[1];
        transformStack[transformStackIndex - 4] = //c
          matrix[0] * props[2] + matrix[2] * props[3];
        transformStack[transformStackIndex - 3] = //d
          matrix[1] * props[2] + matrix[3] * props[3];
        transformStack[transformStackIndex - 2] = //e
          matrix[0] * props[4] + matrix[2] * props[5] + matrix[4];
        transformStack[transformStackIndex - 1] = //f
          matrix[1] * props[4] + matrix[3] * props[5] + matrix[5];

        isTransformDirty = true;
        continue;

      case "setTransform":
        transformStackIndex += 6;
        if (transformStackIndex > transformStack.length) {
          increaseTransformStackSize();
        }

        transformStack[transformStackIndex - 6] = props[0];//a
        transformStack[transformStackIndex - 5] = props[1];//b
        transformStack[transformStackIndex - 4] = props[2];//c
        transformStack[transformStackIndex - 3] = props[3];//d
        transformStack[transformStackIndex - 2] = props[4];//e
        transformStack[transformStackIndex - 1] = props[5];//f

        isTransformDirty = true;
        continue;

      case "scale":
        matrix[0] = transformStack[transformStackIndex - 6];
        matrix[1] = transformStack[transformStackIndex - 5];
        matrix[2] = transformStack[transformStackIndex - 4];
        matrix[3] = transformStack[transformStackIndex - 3];
        matrix[4] = transformStack[transformStackIndex - 2];
        matrix[5] = transformStack[transformStackIndex - 1];

        transformStackIndex += 6;
        if (transformStackIndex > transformStack.length) {
          increaseTransformStackSize();
        }

        transformStack[transformStackIndex - 6] = matrix[0] * props.x; //a
        transformStack[transformStackIndex - 5] = matrix[1] * props.x; //b
        transformStack[transformStackIndex - 4] = matrix[2] * props.y; //c
        transformStack[transformStackIndex - 3] = matrix[3] * props.y; //d
        transformStack[transformStackIndex - 2] = matrix[4]; //e
        transformStack[transformStackIndex - 1] = matrix[5]; //f

        isTransformDirty = true;
        continue;

      case "translate":
        matrix[0] = transformStack[transformStackIndex - 6];
        matrix[1] = transformStack[transformStackIndex - 5];
        matrix[2] = transformStack[transformStackIndex - 4];
        matrix[3] = transformStack[transformStackIndex - 3];
        matrix[4] = transformStack[transformStackIndex - 2];
        matrix[5] = transformStack[transformStackIndex - 1];

        transformStackIndex += 6;
        if (transformStackIndex > transformStack.length) {
          increaseTransformStackSize();
        }

        transformStack[transformStackIndex - 6] = matrix[0]; //a
        transformStack[transformStackIndex - 5] = matrix[1]; //b
        transformStack[transformStackIndex - 4] = matrix[2]; //c
        transformStack[transformStackIndex - 3] = matrix[3]; //d
        transformStack[transformStackIndex - 2] = matrix[4] + matrix[0] * props.x + matrix[2] * props.y; //e
        transformStack[transformStackIndex - 1] = matrix[5] + matrix[1] * props.x + matrix[3] * props.y; //f

        isTransformDirty = true;
        continue;

      case "rotate":
        matrix[0] = transformStack[transformStackIndex - 6];
        matrix[1] = transformStack[transformStackIndex - 5];
        matrix[2] = transformStack[transformStackIndex - 4];
        matrix[3] = transformStack[transformStackIndex - 3];
        matrix[4] = transformStack[transformStackIndex - 2];
        matrix[5] = transformStack[transformStackIndex - 1];

        transformStackIndex += 6;
        if (transformStackIndex > transformStack.length) {
          increaseTransformStackSize();
        }

        transformStack[transformStackIndex - 6] =
          matrix[0] * props.cos + matrix[2] * props.sin; //a
        transformStack[transformStackIndex - 5] =
          matrix[1] * props.cos + matrix[3] * props.sin; //b
        transformStack[transformStackIndex - 4] =
          matrix[0] * -props.sin + matrix[2] * props.cos; //c
        transformStack[transformStackIndex - 3] =
          matrix[1] * -props.sin + matrix[3] * props.cos; //d
        transformStack[transformStackIndex - 2] = matrix[4]; //e
        transformStack[transformStackIndex - 1] = matrix[5];//f

        isTransformDirty = true;
        continue;

      case "skewX":
        matrix[0] = transformStack[transformStackIndex - 6];
        matrix[1] = transformStack[transformStackIndex - 5];
        matrix[2] = transformStack[transformStackIndex - 4];
        matrix[3] = transformStack[transformStackIndex - 3];
        matrix[4] = transformStack[transformStackIndex - 2];
        matrix[5] = transformStack[transformStackIndex - 1];

        transformStackIndex += 6;
        if (transformStackIndex > transformStack.length) {
          increaseTransformStackSize();
        }

        transformStack[transformStackIndex - 6] = matrix[0]; //a
        transformStack[transformStackIndex - 5] = matrix[1]; //b
        transformStack[transformStackIndex - 4] = //c
          matrix[0] * props.x + matrix[2];
        transformStack[transformStackIndex - 3] = //d
          matrix[1] * props.x + matrix[3];
        transformStack[transformStackIndex - 2] = matrix[4]; //e
        transformStack[transformStackIndex - 1] = matrix[5]; //f

        isTransformDirty = true;
        continue;

      case "skewY":
        matrix[0] = transformStack[transformStackIndex - 6];
        matrix[1] = transformStack[transformStackIndex - 5];
        matrix[2] = transformStack[transformStackIndex - 4];
        matrix[3] = transformStack[transformStackIndex - 3];
        matrix[4] = transformStack[transformStackIndex - 2];
        matrix[5] = transformStack[transformStackIndex - 1];

        transformStackIndex += 6;
        if (transformStackIndex > transformStack.length) {
          increaseTransformStackSize();
        }

        transformStack[transformStackIndex - 6] =
          matrix[0] * 1 + matrix[2] * props.y; //a
        transformStack[transformStackIndex - 5] =
          matrix[1] * 1 + matrix[3] * props.y; //b
        transformStack[transformStackIndex - 4] = matrix[2]; //c
        transformStack[transformStackIndex - 3] = matrix[3]; //d
        transformStack[transformStackIndex - 2] = matrix[4]; //e
        transformStack[transformStackIndex - 1] = matrix[5]; //f

        isTransformDirty = true;
        continue;

      case "restore":
        transformStackIndex -= 6;

        isTransformDirty = true;
        continue;
    }

    if (isTransformDirty) {
      isTransformDirty = false;
      ctx.setTransform(
        transformStack[transformStackIndex - 6],
        transformStack[transformStackIndex - 5],
        transformStack[transformStackIndex - 4],
        transformStack[transformStackIndex - 3],
        transformStack[transformStackIndex - 2],
        transformStack[transformStackIndex - 1]
      );
    }


    switch(type) {
      case 'fillRect':
        ctx.fillRect(props.x, props.y, props.width, props.height);
        continue;

      case 'strokeRect':
        ctx.strokeRect(props.x, props.y, props.width, props.height);
        continue;

      case 'clearRect':
        ctx.clearRect(props.x, props.y, props.width, props.height);
        continue;

      case 'rect':
        ctx.rect(props.x, props.y, props.width, props.height);
        continue;

      case 'fillStyle':
        fillStyleStack.push(ctx.fillStyle);
        ctx.fillStyle = props.value;
        continue;

      case 'strokeStyle':
        strokeStyleStack.push(ctx.strokeStyle);
        ctx.strokeStyle = props.value;
        continue;

      case 'endFillStyle':
        ctx.fillStyle = fillStyleStack.pop();
        continue;

      case 'endStrokeStyle':
        ctx.strokeStyle = strokeStyleStack.pop();
        continue;

      case 'lineStyle':
        lineStyleStack.push({
          lineWidth: ctx.lineWidth,
          lineCap: ctx.lineCap,
          lineJoin: ctx.lineJoin,
          miterLimit: ctx.miterLimit,
          lineDash: ctx.getLineDash(),
          lineDashOffset: ctx.lineDashOffset
        });

        if (props.lineWidth !== null) {
          ctx.lineWidth = props.lineWidth;
        }
        if (props.lineCap !== null) {
          ctx.lineCap = props.lineCap;
        }
        if (props.lineJoin !== null) {
          ctx.lineJoin = props.lineJoin;
        }
        if (props.miterLimit !== null) {
          ctx.miterLimit = props.miterLimit;
        }
        if (props.lineDash !== null) {
          ctx.setLineDash(props.lineDash);
        }

        if (props.lineDashOffset !== null) {
          ctx.lineDashOffset = props.lineDashOffset;
        }
        continue;

      case 'endLineStyle':
        cache = lineStyleStack.pop();
        ctx.lineWidth = cache.lineWidth;
        ctx.lineCap = cache.lineCap;
        ctx.lineJoin = cache.lineJoin;
        ctx.miterLimit = cache.miterLimit;
        ctx.setLineDash(cache.lineDash);
        ctx.lineDashOffset = cache.lineDashOffset;

        continue;

      case 'textStyle':
        textStyleStack.push({
          font: ctx.font,
          textAlign: ctx.textAlign,
          textBaseline: ctx.textBaseline,
          direction: ctx.direction
        });
        if (props.font !== null) {
          ctx.font = props.font;
        }
        if (props.textAlign !== null) {
          ctx.textAlign = props.textAlign;
        }
        if (props.textBaseline !== null) {
          ctx.textBaseline = props.textBaseline;
        }
        if (props.direction !== null) {
          ctx.direction = props.direction;
        }
        continue;

      case 'endTextStyle':
        cache = textStyleStack.pop();
        ctx.font = cache.font;
        ctx.textAlign = cache.textAlign;
        ctx.textBaseline = cache.textBaseline;
        ctx.direction = cache.direction;
        continue;

      case 'shadowStyle':
        shadowStyleStack.push({
          shadowBlur: ctx.shadowBlur,
          shadowColor: ctx.shadowColor,
          shadowOffsetX: ctx.shadowOffsetX,
          shadowOffsetY: ctx.shadowOffsetY
        });
        if (props.shadowBlur !== null) {
          ctx.shadowBlur = props.shadowBlur;
        }
        if (props.shadowColor !== null) {
          ctx.shadowColor = props.shadowColor;
        }
        if (props.shadowOffsetX !== null) {
          ctx.shadowOffsetX = props.shadowOffsetX;
        }
        if (props.shadowOffsetY !== null) {
          ctx.shadowOffsetY = props.shadowOffsetY;
        }
        continue;

      case 'endShadowStyle':
        cache = shadowStyleStack.pop();
        ctx.shadowBlur = cache.shadowBlur;
        ctx.shadowColor = cache.shadowColor;
        ctx.shadowOffsetX = cache.shadowOffsetX;
        ctx.shadowOffsetY = cache.shadowOffsetY;
        continue;

      case 'strokeText':
        if (props.maxWidth) {
          ctx.strokeText(props.text, props.x, props.y, props.maxWidth);
          continue;
        }
        ctx.strokeText(props.text, props.x, props.y);
        continue;

      case 'fillText':
        if (props.maxWidth) {
          ctx.fillText(props.text, props.x, props.y, props.maxWidth);
          continue;
        }
        ctx.fillText(props.text, props.x, props.y);
        continue;

      case 'drawImage':
        ctx.drawImage(props.img, props.dx, props.dy);
        continue;

      case 'drawImageSize':
        ctx.drawImage(props.img, props.dx, props.dy, props.dWidth, props.dHeight);
        continue;

      case 'drawImageSource':
        ctx.drawImage(props.img, props.sx, props.sy, props.sWidth, props.sHeight, props.dx, props.dy, props.dWidth, props.dHeight);
        continue;

      case 'strokeArc':
        ctx.beginPath();
        ctx.arc(props.x, props.y, props.r, props.startAngle, props.endAngle, props.counterclockwise);
        ctx.closePath();
        ctx.stroke();
        continue;

      case 'fillArc':
        ctx.beginPath();
        ctx.arc(props.x, props.y, props.r, props.startAngle, props.endAngle, props.counterclockwise);
        ctx.closePath();
        ctx.fill();
        continue;

      case 'moveTo':
        ctx.moveTo(props.x, props.y);
        continue;

      case 'lineTo':
        ctx.lineTo(props.x, props.y);
        continue;

      case 'bezierCurveTo':
        ctx.bezierCurveTo(props.cp1x, props.cp1y, props.cp2x, props.cp2y, props.x, props.y);
        continue;

      case 'quadraticCurveTo':
        ctx.quadraticCurveTo(props.cpx, props.cpy, props.x, props.y);
        continue;

      case 'arc':
        ctx.arc(props.x, props.y, props.r, props.startAngle, props.endAngle, props.counterclockwise);
        continue;

      case 'arcTo':
        ctx.arcTo(props.x1, props.y1, props.x2, props.y2, props.r);
        continue;

      case 'ellipse':
        if (supportsEllipse) {
          ctx.ellipse(
            props.x,
            props.y,
            props.radiusX,
            props.radiusY,
            props.rotation,
            props.startAngle,
            props.endAngle,
            props.anticlockwise
          );
          continue;
        }
        ctx.save();
        ctx.translate(props.x, props.y);
        ctx.rotate(props.rotation);
        ctx.scale(props.radiusX, props.radiusY);
        ctx.arc(0, 0, 1, props.startAngle, props.endAngle, props.anticlockwise);
        ctx.restore();
        continue;

      case 'globalCompositeOperation':
        globalCompositeOperationStack.push(ctx.globalCompositeOperation);
        ctx.globalCompositeOperation = props.value;
        continue;

      case 'endGlobalCompositeOperation':
        ctx.globalCompositeOperation = globalCompositeOperationStack.pop();
        continue;

      case 'fill':
        ctx.fill();
        continue;

      case 'stroke':
        ctx.stroke();
        continue;

      case 'beginClip':
       ctx.save();
       ctx.beginPath();
       continue;

      case 'clip':
        ctx.clip();
        continue;

      case 'endClip':
        ctx.restore();
        continue;

      case 'beginPath':
        ctx.beginPath();
        continue;

      case 'closePath':
        ctx.closePath();
        continue;

      case 'globalAlpha':
        globalAlphaStack.push(ctx.globalAlpha);
        ctx.globalAlpha *= props.value;
        continue;

      case 'endGlobalAlpha':
        ctx.globalAlpha = globalAlphaStack.pop();
        continue;

      case 'hitRect':
        if (regions) {
          cache = [
            transformStack[transformStackIndex - 6],
            transformStack[transformStackIndex - 5],
            transformStack[transformStackIndex - 4],
            transformStack[transformStackIndex - 3],
            transformStack[transformStackIndex - 2],
            transformStack[transformStackIndex - 1]
          ];

          regions.push({
            id: props.id,
            points: props.points,
            matrix: cache,
            //rectangle!
            polygon: false,
            hover: false,
            touched: false,
            clicked: false
          });
        }
        continue;

      case 'hitRegion':
        if (regions) {
          cache = [
            transformStack[transformStackIndex - 6],
            transformStack[transformStackIndex - 5],
            transformStack[transformStackIndex - 4],
            transformStack[transformStackIndex - 3],
            transformStack[transformStackIndex - 2],
            transformStack[transformStackIndex - 1]
          ];

          regions.push({
            id: props.id,
            points: props.points,
            matrix: cache,
            polygon: true,
            hover: false,
            touched: false,
            clicked: false
          });
        }
        continue;

      case 'imageSmoothingEnabled':
        imageSmoothingEnabledStack.push(ctx.imageSmoothingEnabled);
        ctx.imageSmoothingEnabled = props.value;
        continue;

      case 'endImageSmoothingEnabled':
        ctx.imageSmoothingEnabled = imageSmoothingEnabledStack.pop();
        continue;

      default:
        if (extensions && extensions[type]) {
          extensions[type](props, ctx);
        }
        continue;
    }
  }
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

let setTransform = __webpack_require__(9);

let resetTransform = (...children) => setTransform([1, 0, 0, 1, 0, 0], children);

module.exports = resetTransform;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('restore');

let rotate = (r, ...children) => [
  new Instruction('rotate', { cos: Math.cos(r), sin: Math.sin(r) }),
  children,
  end
];

module.exports = rotate;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('restore');

let scale = (x, y, ...children) => {
  if (typeof y !== 'number') {
    children = [y].concat(children);
    y = x;
  }

  return [
    new Instruction('scale', { x, y }),
    children,
    end
  ];
};

module.exports = scale;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('endShadowStyle');

let shadowStyle = (value, ...children) => {
  value = value || {};
  var result = {
    shadowBlur: null,
    shadowColor: null,
    shadowOffsetX: null,
    shadowOffsetY: null
  };

  if (typeof value.shadowBlur !== 'undefined') {
    result.shadowBlur = value.shadowBlur;
  }
  if (typeof value.shadowColor !== 'undefined') {
    result.shadowColor = value.shadowColor;
  }
  if (typeof value.shadowOffsetX !== 'undefined') {
    result.shadowOffsetX = value.shadowOffsetX;
  }
  if (typeof value.direction !== 'undefined') {
    result.shadowOffsetY = value.shadowOffsetY;
  }

  return [
    new Instruction('shadowStyle', result),
    children,
    end
  ];
};

module.exports = shadowStyle;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('restore');

let skewX = (x, ...children) => [
  new Instruction('skewX', { x: Math.tan(x) }),
  children,
  end
];

module.exports = skewX;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('restore');

let skewY = (y, ...children) => [
  new Instruction('skewY', { y: Math.tan(y) }),
  children,
  end
];

module.exports = skewY;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let cache = new Instruction('stroke');

let stroke = () => cache;
module.exports = stroke;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0),
    pi2 = Math.PI * 2;

let strokeArc = (...args) => {
  let [x, y, r, startAngle, endAngle, counterclockwise] = args;
  let props = { x: 0, y: 0, r: x, startAngle: 0, endAngle: pi2, counterclockwise: false };


  if (args.length > 3) {
    props.startAngle = startAngle;
    props.endAngle = endAngle;
    props.counterclockwise = !!counterclockwise;
  }

  if (args.length > 1){
    props.x = x;
    props.y = y;
    props.r = r;
  }

  return new Instruction("strokeArc",  props);
};

module.exports = strokeArc;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let strokeRect = (...args) => new Instruction('strokeRect',
  args.length > 2 ?
    { x: args[0], y: args[1], width: args[2], height: args[3] } :
    { x: 0, y: 0, width: args[0], height: args[1] }
);

module.exports = strokeRect;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('endStrokeStyle');

let strokeStyle = (value, ...children) => [
  new Instruction('strokeStyle', { value }),
  children,
  end
];

module.exports = strokeStyle;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);

let strokeText = (...args) => {
  let [text, x, y, maxWidth] = args;

  if (args.length < 4) {
    maxWidth = null;
  }
  if (args.length < 3) {
    x = 0;
    y = 0;
  }
  return new Instruction('strokeText', {
    text,
    x,
    y,
    maxWidth
  });
};

module.exports = strokeText;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('endTextStyle');

let textStyle = (value, ...children) => {
  value = value || {};
  var result = {
    font: null,
    textAlign: null,
    textBaseline: null,
    direction: null
  };

  if (typeof value.font !== 'undefined') {
    result.font = value.font;
  }
  if (typeof value.textAlign !== 'undefined') {
    result.textAlign = value.textAlign;
  }
  if (typeof value.textBaseline !== 'undefined') {
    result.textBaseline = value.textBaseline;
  }
  if (typeof value.direction !== 'undefined') {
    result.direction = value.direction;
  }

  return [
    new Instruction('textStyle', result),
    children,
    end
  ];
};

module.exports = textStyle;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('restore');

let transform = (values, ...children) => {
  return [
    new Instruction('transform',[
      values[0],
      values[1],
      values[2],
      values[3],
      values[4],
      values[5]
    ]),
    children,
    end
  ];
};


module.exports = transform;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

let Instruction = __webpack_require__(0);
let end = new Instruction('restore');

let translate = (x, y, ...children) => [
  new Instruction('translate', { x: x, y: y }),
  children,
  end
];

module.exports = translate;


/***/ },
/* 55 */
/***/ function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = function (point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  'activeRegions': __webpack_require__(10),
  'arc': __webpack_require__(11),
  'arcTo': __webpack_require__(12),
  'beginPath': __webpack_require__(2),
  'bezierCurveTo': __webpack_require__(13),
  'clearRect': __webpack_require__(14),
  'clip': __webpack_require__(15),
  'clipPath': __webpack_require__(16),
  'closePath': __webpack_require__(3),
  'createRegularPolygon': __webpack_require__(17),
  'cycleMouseData': __webpack_require__(4),
  'drawImage': __webpack_require__(18),
  'ellipse': __webpack_require__(19),
  'extend': __webpack_require__(20),
  'fill': __webpack_require__(21),
  'fillArc': __webpack_require__(22),
  'fillRect': __webpack_require__(23),
  'fillStyle': __webpack_require__(24),
  'fillText': __webpack_require__(25),
  'globalAlpha': __webpack_require__(26),
  'globalCompositeOperation': __webpack_require__(27),
  'hitRect': __webpack_require__(28),
  'hitRegion': __webpack_require__(29),
  'imageSmoothingEnabled': __webpack_require__(30),
  'initialize': __webpack_require__(31),
  'Instruction': __webpack_require__(0),
  'invertMatrix': __webpack_require__(5),
  'keyData': __webpack_require__(32),
  'lineStyle': __webpack_require__(33),
  'lineTo': __webpack_require__(6),
  'mouseData': __webpack_require__(34),
  'moveTo': __webpack_require__(7),
  'moveToLineTo': __webpack_require__(35),
  'path': __webpack_require__(36),
  'pointInRect': __webpack_require__(8),
  'quadraticCurveTo': __webpack_require__(37),
  'raf': __webpack_require__(38),
  'rect': __webpack_require__(39),
  'render': __webpack_require__(40),
  'resetTransform': __webpack_require__(41),
  'rotate': __webpack_require__(42),
  'scale': __webpack_require__(43),
  'setTransform': __webpack_require__(9),
  'shadowStyle': __webpack_require__(44),
  'skewX': __webpack_require__(45),
  'skewY': __webpack_require__(46),
  'stroke': __webpack_require__(47),
  'strokeArc': __webpack_require__(48),
  'strokeRect': __webpack_require__(49),
  'strokeStyle': __webpack_require__(50),
  'strokeText': __webpack_require__(51),
  'textStyle': __webpack_require__(52),
  'transform': __webpack_require__(53),
  'transformPoints': __webpack_require__(1),
  'translate': __webpack_require__(54)
};

/***/ }
/******/ ]);
});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

let z = -1;
let e2d = __webpack_require__(0);
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
    let ease = __webpack_require__(17)[this.ease];
    this.ratio = 1;
    if (Date.now() <= this.start + this.duration) {
      this.ratio = ease(Date.now() - this.start, this.duration);
    }
    this.dirty = this.dirty || this.previousRatio !== this.ratio;
    this.previousRatio = this.ratio;
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
    return e2d.translate(x, y, e2d.rotate(rot, e2d.scale(sx, sy, e2d.translate(-cx, -cy, e2d.globalAlpha(a, children)))));
  }
  checkComputed(value) {
    return value && value._type === 'computed' ? (value.unit === 'ah' ? this.width : value.unit === 'ah' ? this.height : void 0) * value.value * 0.01 : value;
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

let Showable = __webpack_require__(1);
let e2d = __webpack_require__(0);

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
    });
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
    this.texture.src = __webpack_require__(15)("./" + actor + '.png');
    this.texture.onload = () => this.ready = true;
    this.definition = __webpack_require__(16)("./" + actor + '.json');
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
    return super.render(e2d.drawImage(this.texture, mood.x, mood.y, width, height, 0, 0, width, height));
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
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {
      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      this._events.maxListeners = conf.maxListeners !== undefined ? conf.maxListeners : defaultMaxListeners;
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);
      conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    } else {
      this._events.maxListeners = defaultMaxListeners;
    }
  }

  function logPossibleMemoryLeak(count, eventName) {
    var errorMsg = '(node) warning: possible EventEmitter memory ' +
        'leak detected. %d listeners added. ' +
        'Use emitter.setMaxListeners() to increase limit.';

    if(this.verboseMemoryLeak){
      errorMsg += ' Event name: %s.';
      console.error(errorMsg, count, eventName);
    } else {
      console.error(errorMsg, count);
    }

    if (console.trace){
      console.trace();
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    this.verboseMemoryLeak = false;
    configure.call(this, conf);
  }
  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name !== undefined) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else {
          if (typeof tree._listeners === 'function') {
            tree._listeners = [tree._listeners];
          }

          tree._listeners.push(listener);

          if (
            !tree._listeners.warned &&
            this._events.maxListeners > 0 &&
            tree._listeners.length > this._events.maxListeners
          ) {
            tree._listeners.warned = true;
            logPossibleMemoryLeak.call(this, tree._listeners.length, name);
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    if (n !== undefined) {
      this._events || init.call(this);
      this._events.maxListeners = n;
      if (!this._conf) this._conf = {};
      this._conf.maxListeners = n;
    }
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      fn.apply(this, arguments);
    }

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) {
        return false;
      }
    }

    var al = arguments.length;
    var args,l,i,j;
    var handler;

    if (this._all && this._all.length) {
      handler = this._all.slice();
      if (al > 3) {
        args = new Array(al);
        for (j = 0; j < al; j++) args[j] = arguments[j];
      }

      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this, type);
          break;
        case 2:
          handler[i].call(this, type, arguments[1]);
          break;
        case 3:
          handler[i].call(this, type, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
    }

    if (this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
      if (typeof handler === 'function') {
        this.event = type;
        switch (al) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          args = new Array(al - 1);
          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
          handler.apply(this, args);
        }
        return true;
      } else if (handler) {
        // need to make copy of handlers because list can change in the middle
        // of emit call
        handler = handler.slice();
      }
    }

    if (handler && handler.length) {
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this);
          break;
        case 2:
          handler[i].call(this, arguments[1]);
          break;
        case 3:
          handler[i].call(this, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
      return true;
    } else if (!this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }

    return !!this._all;
  };

  EventEmitter.prototype.emitAsync = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
        if (!this._events.newListener) { return Promise.resolve([false]); }
    }

    var promises= [];

    var al = arguments.length;
    var args,l,i,j;
    var handler;

    if (this._all) {
      if (al > 3) {
        args = new Array(al);
        for (j = 1; j < al; j++) args[j] = arguments[j];
      }
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(this._all[i].call(this, type));
          break;
        case 2:
          promises.push(this._all[i].call(this, type, arguments[1]));
          break;
        case 3:
          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
          break;
        default:
          promises.push(this._all[i].apply(this, args));
        }
      }
    }

    if (this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      switch (al) {
      case 1:
        promises.push(handler.call(this));
        break;
      case 2:
        promises.push(handler.call(this, arguments[1]));
        break;
      case 3:
        promises.push(handler.call(this, arguments[1], arguments[2]));
        break;
      default:
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
        promises.push(handler.apply(this, args));
      }
    } else if (handler && handler.length) {
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(handler[i].call(this));
          break;
        case 2:
          promises.push(handler[i].call(this, arguments[1]));
          break;
        case 3:
          promises.push(handler[i].call(this, arguments[1], arguments[2]));
          break;
        default:
          promises.push(handler[i].apply(this, args));
        }
      }
    } else if (!this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        return Promise.reject(arguments[1]); // Unhandled 'error' event
      } else {
        return Promise.reject("Uncaught, unspecified 'error' event.");
      }
    }

    return Promise.all(promises);
  };

  EventEmitter.prototype.on = function(type, listener) {
    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if (this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else {
      if (typeof this._events[type] === 'function') {
        // Change to array.
        this._events[type] = [this._events[type]];
      }

      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (
        !this._events[type].warned &&
        this._events.maxListeners > 0 &&
        this._events[type].length > this._events.maxListeners
      ) {
        this._events[type].warned = true;
        logPossibleMemoryLeak.call(this, this._events[type].length, type);
      }
    }

    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {
    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if (!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }

        this.emit("removeListener", type, listener);

        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }

        this.emit("removeListener", type, listener);
      }
    }

    function recursivelyGarbageCollect(root) {
      if (root === undefined) {
        return;
      }
      var keys = Object.keys(root);
      for (var i in keys) {
        var key = keys[i];
        var obj = root[key];
        if ((obj instanceof Function) || (typeof obj !== "object") || (obj === null))
          continue;
        if (Object.keys(obj).length > 0) {
          recursivelyGarbageCollect(root[key]);
        }
        if (Object.keys(obj).length === 0) {
          delete root[key];
        }
      }
    }
    recursivelyGarbageCollect(this.listenerTree);

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          this.emit("removeListenerAny", fn);
          return this;
        }
      }
    } else {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++)
        this.emit("removeListenerAny", fns[i]);
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if (this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else if (this._events) {
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if (this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenerCount = function(type) {
    return this.listeners(type).length;
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (true) {
     // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return EventEmitter;
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = EventEmitter;
  }
  else {
    // Browser global.
    window.EventEmitter2 = EventEmitter;
  }
}();


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Immutable = factory());
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./act-1/test.js": 64,
	"./main.js": 65
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5;


/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = function* menu(_interpreter) {
  _interpreter.push();

  let _cache;

  let test = false;
  let newGame = new _interpreter.Button({
    id: 'new-game',
    x: 100,
    y: 100,
    text: 'New Game',
    onclick: function* () {
      _interpreter.queue.push('./main.js'), void 0;
      test = true;
    }
  }, _interpreter.theme);

  newGame = _interpreter.renderer.find(newGame.id) || newGame, Object.assign(newGame.last, newGame.position), _interpreter.show(newGame, {
    a: 1
  }), newGame.start = Date.now(), newGame.hiding = false, newGame;

  yield ['pause', void 0], void 0;

  while (!test) {
    yield ['pause', void 0];
  }

  return _interpreter.pop(), _interpreter.returnValue = test, ['continue', void 0];

  _interpreter.pop();
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

let Showable = __webpack_require__(1);
let e2d = __webpack_require__(0);
module.exports = class Background extends Showable {
  constructor(props) {
    super(props);
    this.texture = props.texture;
    this.type = 'background';
  }
  update() {
    return super.update();
  }
  render() {
    return super.render(e2d.drawImage(this.texture));
  }
  serialize() {
    return super.serialize({
      texture: this.texture
    });
  }
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

let Showable = __webpack_require__(1);
let e2d = __webpack_require__(0);

module.exports = class Button extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      type: 'button',
      texture: null,
      previousTexture: null,
      selected: false,
      previousSelected: false,
      theme: theme,
      text: '',
      onclick: function* () {},
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
    if (this.active !== this.previousActive) {
      this.dirty = true;
    }
    this.previousActive = this.active;

    if (this.previousSelected !== this.selected) {
      this.dirty = true;
    }
    this.previousSelected = this.selected;

    this.texture = this.theme.button[(this.selected ? '' : 'un') + 'selected' + (this.active && this.hover ? 'Active' : '')];
    if (this.texture !== this.previousTexture) {
      this.dirty = true;
    }
    this.previousTexture = this.texture;
    this.pointer = this.hover;
    return super.update();
  }
  render() {
    return super.render(e2d.hitRect(this.id, this.texture.width, this.texture.height), e2d.drawImage(this.texture), e2d.translate(this.texture.width * 0.5, this.texture.height * 0.5, e2d.textStyle({
      font: this.theme.controlFont,
      textAlign: 'center',
      textBaseline: 'middle'
    }, e2d.fillStyle(this.selected ? this.theme.controlTextSelectedColor : this.theme.controlTextColor, e2d.fillText(this.text)))));
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

let Showable = __webpack_require__(1);
let e2d = __webpack_require__(0);

module.exports = class Checkbox extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      type: 'checkbox',
      texture: null,
      previousTexture: null,
      checked: false,
      previousChecked: false,
      theme: theme,
      text: ''
    });
    this.load(props);
  }
  load(props) {
    this.checked = props.hasOwnProperty('checked') ? props.checked : this.checked;
    this.text = props.hasOwnProperty('text') ? props.text : this.text;
  }
  update() {
    if (!this.theme.ready) {
      return;
    }
    if (this.active !== this.previousActive) {
      this.dirty = true;
    }
    this.previousActive = this.active;

    if (this.previousChecked !== this.checked) {
      this.dirty = true;
    }
    this.previousChecked = this.checked;

    this.texture = this.theme.checkbox[(this.checked ? '' : 'un') + 'checked' + (this.active && this.hover ? 'Active' : '')];

    if (this.texture !== this.previousTexture) {
      this.dirty = true;
    }
    this.previousTexture = this.texture;
    this.pointer = this.hover;
    return super.update();
  }
  render() {
    return super.render(e2d.drawImage(this.texture), e2d.hitRect(this.id, this.texture.width, this.texture.height), e2d.translate(this.texture.width + this.theme.checkbox.textPadding, this.texture.height * 0.5, e2d.textStyle({
      font: this.theme.controlFont,
      textBaseline: 'middle'
    }, e2d.fillStyle(this.theme.controlTextColor, e2d.fillText(this.text)))));
  }
  serialize() {
    return super.serialize({
      checked: this.checked,
      text: this.text
    });
  }
  deserialize(props) {
    this.load(props);
    super.deserialize(props);
  }
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

let Character = __webpack_require__(2);
module.exports = class NovelBackground extends Character {
  constructor(props) {
    props.actor = 'Background';
    super(props);
    Object.assign(this, {
      type: 'novelBackground'
    });
  }
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventemitter2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_eventemitter2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);



let history = __webpack_require__(20);
module.exports = class Interpreter extends __WEBPACK_IMPORTED_MODULE_0_eventemitter2___default.a {
  constructor(renderer, theme) {
    super();
    Object.assign(this, {
      script: null,
      queue: [],
      menus: __webpack_require__(22),
      state: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])(),
      renderer,
      theme,
      menu: [
        __webpack_require__(6)(this)
      ],
      wait: Date.now(),
      waiting: false,
      Button: __webpack_require__(8),
      Character: __webpack_require__(2),
      Checkbox: __webpack_require__(9),
      NovelBackground: __webpack_require__(10),
      Choice: null,
      historyEnabled: false
    })
    this.renderer.on('click', (showable) => {
      if (showable.onclick) {
        this.menu.push(showable.onclick());
      }
    });
    this.renderer.on('mouse-down', () => {
      if (!this.renderer.active) {
        this.advance();
      }
    })
    this.renderer.on('check-waiting', () => {
      if (this.waiting && this.wait <= Date.now()) {
        return this.advance();
      }
    });
    this.renderer.on('advance', () => this.advance());
    this.renderer.emit('push');
    this.advance();
  }
  show(item, props) {
    this.renderer.emit('add', item);
    for(let name in props) {
      if (item.hasOwnProperty(name)) {
        item[name] = props[name];
      }
      if (item.position.hasOwnProperty(name)) {
        item.position[name] = props[name];
      }
    }
  }
  push() {
    this.renderer.emit('push');
  }
  pop() {
    this.renderer.emit('pop');
  }
  advance() {
    if (this.renderer.active) {
      return;
    }

    if (this.waiting) {
      if (this.wait >= Date.now()) {
        return;
      }
      this.waiting = false;
    }
    let target = this.menu.length > 0 ? this.menu[this.menu.length - 1] : this.script;

    let { done, value } = target.next();
    if (done) {
      //renderer.emit('pop');
      if (this.menu.length > 0) {
        this.menu.pop();
      }
      if (this.menu.length === 0) {
        if (this.queue.length === 0) {
          console.log("exit");
        } else {
          this.state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"])();
          this.script = history(this, [], this.queue.splice(0, this.queue.length));
        }
      }
    }
    let [type, arg] = value && value.constructor === Array && value.length === 2 ? value : ['continue', null];

    switch(type) {
      case 'continue':
        return this.advance();
      case 'pause':
        return;
      case 'push':
        this.renderer.emit('push');
        return this.advance();
      case 'load':
        this.menu.splice(0, this.menu.length);
        //get the state and load it
        this.script = history(this, [], this.queue.splice(0, this.queue.length), Immutable.map());
        return this.advance();
    }

  }
};

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = {
	"name": "e2dvn",
	"version": "1.0.0",
	"description": "A Visual Novel Framework for JS developers.",
	"main": "index.html",
	"scripts": {
		"debug": "npm run sprites && npm run dev-server",
		"dev-server": "node ./build/dev-server",
		"release": "npm run sprites && npm run webpack && npm run nw",
		"sprites": "node ./build/spritesheet-assembler",
		"webpack": "node ./build/webpack",
		"nw": "node ./build/nw",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "Joshua <tenner.joshua@gmail.com>",
	"license": "ISC",
	"devDependencies": {
		"async": "^2.1.4",
		"babel-core": "^6.21.0",
		"babel-loader": "^6.2.10",
		"babel-plugin-e2dx": "github:e2d/e2dx",
		"babel-plugin-minify-dead-code-elimination": "^0.1.1",
		"babel-plugin-transform-inline-functions": "^1.0.1",
		"babel-preset-es2015": "^6.18.0",
		"bin-packing": "git+https://github.com/jtenner/bin-packing.git",
		"crel": "^3.0.0",
		"e2d": "github:e2d/e2d",
		"ease-functions": "0.0.1",
		"eventemitter2": "^2.2.1",
		"express": "^4.14.0",
		"file-loader": "^0.9.0",
		"fontfaceobserver": "^2.0.7",
		"get-pixels": "^3.3.0",
		"glob": "^7.1.1",
		"imagemin-webpack-plugin": "^1.4.4",
		"immutable": "^3.8.1",
		"json-loader": "^0.5.4",
		"library-src-plugin": "^1.0.2",
		"nw-builder": "^3.1.2",
		"save-pixels": "^2.3.4",
		"webpack": "^2.2.0-rc.3",
		"zeros": "^1.0.0"
	},
	"window": {
		"width": 800,
		"height": 600,
		"resizable": false,
		"title": "Gensokyo Beat Street"
	},
	"story": {
		"name": "Gensokyo Beat Street",
		"theme": "hexagon"
	},
	"dependencies": {}
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./hexagon/options.js": 66
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 13;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_e2d__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_e2d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_e2d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crel__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_eventemitter2__);


let { window: { width, height, title } } = __webpack_require__(61);
let Background = __webpack_require__(7);
let sortFunc = (left, right) => left.position.z < right.position.z ? -1 : 1;


let types = {
  'background': __webpack_require__(7),
  'button': __webpack_require__(8),
  'character': __webpack_require__(2),
  'checkbox': __webpack_require__(9),
  'novelBackground': __webpack_require__(10),
  'textarea': __webpack_require__(63)
};

module.exports = class Renderer extends __WEBPACK_IMPORTED_MODULE_2_eventemitter2___default.a {
  constructor(theme) {
    super();
    this.theme = theme;
    this.showables = [];
    this.statics = [];
    __WEBPACK_IMPORTED_MODULE_1_crel___default()(document.body, { style: 'margin: 0; padding: 0; ' }, __WEBPACK_IMPORTED_MODULE_1_crel___default()('div', { style: `margin: 0 auto; width: ${ width }px; height: ${ height }px;` }, this.canvas = __WEBPACK_IMPORTED_MODULE_1_crel___default()('canvas', { width, height })));

    this.ctx = this.canvas.getContext('2d');
    __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.initialize(this.ctx);

    this.onAny((event, value) => this[event] && this[event](value));

    this.previousMouseState = false;

    this.stack = [];

    this.mouseData = null;
    this.regions = null;
    this.active = null;
    this.story = __webpack_require__(5);
    let Textarea = types.textarea;
    this.tb = new Textarea({
      a: 0,
      y: height
    }, theme);
    this.theme.textarea.texture.addEventListener('load', () => {
      this.tb.position.cy = this.tb.last.cy = this.theme.textarea.texture.height;
    });

    this.width = width;

    this.height = height;

    let self = this;
    return __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.raf(function () {
      self.emit('check-waiting');
      self.update();
      self.render();
    });
  }
  add(showable) {
    return !this.showables.includes(showable) ? this.showables.push(showable) : void 0;
  }
  remove(showable) {
    if (this.showables.includes(showable)) {
      this.showables.splice(this.showables.indexOf(showable), 1);
    }
  }
  push() {
    this.stack.push({
      showables: this.showables
    });
    let img = new Image();
    img.src = this.canvas.toDataURL();
    this.showables = [new Background({ id: 'bg', texture: img })];
  }
  pop() {
    this.showables = this.stack.pop().showables;
  }
  update() {
    if (!this.theme.ready) {
      return;
    }
    let showables = this.showables.concat(this.statics);
    showables.sort(sortFunc);

    this.mouseData = __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.mouseData(this.ctx);
    this.regions = __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.activeRegions(this.ctx);

    let i,
        showable,
        pointer = false;

    for (i = 0; i < showables.length; i++) {
      showable = showables[i];
      showable.hover = !!this.regions[showable.id];
    }

    //click event
    if (this.mouseData.clicked) {
      let willAdvance = true;
      for (i = 0; i < showables.length; i++) {
        showable = showables[i];
        if (this.regions[showable.id]) {
          showable.active = true;
          this.active = showable;
          this.emit('mousedown', showable);
          willAdvance = false;
        }
      }
      if (willAdvance) {
        this.emit('advance');
      }
    }

    // mouseUp
    if (this.previousMouseState && !this.mouseData.state) {
      let willAdvance = false;
      for (i = 0; i < showables.length; i++) {
        showable = showables[i];
        if (showable.active && showable.hover) {
          this.emit('click', showable);
          willAdvance = true;
        }
        if (showable.active) {
          showable.active = false;
        }
      }
      this.active = null;
      if (willAdvance) {
        this.emit('advance');
      }
    }

    for (i = 0; i < showables.length; i++) {
      let showable = showables[i];
      showable.update();
      if (showable.hiding && showable.ratio === 1) {
        let index = this.showables.indexOf(showable);
        if (index !== -1) {
          this.showables.splice(index, 1);
          showables.splice(i, 1);
          i -= 1;
        }
        continue;
      }
      pointer = pointer || showables[i].pointer;
    }

    this.previousMouseState = this.mouseData.state;
    this.canvas.style.cursor = pointer ? 'pointer' : 'default';
    this.renderables = showables;
  }
  render() {
    if (!this.theme.ready) {
      return;
    }
    let result = [],
        showable;
    for (let i = 0; i < this.renderables.length; i++) {
      showable = this.renderables[i];
      result.push(showable.dirty ? (showable.dirty = false, showable.view = showable.render()) : showable.view);
    }

    return __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.render(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.clearRect(this.canvas.width, this.canvas.height), result, this.ctx);
  }
  getState() {
    return this.renderables.reduce((index, r) => index[r.id] = r.serialize(), {});
  }
  find(id) {
    for (let i = 0; i < this.showables.length; i++) {
      if (this.showables[i].id === id) {
        return this.showables[i];
      }
    }
  }
  setState(state) {
    let index = {};
    for (let i = 0; i < this.showables.length; i++) {
      let showable = this.showables[i];
      if (state.hasOwnProperty(showable.id)) {
        showable.deserialize(state[showable.id]);
      } else {
        this.showables.splice(i, 1);
        i -= 1;
      }
      index[showable.id] = true;
    }

    let ids = Object.getOwnPropertyNames(state);

    for (let i = 0; i < ids.length; i++) {
      if (!index[ids[i]]) {
        let defintion = state[ids[i]];
        let Constructor = types[defintion.type];
        this.showables.push(new Constructor(defintion));
      }
    }
  }
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./Aya.png": 24,
	"./Aya/Angry.png": 25,
	"./Aya/Blush.png": 26,
	"./Aya/Cry.png": 27,
	"./Aya/Frown.png": 28,
	"./Aya/Grin.png": 29,
	"./Aya/Neutral.png": 30,
	"./Aya/Sad.png": 31,
	"./Aya/Scared.png": 32,
	"./Aya/Shocked.png": 33,
	"./Aya/Smile.png": 34,
	"./Aya/Smile_Blush.png": 35,
	"./Aya/Smirk.png": 36,
	"./Background.png": 37,
	"./Background/gare_by_lowx-daac2nh.png": 38
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 15;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./Aya.json": 59,
	"./Background.json": 60
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 16;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

let inOut = __webpack_require__(18),
 inverse = __webpack_require__(19);

let linear = (point, max) => point / max;
let quadIn = (point, max) => (point /= max, point * point);
let cubicIn = (point, max) => (point /= max, point * point * point);
let quartIn = (point, max) => (point /= max, point * point * point * point);
let quintIn = (point, max) => (point /= max, point * point * point * point);
let circIn = (point, max) => (point /= max, 1 - Math.sqrt(1 - point * point));
let sinIn = (point, max) => (point /= max, point -= 1, 1 + Math.sin(Math.PI * point * 0.5));
let expoIn = (point, max) => (point /= max, point -= 1, point === 0 ? 0 : Math.pow(2, 10 * point));
let linExpoIn = (point, max) => (point /= max, point -= 1, point * Math.pow(2, point));
let bounceIn = (point, max) => (point *= 2.5 / max, (1 + Math.floor(point)) / 3 * Math.abs(Math.sin(Math.PI * point)));


let quadOut = inverse(quadIn);
let cubicOut = inverse(cubicIn);
let quartOut = inverse(quartIn);
let quintOut = inverse(quintIn);
let circOut = inverse(circIn);
let sinOut = inverse(sinIn);
let expoOut = inverse(expoIn);
let linExpoOut = inverse(linExpoIn);
let bounceOut = inverse(bounceIn);


let quadInOut = inOut(quadIn, quadOut);
let cubicInOut = inOut(cubicIn, cubicOut);
let quartInOut = inOut(quartIn, quartOut);
let quintInOut = inOut(quintIn, quintOut);
let circInOut = inOut(circIn, circOut);
let sinInOut = inOut(sinIn, sinOut);
let expoInOut = inOut(expoIn, expoOut);
let linExpoInOut = inOut(linExpoIn, linExpoOut);
let bounceInOut = inOut(bounceIn, bounceOut);

module.exports = {
  linear,
  quadIn,
  quadOut,
  quadInOut,
  cubicIn,
  cubicOut,
  cubicInOut,
  quartIn,
  quartOut,
  quartInOut,
  quintIn,
  quintOut,
  quintInOut,
  circIn,
  circOut,
  circInOut,
  sinIn,
  sinOut,
  sinInOut,
  expoIn,
  expoOut,
  expoInOut,
  linExpoIn,
  linExpoOut,
  linExpoInOut,
  bounceIn,
  bounceOut,
  bounceInOut
};

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = function inOut(func, inverse) {
  return  function inOutFunc(point, max) {
    point /= max;
    return point < 0.5 ?
      0.5 * func(point,  0.5) :
      0.5 + 0.5 * inverse(point - 0.5, 0.5);
  };
};

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = function inverse(func) {
  return function(point, max) {
    return 1 - func(max - point, max);
  };
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
let story = __webpack_require__(21);


module.exports = function* history(interpreter, history, queue, state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])()) {
  history = history.slice();
  let currentIndex = history.length - 1;
  queue = queue.slice();
  let seen = 0;
  let nextScript = '';
  let currentScript = null;
  let intent = 1;
  if (currentIndex === -1) {
    nextScript = queue.shift();
    seen = 0;
    currentIndex = history.push({
      script: nextScript,
      seen
    }) - 1;
  } else {
    nextScript = history[currentIndex].script;
    seen = history[currentIndex].seen;
  }
  currentScript = story(interpreter, nextScript, seen, state);

  let action = '';

  interpreter.removeAllListeners('save');
  interpreter.on('save', () => {
    interpreter.openSave(history, queue);
  });


  while(true) {
    let { mouseData } = interpreter.renderer;
    if (mouseData.clicked) {
      intent = 1;
    }
    let { done, value: [action, arg = void 0] } = currentScript.next(intent);

    if (done || action === 'advance-history') {
      currentIndex += 1;
      if (currentIndex >= history.length) {
        nextScript = queue.shift();
        seen = 0;
      } else {
        nextScript = history[currentIndex].script;
        seen = history[currentIndex].seen;
      }
      if (!nextScript) {
        return ['done', void 0];
      }
      currentIndex = history.push(nextScript) - 1;
      currentScript = story(interpreter, nextScript, seen, state);
      continue;
    }

    if (action === 'previous-history') {
      if (!history[currentIndex -1]) {
        intent = yield ['pause', void 0];
        continue;
      }
      currentIndex -= 1;
      nextScript = history[currentIndex].script;
      seen = history[currentIndex].seen;
      currentScript = story(interpreter, nextScript, seen, state);
    }
    seen = arg;
    if (seen > history[currentIndex].seen) {
      history[currentIndex].seen = seen;
    }
    intent = yield [action, void 0];
    
  }

};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

let stories = __webpack_require__(5);
module.exports = function* story(interpreter, script, seen, state) {
  let slides = [];
  let story = stories(script)(interpreter, state);
  let intent = 1;
  let isDone = false;
  // load current slides
  for(let i = 0; i < seen; i++) {
    let { value, done } = story.next();
    slides.push(
      interpreter.renderer.getState()
    );
    if (done) {
      isDone = true;
      break;
    }
  }

  let slideIndex = slides.length - 1;
  intent = yield ['pause', slideIndex];
  
  while(true) {
    slideIndex += intent;

    if (slideIndex >= slides.length) {
      if (isDone) {
        return ['advance-history', seen];
      }

      let { value: [type, arg], done } = story.next();


      if (type === 'pause') {
        if (interpreter.historyEnabled) {
          slides.push(
            interpreter.renderer.getState()
          );
        }
        slideIndex = seen = slides.length - 1;
        isDone = done;
      }

      intent = yield [type, seen];
      continue;
    }

    if (slideIndex < 0) {
      return ['previous-history', seen];
    }

    interpreter.renderer.setState(
      slides[slideIndex]
    );
    intent = yield ['pause', seen];
  }
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./main.js": 6,
	"./options.js": 62
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 22;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

//Copyright (C) 2012 Kory Nunn

//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/*

    This code is not formatted for readability, but rather run-speed and to assist compilers.

    However, the code's intention should be transparent.

    *** IE SUPPORT ***

    If you require this library to work in IE7, add the following after declaring crel.

    var testDiv = document.createElement('div'),
        testLabel = document.createElement('label');

    testDiv.setAttribute('class', 'a');
    testDiv['className'] !== 'a' ? crel.attrMap['class'] = 'className':undefined;
    testDiv.setAttribute('name','a');
    testDiv['name'] !== 'a' ? crel.attrMap['name'] = function(element, value){
        element.id = value;
    }:undefined;


    testLabel.setAttribute('for', 'a');
    testLabel['htmlFor'] !== 'a' ? crel.attrMap['for'] = 'htmlFor':undefined;



*/

(function (root, factory) {
    if (true) {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.crel = factory();
    }
}(this, function () {
    var fn = 'function',
        obj = 'object',
        nodeType = 'nodeType',
        textContent = 'textContent',
        setAttribute = 'setAttribute',
        attrMapString = 'attrMap',
        isNodeString = 'isNode',
        isElementString = 'isElement',
        d = typeof document === obj ? document : {},
        isType = function(a, type){
            return typeof a === type;
        },
        isNode = typeof Node === fn ? function (object) {
            return object instanceof Node;
        } :
        // in IE <= 8 Node is an object, obviously..
        function(object){
            return object &&
                isType(object, obj) &&
                (nodeType in object) &&
                isType(object.ownerDocument,obj);
        },
        isElement = function (object) {
            return crel[isNodeString](object) && object[nodeType] === 1;
        },
        isArray = function(a){
            return a instanceof Array;
        },
        appendChild = function(element, child) {
          if(!crel[isNodeString](child)){
              child = d.createTextNode(child);
          }
          element.appendChild(child);
        };


    function crel(){
        var args = arguments, //Note: assigned to a variable to assist compilers. Saves about 40 bytes in closure compiler. Has negligable effect on performance.
            element = args[0],
            child,
            settings = args[1],
            childIndex = 2,
            argumentsLength = args.length,
            attributeMap = crel[attrMapString];

        element = crel[isElementString](element) ? element : d.createElement(element);
        // shortcut
        if(argumentsLength === 1){
            return element;
        }

        if(!isType(settings,obj) || crel[isNodeString](settings) || isArray(settings)) {
            --childIndex;
            settings = null;
        }

        // shortcut if there is only one child that is a string
        if((argumentsLength - childIndex) === 1 && isType(args[childIndex], 'string') && element[textContent] !== undefined){
            element[textContent] = args[childIndex];
        }else{
            for(; childIndex < argumentsLength; ++childIndex){
                child = args[childIndex];

                if(child == null){
                    continue;
                }

                if (isArray(child)) {
                  for (var i=0; i < child.length; ++i) {
                    appendChild(element, child[i]);
                  }
                } else {
                  appendChild(element, child);
                }
            }
        }

        for(var key in settings){
            if(!attributeMap[key]){
                element[setAttribute](key, settings[key]);
            }else{
                var attr = attributeMap[key];
                if(typeof attr === fn){
                    attr(element, settings[key]);
                }else{
                    element[setAttribute](attr, settings[key]);
                }
            }
        }

        return element;
    }

    // Used for mapping one kind of attribute to the supported version of that in bad browsers.
    crel[attrMapString] = {};

    crel[isElementString] = isElement;

    crel[isNodeString] = isNode;

    if(typeof Proxy !== 'undefined'){
        crel.proxy = new Proxy(crel, {
            get: function(target, key){
                !(key in crel) && (crel[key] = crel.bind(null, key));
                return crel[key];
            }
        });
    }

    return crel;
}));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a9dc67668dfba371fc374294ae7d4559.png";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc99e934802f0ee211fdc91ceaa96e96.png";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e1b368cff697617fd4b76af4022605ac.png";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b230ef480523ca2ff544152395fdf5f9.png";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "464a4535710a9ef5a5a1aaa1236b9024.png";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ff6afc6f6bc200dd73e390e4141205b.png";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ccd38a20b68ab7f2ead9ddaaad4ba609.png";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "88ff53224485f9d1c9eaaf46d3f96869.png";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a5778b42a2c053efb65fe31014ec8edf.png";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cb0ba503142bd4d126f35241740e08ed.png";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0cccc7e381ca77d6d4a77fa961228523.png";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1a41bb81b1571407920e8854a81e4f9c.png";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ffc71059ee4573abc2b46bda0c5846e.png";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7cc5a37560dfe868eb6ccd3e3d6dda84.png";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "248458496f161b375343c3b550a7eab1.png";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d914e858b7c298b0a20b94f93e292df9.otf";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f804308dc39269f2d8598cd4c624f2e5.png";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ed860e0a4295c9848a2e0b371911d26.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6945396538d40c9a482819c24aea29d8.png";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21d9f4aa255119fbb2de413e3b4bf5c7.png";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "948e761208b6194f85d7b1cb4f99d8f5.png";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "77a783281291fc3a8cf997a75a2847bb.png";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4cb8eccb7ed09b83dd89ec457426e8b8.png";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9e8ee288e7ec6a83777f49fb0797bd1f.png";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aeb420d44a89d2608fc6b4a5f7ad7d72.png";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9597bc24c48ef34de81cbf5603ab1c39.png";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cedaddace229519a597a54d8bd414faa.png";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a62e9e3038dadd90d13228c9261b6dd9.png";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4ca38a742d93f71222a274020589d02.png";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "78f7188cbdbbcdc4355116dfaa0e62eb.png";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c4c2ce7fdc6f86bc1ba126434fae13f2.png";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4aea8fa323b346e84263e030fe663abb.png";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0f23bfe04db99ae954c3b96aeee74ec5.png";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b8f13d1d51878cfd05214f9310f113cd.png";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

(function(){function m(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function n(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function l(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",l),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function x(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=l;y(a)&&a.a.parentNode&&b(a.g)}var l=a;m(a.b,c);m(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function I(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function J(a,b){return[a.style,a.weight,I()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,l=a||"BESbswy",r=0,D=b||3E3,G=(new Date).getTime();return new Promise(function(a,b){var e;null===F&&(F=!!document.fonts);if(e=F)null===C&&(C=/OS X.*Version\/10\..*Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),e=!C;if(e){e=new Promise(function(a,b){function f(){(new Date).getTime()-G>=D?b():document.fonts.load(J(c,'"'+c.family+'"'),l).then(function(c){1<=c.length?a():setTimeout(f,25)},function(){b()})}f()});var K=new Promise(function(a,
c){r=setTimeout(c,D)});Promise.race([K,e]).then(function(){clearTimeout(r);a(c)},function(){b(c)})}else n(function(){function e(){var b;if(b=-1!=g&&-1!=h||-1!=g&&-1!=k||-1!=h&&-1!=k)(b=g!=h&&g!=k&&h!=k)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(g==u&&h==u&&k==u||g==v&&h==v&&k==v||g==w&&h==w&&k==w)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}
function H(){if((new Date).getTime()-G>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)g=f.a.offsetWidth,h=p.a.offsetWidth,k=q.a.offsetWidth,e();r=setTimeout(H,50)}}var f=new t(l),p=new t(l),q=new t(l),g=-1,h=-1,k=-1,u=-1,v=-1,w=-1,d=document.createElement("div");d.dir="ltr";x(f,J(c,"sans-serif"));x(p,J(c,"serif"));x(q,J(c,"monospace"));d.appendChild(f.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);u=f.a.offsetWidth;v=p.a.offsetWidth;
w=q.a.offsetWidth;H();z(f,function(a){g=a;e()});x(f,J(c,'"'+c.family+'",sans-serif'));z(p,function(a){h=a;e()});x(p,J(c,'"'+c.family+'",serif'));z(q,function(a){k=a;e()});x(q,J(c,'"'+c.family+'",monospace'))})})}; true?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());


/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = {
	"moods": {
		"Sad": {
			"name": "Sad",
			"x": 0,
			"y": 0,
			"w": 292,
			"h": 605,
			"file": "Sad.png"
		},
		"Smirk": {
			"name": "Smirk",
			"x": 292,
			"y": 0,
			"w": 304,
			"h": 605,
			"file": "Smirk.png"
		},
		"Cry": {
			"name": "Cry",
			"x": 596,
			"y": 0,
			"w": 272,
			"h": 599,
			"file": "Cry.png"
		},
		"Frown": {
			"name": "Frown",
			"x": 0,
			"y": 605,
			"w": 304,
			"h": 605,
			"file": "Frown.png"
		},
		"Smile": {
			"name": "Smile",
			"x": 304,
			"y": 605,
			"w": 292,
			"h": 605,
			"file": "Smile.png"
		},
		"Neutral": {
			"name": "Neutral",
			"x": 596,
			"y": 605,
			"w": 292,
			"h": 605,
			"file": "Neutral.png"
		},
		"Blush": {
			"name": "Blush",
			"x": 868,
			"y": 0,
			"w": 272,
			"h": 599,
			"file": "Blush.png"
		},
		"Scared": {
			"name": "Scared",
			"x": 1140,
			"y": 0,
			"w": 272,
			"h": 599,
			"file": "Scared.png"
		},
		"Shocked": {
			"name": "Shocked",
			"x": 888,
			"y": 605,
			"w": 304,
			"h": 605,
			"file": "Shocked.png"
		},
		"Smile_Blush": {
			"name": "Smile_Blush",
			"x": 1192,
			"y": 605,
			"w": 292,
			"h": 605,
			"file": "Smile_Blush.png"
		},
		"Grin": {
			"name": "Grin",
			"x": 0,
			"y": 1210,
			"w": 308,
			"h": 610,
			"file": "Grin.png"
		},
		"Angry": {
			"name": "Angry",
			"x": 308,
			"y": 1210,
			"w": 308,
			"h": 610,
			"file": "Angry.png"
		}
	}
};

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = {
	"moods": {
		"gare_by_lowx-daac2nh": {
			"name": "gare_by_lowx-daac2nh",
			"x": 0,
			"y": 0,
			"w": 1024,
			"h": 576,
			"file": "gare_by_lowx-daac2nh.png"
		},
		"night_forest_by_grammahobbes-da9sfcr": {
			"name": "night_forest_by_grammahobbes-da9sfcr",
			"x": 0,
			"y": 576,
			"w": 1024,
			"h": 600,
			"file": "night_forest_by_grammahobbes-da9sfcr.jpg"
		}
	}
};

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = {
	"name": "e2dvn",
	"version": "1.0.0",
	"description": "A Visual Novel Framework for JS developers.",
	"main": "index.html",
	"scripts": {
		"debug": "npm run sprites && npm run dev-server",
		"dev-server": "node ./build/dev-server",
		"release": "npm run sprites && npm run webpack && npm run nw",
		"sprites": "node ./build/spritesheet-assembler",
		"webpack": "node ./build/webpack",
		"nw": "node ./build/nw",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"author": "Joshua <tenner.joshua@gmail.com>",
	"license": "ISC",
	"devDependencies": {
		"async": "^2.1.4",
		"babel-core": "^6.21.0",
		"babel-loader": "^6.2.10",
		"babel-plugin-e2dx": "github:e2d/e2dx",
		"babel-plugin-minify-dead-code-elimination": "^0.1.1",
		"babel-plugin-transform-inline-functions": "^1.0.1",
		"babel-preset-es2015": "^6.18.0",
		"bin-packing": "git+https://github.com/jtenner/bin-packing.git",
		"crel": "^3.0.0",
		"e2d": "github:e2d/e2d",
		"ease-functions": "0.0.1",
		"eventemitter2": "^2.2.1",
		"express": "^4.14.0",
		"file-loader": "^0.9.0",
		"fontfaceobserver": "^2.0.7",
		"get-pixels": "^3.3.0",
		"glob": "^7.1.1",
		"imagemin-webpack-plugin": "^1.4.4",
		"immutable": "^3.8.1",
		"json-loader": "^0.5.4",
		"library-src-plugin": "^1.0.2",
		"nw-builder": "^3.1.2",
		"save-pixels": "^2.3.4",
		"webpack": "^2.2.0-rc.3",
		"zeros": "^1.0.0"
	},
	"window": {
		"width": 800,
		"height": 600,
		"resizable": false,
		"title": "Gensokyo Beat Street"
	},
	"story": {
		"name": "Gensokyo Beat Street",
		"theme": "hexagon"
	},
	"dependencies": {}
};

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = function* menu(_interpreter) {
  _interpreter.push();

  let _cache;

  let b = new _interpreter.Button({
    id: 'test',
    x: 300,
    y: 100,
    text: 'Close'
  }, _interpreter.theme);
  b = _interpreter.renderer.find(b.id) || b, Object.assign(b.last, b.position), _interpreter.show(b, {}), b.start = Date.now(), b.hiding = false, b;
  handle({
    'test': () => {
      return;
    }
  });

  _interpreter.pop();
};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

let Showable = __webpack_require__(1);
let e2d = __webpack_require__(0);

module.exports = class Textarea extends Showable {
  constructor(props, theme) {
    super(props);
    Object.assign(this, {
      type: 'textarea',
      theme: theme,
      speaker: '',
      previousSpeaker: null,
      speakerColor: '',
      text: '',
      textIndex: 0,
      texture: theme.textarea.texture,
      previousTextIndex: -1,
      speed: 1,
      ctx: props.ctx,
      dirty: true
    });
    this.load(props);
  }
  load(props) {
    this.speaker = props.hasOwnProperty('speaker') ? props.speaker : this.speaker;
    this.speakerColor = props.hasOwnProperty('speakerColor') ? props.speakerColor : this.speakerColor;
    this.text = props.hasOwnProperty('text') ? props.text : this.text;
  }
  update() {
    if (!this.theme.ready) {
      return;
    }
    this.textIndex += this.speed;
    if (this.textIndex > this.text.length) {
      this.textIndex = this.text.length;
    }
    if (this.previousTextIndex !== this.textIndex) {
      this.dirty = true;
    }
    this.previousTextIndex = this.textIndex;
    if (this.speaker !== this.previousSpeaker) {
      this.dirty = true;
    }
    this.previousSpeaker = this.speaker;
    return super.update();
  }
  calculateLines() {
    let workingText = this.text.slice(0, this.textIndex).trim().replace('\r\n', '\n').replace('\r', '');
    let result = [];
    let index = [];
    let i;
    let lastIndex = 0;
    let testIndex = 0;
    let previousTestIndex = 0;
    let testText = "";
    let ctx = this.ctx;
    let count = 0;
    let forceBreak;
    for (i = 0; i < workingText.length; i++) {
      switch (workingText[i]) {
        case " ":
        case "\t":
          index.push([i, 0]);
          break;
        case "\n":
          index.push([i, 1]);
      }
    }
    index.push([workingText.length, 0]);
    let tempFont = ctx.font;
    ctx.font = this.theme.textarea.textFont;

    for (i = 0; i < index.length; i++) {
      [testIndex, forceBreak] = index[i];
      testText = workingText.slice(lastIndex, testIndex).trim();

      if (forceBreak === 1 || this.ctx.measureText(testText).width > this.theme.textarea.textBox[2]) {
        result.push(e2d.fillText(forceBreak ? testText : workingText.slice(lastIndex, previousTestIndex).trim(), this.theme.textarea.textBox[0], this.theme.textarea.textBox[1] + count * (this.theme.textarea.textFontSize + this.theme.textarea.textLeading)));
        count += 1;
        lastIndex = forceBreak ? testIndex : previousTestIndex;
      }

      previousTestIndex = testIndex;
    }

    result.push(e2d.fillText(workingText.slice(lastIndex).trim(), this.theme.textarea.textBox[0], this.theme.textarea.textBox[1] + count * (this.theme.textarea.textFontSize + this.theme.textarea.textLeading)));
    ctx.font = tempFont;
    return result;
  }
  render() {
    return super.render(e2d.drawImage(this.theme.textarea.texture), e2d.fillStyle(this.speakerColor, e2d.textStyle({
      font: this.theme.textarea.speakerBoxFont,
      textBaseline: 'top'
    }, e2d.fillText(this.speaker, this.theme.textarea.speakerBox[0], this.theme.textarea.speakerBox[1]))), e2d.fillStyle(this.theme.textarea.color, e2d.textStyle({
      font: this.theme.textarea.textFont,
      textBaseline: 'top'
    }, e2d.clip(e2d.rect(this.theme.textarea.textBox[0], this.theme.textarea.textBox[1], this.theme.textarea.textBox[2], this.theme.textarea.textBox[3]), this.calculateLines(this, this.theme.textarea)))));
  }
  serialize() {
    return super.serialize({
      text: this.text,
      speaker: this.speaker,
      speakerColor: this.speakerColor
    });
  }
  deserialize(props) {
    this.load(props);
    this.textIndex = this.text.length;
    this.previousTextIndex = -1;
  }
};

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = function* menu(_interpreter) {
  let _cache;

  let Aya = new _interpreter.Character('Aya');
};

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = function* menu(_interpreter) {
  let _cache;

  let Aya = new _interpreter.Character({
    id: 'aya',
    name: 'Aya',
    actor: 'Aya',
    a: 0
  });

  //start aya here
  Aya = _interpreter.renderer.find(Aya.id) || Aya, Object.assign(Aya.last, Aya.position), _interpreter.show(Aya, {
    x: _interpreter.renderer.width * 50 * 0.01,
    y: _interpreter.renderer.height * 100 * 0.01,
    cx: {
      _type: 'computed',
      unit: 'aw',
      value: Aya
    },
    cy: {
      _type: 'computed',
      unit: 'ah',
      value: Aya
    }
  }), Aya.start = Date.now(), Aya.hiding = false, Aya;

  Aya.mood = 'Neutral';
  bg = _interpreter.renderer.find(_interpreter.bg.id) || _interpreter.bg, Object.assign(_interpreter.bg.last, _interpreter.bg.position), _interpreter.show(_interpreter.bg, {
    a: 1
  }), _interpreter.bg.start = Date.now(), _interpreter.bg.hiding = false, _interpreter.bg;
  Aya = _interpreter.renderer.find(Aya.id) || Aya, Object.assign(Aya.last, Aya.position), _interpreter.show(Aya, {
    a: 1
  }), Aya.start = Date.now(), Aya.hiding = false, Aya;
  tb = _interpreter.renderer.find(_interpreter.tb.id) || _interpreter.tb, Object.assign(_interpreter.tb.last, _interpreter.tb.position), _interpreter.show(_interpreter.tb, {
    a: 1
  }), _interpreter.tb.start = Date.now(), _interpreter.tb.hiding = false, _interpreter.tb;

  _cache = [Aya || "", `Hello`], _interpreter.tb.speaker = _cache[0].hasOwnProperty('name') ? _cache[0].name : _cache[0], _interpreter.tb.speakerColor = _cache[0].hasOwnProperty('color') ? _cache[0].color : _interpreter.theme.defaultSpeakerColor, _interpreter.tb.text = _cache[1].toString(), _interpreter.tb.textIndex = 0, yield ['pause', void 0], _cache[0];
};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

let options = {
  [Symbol.for('count')]: 0,
  [Symbol.for('loaded')]: 0,
  ready: false
};

let _hue = (p, q, t) => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

let hsla = (h, s, l, a) => {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  return [Math.round(__hue(p, q, h + 1 / 3) * 255), Math.round(__hue(p, q, h) * 255), Math.round(__hue(p, q, h - 1 / 3) * 255), 1];
};

let _createImage = src => {
  let img = new Image();
  img.src = src;
  options[Symbol.for('count')] += 1;
  img.addEventListener('load', () => {
    options[Symbol.for('loaded')] += 1;

    if (!options.ready && options[Symbol.for('count')] === options[Symbol.for('loaded')]) {
      options.ready = true;
    }
  });
  return img;
};

let _loadFont = (name, src) => {
  let FontFaceObserver = __webpack_require__(58);

  let font = new FontFaceObserver(name);
  let ff = `
    @font-face{
      font-family: ${ name };
      src: url("${ src }")
    }
  `;
  let tag = document.createElement('style');
  tag.type = 'text/css';

  if (tag.styleSheet) {
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
};

//section: controls
let selectedColor = `rgba(194,128,255,1)`;
let normalColor = `rgba(155,154,255,1)`;
//title text
options.titleTextSize = 32;
options.titleTextColor = selectedColor;

options.controlTextSize = 26;
_loadFont('Puritan', __webpack_require__(39));
options.controlFont = `${ options.controlTextSize }px Puritan`;
options.controlTextColor = normalColor;
options.controlTextSelectedColor = selectedColor;

options.choiceTextSize = 40;
options.choiceFont = `${ options.choiceTextSize }px Puritan`;
options.choiceTextColor = normalColor;
options.choiceTextSelectedColor = selectedColor;

options.checkbox = {
  unchecked: _createImage(__webpack_require__(47)),
  uncheckedActive: _createImage(__webpack_require__(46)),
  checked: _createImage(__webpack_require__(45)),
  checkedActive: _createImage(__webpack_require__(44)),
  textPadding: 4
};

options.button = {
  unselected: _createImage(__webpack_require__(43)),
  unselectedActive: _createImage(__webpack_require__(42)),
  selected: _createImage(__webpack_require__(41)),
  selectedActive: _createImage(__webpack_require__(40))
};

options.slider = {
  capLeft: _createImage(__webpack_require__(51)),
  capRight: _createImage(__webpack_require__(52)),
  pill: _createImage(__webpack_require__(55)),
  pillActive: _createImage(__webpack_require__(54)),
  line: _createImage(__webpack_require__(53))
};

options.choice = {
  choice: _createImage(__webpack_require__(50)),
  active: _createImage(__webpack_require__(48)),
  selected: _createImage(__webpack_require__(49)),
  margin: 30
};

let textareaFont = 'Puritan',
    textareaSpeakerFont = textareaFont,
    textareaFontSize = 20,
    speakerBoxFontSize = 20;
options.textarea = {
  texture: _createImage(__webpack_require__(56)),
  speakerBox: [10, 10, 380, 20],
  speakerBoxFontSize: speakerBoxFontSize,
  speakerBoxFont: `bold ${ speakerBoxFontSize }px ${ textareaSpeakerFont }`,
  textBox: [10, 46, 780, 150],
  textFontSize: textareaFontSize,
  textFont: `${ textareaFontSize }px ${ textareaFont }`,
  textLeading: 10,
  color: normalColor
};

options.windowBackground = _createImage(__webpack_require__(57));
module.exports = options;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

let Interpreter = __webpack_require__(11);
let Renderer = __webpack_require__(14);
let pkg = __webpack_require__(12);
let r = new Renderer(
  __webpack_require__(13)("./" + pkg.story.theme + '/options.js')
);
let i = new Interpreter(r, r.theme);



/***/ }
/******/ ]);