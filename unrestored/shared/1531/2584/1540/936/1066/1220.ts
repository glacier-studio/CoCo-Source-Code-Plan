"use strict";

var r;
var o;
var i;
var a = require("../../1633/167");
var s = require("../../1585/495");
var c = require("../../1742/422");
var l = require("../../1745/332");
var u = require("../../1742/247/index");
var d = require("../../1541/530");
var p = u("iterator");
var f = !1;
if ([].keys) {
  if ("next" in (i = [].keys())) {
    if ((o = s(s(i))) !== Object.prototype) {
      r = o;
    }
  } else {
    f = !0;
  }
}
var h = void 0 == r || a(function () {
  var e = {};
  return r[p].call(e) !== e;
});
if (h) {
  r = {};
}
if (!(d && !h || l(r, p))) {
  c(r, p, function () {
    return this;
  });
}
module.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: f
};