module.exports = function inverse(func) {
  return function(point, max) {
    return 1 - func(max - point, max);
  };
};