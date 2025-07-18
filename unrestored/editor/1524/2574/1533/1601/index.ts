"use strict";

import * as r from "../1738/272";
import * as o from "../1738/194";
import * as i from "../1660/817";
import * as a from "../1738/398";
import * as s from "../1738/332";
import * as c from "./705";
import * as l from "../1660/938";
import * as u from "../1534/749";
import * as d from "./1202/index";
import * as p from "../1626/167";
import * as f from "../1250/575";
var h = require("../1534/631").f;
var m = require("../1534/386").f;
var g = require("../1534/300/index").f;
var _ = require("../1679/753").trim;
var v = o.Number;
var b = v.prototype;
var y = "Number" == c(f(b));
var E = function (e) {
  if (u(e)) {
    throw TypeError("Cannot convert a Symbol value to a number");
  }
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var c;
  var l = d(e, "number");
  if ("string" == typeof l && l.length > 2) {
    if (43 === (t = (l = _(l)).charCodeAt(0)) || 45 === t) {
      if (88 === (n = l.charCodeAt(2)) || 120 === n) {
        return NaN;
      }
    } else if (48 === t) {
      switch (l.charCodeAt(1)) {
        case 66:
        case 98:
          r = 2;
          o = 49;
          break;
        case 79:
        case 111:
          r = 8;
          o = 55;
          break;
        default:
          return +l;
      }
      for (a = (i = l.slice(2)).length, s = 0; s < a; s++) {
        if ((c = i.charCodeAt(s)) < 48 || c > o) {
          return NaN;
        }
      }
      return parseInt(i, r);
    }
  }
  return +l;
};
if (i("Number", !v(" 0o1") || !v("0b1") || v("+0x1"))) {
  for (var O, w = function (e) {
      var t = arguments.length < 1 ? 0 : e;
      var n = this;
      return n instanceof w && (y ? p(function () {
        b.valueOf.call(n);
      }) : "Number" != c(n)) ? l(new v(E(t)), n, w) : E(t);
    }, C = r ? h(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), T = 0; C.length > T; T++) {
    if (s(v, O = C[T]) && !s(w, O)) {
      g(w, O, m(v, O));
    }
  }
  w.prototype = b;
  b.constructor = w;
  a(o, "Number", w);
}