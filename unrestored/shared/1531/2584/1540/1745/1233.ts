"use strict";

var r = require("./272");
var o = require("../1633/167");
var i = require("../1541/820/index");
var a = require("../1541/1061");
var s = require("../1541/931");
var c = require("../1731/309");
var l = require("../1569/814");
var u = Object.assign;
var d = Object.defineProperty;
module.exports = !u || o(function () {
  if (r && 1 !== u({
    b: 1
  }, u(d({}, "a", {
    enumerable: !0,
    get: function () {
      d(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), {
    b: 2
  })).b) {
    return !0;
  }
  var e = {};
  var t = {};
  var n = Symbol();
  e[n] = 7;
  "abcdefghijklmnopqrst".split("").forEach(function (e) {
    t[e] = e;
  });
  return 7 != u({}, e)[n] || "abcdefghijklmnopqrst" != i(u({}, t)).join("");
}) ? function (e, t) {
  for (var n = c(e), o = arguments.length, u = 1, d = a.f, p = s.f; o > u;) {
    for (var f, h = l(arguments[u++]), m = d ? i(h).concat(d(h)) : i(h), g = m.length, _ = 0; g > _;) {
      f = m[_++];
      if (!(r && !p.call(h, f))) {
        n[f] = h[f];
      }
    }
  }
  return n;
} : u;