'use strict';

module.exports = function(fn, timeout) {
  var timer;

  return function() {
    var that = this,
        args = arguments;

    clearTimeout(timer);

    timer = setTimeout(function() {
      fn.apply(that, args);
    }, timeout);
  };
};
