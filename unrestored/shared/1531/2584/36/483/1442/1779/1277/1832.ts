var r = require("../638");
var i = Object.create;
var o = function () {
  function e() {}
  return function (t) {
    if (!r(t)) {
      return {};
    }
    if (i) {
      return i(t);
    }
    e.prototype = t;
    var n = new e();
    e.prototype = void 0;
    return n;
  };
}();
module.exports = o;