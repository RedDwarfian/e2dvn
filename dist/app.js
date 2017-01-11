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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./hexagon/options.js": 27
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
webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_e2d__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_e2d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_e2d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter2__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_eventemitter2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_eventemitter2__);


let { window: { width, height, title } } = __webpack_require__(26);



module.exports = class Interpreter extends __WEBPACK_IMPORTED_MODULE_2_eventemitter2___default.a {
  constructor(theme) {
    super();
    this.theme = theme;
    this.showables = [];
    __WEBPACK_IMPORTED_MODULE_1_crel___default()(document.body, { style: 'margin: 0; padding: 0; ' }, __WEBPACK_IMPORTED_MODULE_1_crel___default()('div', { style: `margin: 0 auto; width: ${ width }px; height: ${ height }px;` }, this.canvas = __WEBPACK_IMPORTED_MODULE_1_crel___default()('canvas', { width, height })));

    this.windowBackground = null;
    this.ctx = this.canvas.getContext('2d');
    __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.initialize(this.ctx);

    this.onAny((event, value) => this[event](value));

    this.previousMouseState = false;
    return __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.raf(() => {
      this.update();
      this.render();
    });
  }
  add(showable) {
    return this.showables.push(showable);
  }
  remove(showable) {
    let index = this.showables.indexOf(showable);
    if (index !== -1) {
      this.showables.splice(index, 1);
    }
  }
  push() {

    this.stack.push({
      showables: this.showables
    });
    this.showables = [];
  }
  update() {
    if (this.theme.ready && !this.windowBackground) {
      this.windowBackground = this.ctx.createPattern(this.theme.windowBackground, 'repeat');
      this.sliderLine = this.ctx.createPattern(this.theme.slider.line, 'repeat-x');
    }
    this.mouseData = __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.mouseData(this.ctx);
    this.regions = __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.activeRegions(this.ctx);
    let i,
        showable,
        pointer = false;
    //click event
    if (this.mouseData.clicked) {
      for (i = 0; i < this.showables.length; i++) {
        showable = this.showables[i];
        if (this.regions[showable.id]) {
          showable.active = true;
          this.emit('mousedown', showable);
        }
      }
    }

    // mouseUp
    if (this.previousMouseState && !this.mouseData.state) {
      for (i = 0; i < this.showables.length; i++) {
        showable = this.showables[i];
        if (showable.active && showable.hover) {
          this.emit('click', showable);
        }
        showable.active = false;
      }
    }

    //hovering
    for (i = 0; i < this.showables.length; i++) {
      showable = this.showables[i];
      showable.hover = !!this.regions[showable.id];

      if (showable.type === 'button' || showable.type === 'choice' || showable.type === 'slider' || showable.type === 'checkbox') {
        pointer = pointer || showable.hover;
      }

      if (showable.type === 'textarea') {
        showable.textIndex += showable.speed;
        if (showable.textIndex > showable.text.length) {
          showable.textIndex = showable.text.length;
        }
      }

      if (showable.type === 'slider' && showable.active) {
        let val = showable.value;

        showable.value = (this.mouseData.x - showable.x - this.theme.slider.pillActive.width * 0.5) / (showable.width - this.theme.slider.pillActive.width);

        showable.value = Math.max(0, Math.min(1, showable.value));
        pointer = true;
        if (val !== showable.value) {
          this.emit('value', showable);
        }
      }
    }
    this.previousMouseState = this.mouseData.state;
    this.canvas.style.cursor = pointer ? 'pointer' : 'default';
  }
  render() {
    if (!this.theme.ready) {
      return __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.render(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.clearRect(width, height), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(width * 0.5, height * 0.5, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.textStyle({
        textAlign: 'center',
        textBaseline: 'middle'
      }, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillText('Now Loading!'))), this.ctx);
    }
    let result = [];
    let texture;
    for (let i = 0; i < this.showables.length; i++) {
      let showable = this.showables[i];
      switch (showable.type) {

        case "checkbox":
          texture = this.theme.checkbox[(showable.checked ? '' : 'un') + 'checked' + (showable.active && showable.hover ? 'Active' : '')];
          result.push(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(showable.x, showable.y, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.drawImage(texture), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.hitRect(showable.id, texture.width, texture.height), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(texture.width + this.theme.checkbox.textPadding, texture.height * 0.5, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.textStyle({
            font: this.theme.controlFont,
            textBaseline: 'middle'
          }, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillStyle(this.theme.controlTextColor, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillText(showable.text))))));
          break;

        case "button":
          texture = this.theme.button[(showable.selected ? '' : 'un') + 'selected' + (showable.active && showable.hover ? 'Active' : '')];
          result.push(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(showable.x, showable.y, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.drawImage(texture), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.hitRect(showable.id, texture.width, texture.height), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(texture.width * 0.5, texture.height * 0.5, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.textStyle({
            font: this.theme.controlFont,
            textAlign: 'center',
            textBaseline: 'middle'
          }, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillStyle(showable.selected ? this.theme.controlTextSelectedColor : this.theme.controlTextColor, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillText(showable.text))))));
          break;

        case "slider":
          texture = this.theme.slider['pill' + (showable.active ? 'Active' : '')];
          result.push(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(showable.x, showable.y, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.drawImage(this.theme.slider.capLeft), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(this.theme.slider.capLeft.width, 0, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillStyle(this.sliderLine, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillRect(showable.width - this.theme.slider.capRight.width, this.theme.slider.line.height))), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(showable.width - this.theme.slider.capRight.width, 0, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.drawImage(this.theme.slider.capRight)), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate((showable.width - texture.width) * showable.value, 0, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.drawImage(texture), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.hitRect(showable.id, texture.width, texture.height))));
          break;

        case "choice":
          texture = showable.selected ? this.theme.choice.selected : showable.active ? this.theme.choice.active : this.theme.choice.choice;
          result.push(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(width * 0.5 - texture.width * 0.5, showable.number * this.theme.choice.margin + (showable.number - 1) * texture.height, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.drawImage(texture), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.hitRect(showable.id, texture.width, texture.height), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(texture.width * 0.5, texture.height * 0.5, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.textStyle({
            font: this.theme.choiceFont,
            textAlign: 'center',
            textBaseline: 'middle'
          }, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillStyle(showable.selected ? this.theme.choiceTextSelectedColor : this.theme.choiceTextColor, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillText(showable.text))))));
          break;

        case "textarea":
          texture = this.theme.textarea.texture;

          result.push(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.translate(showable.x, showable.y, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.drawImage(this.theme.textarea.texture), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillStyle(showable.speakerColor, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.textStyle({
            font: this.theme.textarea.speakerBoxFont,
            textBaseline: 'top'
          }, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillText(showable.speaker, this.theme.textarea.speakerBox[0], this.theme.textarea.speakerBox[1]))), __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillStyle(this.theme.textarea.color, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.textStyle({
            font: this.theme.textarea.textFont,
            textBaseline: 'top'
          }, __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.clip(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.rect(this.theme.textarea.textBox[0], this.theme.textarea.textBox[1], this.theme.textarea.textBox[2], this.theme.textarea.textBox[3]), this.calculateLines(showable, this.theme.textarea))))));
          break;
      }
    }
    return __WEBPACK_IMPORTED_MODULE_0_e2d___default.a.render(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.clearRect(width, height), result, this.ctx);
  }
  calculateLines(showable) {
    let workingText = showable.text.slice(0, showable.textIndex).trim().replace('\r\n', '\n').replace('\r', '');
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

      if (forceBreak === 1 || ctx.measureText(testText).width > this.theme.textarea.textBox[2]) {
        result.push(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillText(forceBreak ? testText : workingText.slice(lastIndex, previousTestIndex).trim(), this.theme.textarea.textBox[0], this.theme.textarea.textBox[1] + count * (this.theme.textarea.textFontSize + this.theme.textarea.textLeading)));
        count += 1;
        lastIndex = forceBreak ? testIndex : previousTestIndex;
      }

      previousTestIndex = testIndex;
    }

    result.push(__WEBPACK_IMPORTED_MODULE_0_e2d___default.a.fillText(workingText.slice(lastIndex).trim(), this.theme.textarea.textBox[0], this.theme.textarea.textBox[1] + count * (this.theme.textarea.textFontSize + this.theme.textarea.textLeading)));
    ctx.font = tempFont;
    return result;
  }
};

/***/ },
/* 3 */
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
/* 4 */
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
  requestAnimationFrame(() => raf(func));
  return func();
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d914e858b7c298b0a20b94f93e292df9.otf";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f804308dc39269f2d8598cd4c624f2e5.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ed860e0a4295c9848a2e0b371911d26.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6945396538d40c9a482819c24aea29d8.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "21d9f4aa255119fbb2de413e3b4bf5c7.png";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "948e761208b6194f85d7b1cb4f99d8f5.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "77a783281291fc3a8cf997a75a2847bb.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4cb8eccb7ed09b83dd89ec457426e8b8.png";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9e8ee288e7ec6a83777f49fb0797bd1f.png";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aeb420d44a89d2608fc6b4a5f7ad7d72.png";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9597bc24c48ef34de81cbf5603ab1c39.png";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cedaddace229519a597a54d8bd414faa.png";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a62e9e3038dadd90d13228c9261b6dd9.png";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4ca38a742d93f71222a274020589d02.png";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "78f7188cbdbbcdc4355116dfaa0e62eb.png";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c4c2ce7fdc6f86bc1ba126434fae13f2.png";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4aea8fa323b346e84263e030fe663abb.png";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0f23bfe04db99ae954c3b96aeee74ec5.png";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b8f13d1d51878cfd05214f9310f113cd.png";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

(function(){function m(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function n(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function l(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",l),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function x(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=l;y(a)&&a.a.parentNode&&b(a.g)}var l=a;m(a.b,c);m(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function I(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function J(a,b){return[a.style,a.weight,I()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,l=a||"BESbswy",r=0,D=b||3E3,G=(new Date).getTime();return new Promise(function(a,b){var e;null===F&&(F=!!document.fonts);if(e=F)null===C&&(C=/OS X.*Version\/10\..*Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),e=!C;if(e){e=new Promise(function(a,b){function f(){(new Date).getTime()-G>=D?b():document.fonts.load(J(c,'"'+c.family+'"'),l).then(function(c){1<=c.length?a():setTimeout(f,25)},function(){b()})}f()});var K=new Promise(function(a,
c){r=setTimeout(c,D)});Promise.race([K,e]).then(function(){clearTimeout(r);a(c)},function(){b(c)})}else n(function(){function e(){var b;if(b=-1!=g&&-1!=h||-1!=g&&-1!=k||-1!=h&&-1!=k)(b=g!=h&&g!=k&&h!=k)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(g==u&&h==u&&k==u||g==v&&h==v&&k==v||g==w&&h==w&&k==w)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}
function H(){if((new Date).getTime()-G>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)g=f.a.offsetWidth,h=p.a.offsetWidth,k=q.a.offsetWidth,e();r=setTimeout(H,50)}}var f=new t(l),p=new t(l),q=new t(l),g=-1,h=-1,k=-1,u=-1,v=-1,w=-1,d=document.createElement("div");d.dir="ltr";x(f,J(c,"sans-serif"));x(p,J(c,"serif"));x(q,J(c,"monospace"));d.appendChild(f.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);u=f.a.offsetWidth;v=p.a.offsetWidth;
w=q.a.offsetWidth;H();z(f,function(a){g=a;e()});x(f,J(c,'"'+c.family+'",sans-serif'));z(p,function(a){h=a;e()});x(p,J(c,'"'+c.family+'",serif'));z(q,function(a){k=a;e()});x(q,J(c,'"'+c.family+'",monospace'))})})}; true?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());


/***/ },
/* 26 */
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
/* 27 */
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
  let FontFaceObserver = __webpack_require__(25);

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
_loadFont('Puritan', __webpack_require__(6));
options.controlFont = `${ options.controlTextSize }px Puritan`;
options.controlTextColor = normalColor;
options.controlTextSelectedColor = selectedColor;

options.choiceTextSize = 40;
options.choiceFont = `${ options.choiceTextSize }px Puritan`;
options.choiceTextColor = normalColor;
options.choiceTextSelectedColor = selectedColor;

options.checkbox = {
  unchecked: _createImage(__webpack_require__(14)),
  uncheckedActive: _createImage(__webpack_require__(13)),
  checked: _createImage(__webpack_require__(12)),
  checkedActive: _createImage(__webpack_require__(11)),
  textPadding: 4
};

options.button = {
  unselected: _createImage(__webpack_require__(10)),
  unselectedActive: _createImage(__webpack_require__(9)),
  selected: _createImage(__webpack_require__(8)),
  selectedActive: _createImage(__webpack_require__(7))
};

options.slider = {
  capLeft: _createImage(__webpack_require__(18)),
  capRight: _createImage(__webpack_require__(19)),
  pill: _createImage(__webpack_require__(22)),
  pillActive: _createImage(__webpack_require__(21)),
  line: _createImage(__webpack_require__(20))
};

options.choice = {
  choice: _createImage(__webpack_require__(17)),
  active: _createImage(__webpack_require__(15)),
  selected: _createImage(__webpack_require__(16)),
  margin: 30
};

let textareaFont = 'Puritan',
    textareaSpeakerFont = textareaFont,
    textareaFontSize = 20,
    speakerBoxFontSize = 20;
options.textarea = {
  texture: _createImage(__webpack_require__(23)),
  speakerBox: [10, 10, 380, 20],
  speakerBoxFontSize: speakerBoxFontSize,
  speakerBoxFont: `bold ${ speakerBoxFontSize }px ${ textareaSpeakerFont }`,
  textBox: [10, 46, 780, 150],
  textFontSize: textareaFontSize,
  textFont: `${ textareaFontSize }px ${ textareaFont }`,
  textLeading: 10,
  color: normalColor
};

options.windowBackground = _createImage(__webpack_require__(24));
module.exports = options;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

let package = __webpack_require__(0);
let theme = __webpack_require__(1)("./" + package.story.theme + '/options.js');

let Renderer = __webpack_require__(2);

let renderer = new Renderer(theme);

renderer.emit('add', {
  id: 'test',
  type: 'textarea',
  active: false,
  hover: false,
  x: 0,
  y: package.window.height * 0.5,
  text: `
    Bacon ipsum
    dolor sit
    emet. Bacon ipsum dolor amet officia prosciutto chuck est, pig pastrami aliqua incididunt. Ea nisi dolor, occaecat in quis pancetta venison sausage enim velit. Culpa shank leberkas meatball tenderloin. Ad ham dolore, excepteur short loin ullamco landjaeger reprehenderit adipisicing.
  `,
  textIndex: 0,
  speed: 1,
  speaker: 'Speaker!',
  speakerColor: 'red',
  lines: []
})

/***/ }
/******/ ]);