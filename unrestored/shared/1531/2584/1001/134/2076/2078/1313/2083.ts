"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.QueryableString = void 0;
var r = function () {
  function e(e) {
    this.str = e;
  }
  e.prototype.startsWith = function (e) {
    return 0 === this.str.indexOf(e);
  };
  e.prototype.endsWith = function (e) {
    var t;
    var n = e.split("").reverse().join("");
    t = this.str.split("").reverse().join("");
    return this.startsWith.call({
      str: t
    }, n);
  };
  e.prototype.contains = function (e) {
    return -1 !== this.str.indexOf(e);
  };
  e.prototype.equals = function (e) {
    return this.str === e;
  };
  e.prototype.value = function () {
    return this.str;
  };
  return e;
}();
exports.QueryableString = r;