"use strict";

var r = require("../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  if (e === t) {
    return !0;
  }
  var n = a.PLACEHOLDERS_ALIAS[e];
  if (n) {
    var i;
    var o = r(n);
    try {
      for (o.s(); !(i = o.n()).done;) {
        var s = i.value;
        if (t === s) {
          return !0;
        }
      }
    } catch (u) {
      o.e(u);
    } finally {
      o.f();
    }
  }
  return !1;
};
var a = require("./2645/index");