let inOut = require('./util/inOut'),
 inverse = require('./util/inverse');

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