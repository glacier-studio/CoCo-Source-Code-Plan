"use strict";

var r = a(require("../2401/1139/index"));
var i = a(require("./2474/index"));
var o = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r];
    }
  }
  return e;
};
function a(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
var s = exports.mergeClasses = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  var n = e.default && (0, i.default)(e.default) || {};
  t.map(function (t) {
    var i = e[t];
    if (i) {
      (0, r.default)(i, function (e, t) {
        if (!n[t]) {
          n[t] = {};
        }
        n[t] = o({}, n[t], i[t]);
      });
    }
    return t;
  });
  return n;
};
export default s;