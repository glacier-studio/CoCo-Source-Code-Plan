"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  for (var n = Object.keys(t), r = 0, a = n; r < a.length; r++) {
    var i = a[r];
    if (e[i] !== t[i]) {
      return !1;
    }
  }
  return !0;
};