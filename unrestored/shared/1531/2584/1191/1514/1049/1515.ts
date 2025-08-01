"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.getPrefix = o;
exports.browserPrefixToKey = i;
exports.browserPrefixToStyle = function (e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
};
exports.default = void 0;
var r = ["Moz", "Webkit", "O", "ms"];
function o() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
  if ("undefined" === typeof window || "undefined" === typeof window.document) {
    return "";
  }
  var t = window.document.documentElement.style;
  if (e in t) {
    return "";
  }
  for (var n = 0; n < r.length; n++) {
    if (i(e, r[n]) in t) {
      return r[n];
    }
  }
  return "";
}
function i(e, t) {
  return t ? "".concat(t).concat(function (e) {
    for (var t = "", n = !0, r = 0; r < e.length; r++) {
      if (n) {
        t += e[r].toUpperCase();
        n = !1;
      } else {
        if ("-" === e[r]) {
          n = !0;
        } else {
          t += e[r];
        }
      }
    }
    return t;
  }(e)) : e;
}
var a = o();
exports.default = a;