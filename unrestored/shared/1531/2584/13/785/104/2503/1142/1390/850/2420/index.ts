var r = require("../../../../../2483/2484/2485/1417/1149");
var i = require("./2421");
var o = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  if (!r(e)) {
    return i(e);
  }
  var t = [];
  for (var n in Object(e)) if (o.call(e, n) && "constructor" != n) {
    t.push(n);
  }
  return t;
};