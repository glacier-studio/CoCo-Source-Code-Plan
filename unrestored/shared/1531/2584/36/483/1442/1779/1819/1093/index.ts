var r = require("./1820");
var i = require("./1270");
var o = Object.prototype.propertyIsEnumerable;
var a = Object.getOwnPropertySymbols;
var s = a ? function (e) {
  return null == e ? [] : (e = Object(e), r(a(e), function (t) {
    return o.call(e, t);
  }));
} : i;
module.exports = s;