module.exports = function inOut(func, inverse) {
  return  function inOutFunc(point, max) {
    point /= max;
    return point < 0.5 ?
      0.5 * func(point,  0.5) :
      0.5 + 0.5 * inverse(point - 0.5, 0.5);
  };
};