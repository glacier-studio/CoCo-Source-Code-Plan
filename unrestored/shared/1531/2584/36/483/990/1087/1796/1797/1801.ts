var r = require("./1798/956");
var i = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  var t = this.__data__;
  return r ? void 0 !== t[e] : i.call(t, e);
};