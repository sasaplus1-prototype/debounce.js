'use strict';

module.exports = function(fn, timeout) {
  var timer;

  return function() {
    var that = this,
        args = arguments;

    clearTimeout(timer);

    timer = setTimeout(function() {
      switch (args.length) {
        case 0:
          fn.call(that);
          break;
        case 1:
          fn.call(that, args[0]);
          break;
        case 2:
          fn.call(that, args[0], args[1]);
          break;
        case 3:
          fn.call(that, args[0], args[1], args[2]);
          break;
        default:
          fn.apply(that, args);
      }
    }, timeout);
  };
};
