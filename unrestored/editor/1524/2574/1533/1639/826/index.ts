import * as r from "../../1659/241";
import * as o from "../../1738/1214/1063";
import * as i from "../../1728/257";
import * as a from "../../1250/632";
import * as s from "../../1250/933";
import * as c from "../../1250/823";
import * as l from "./1215";
var u = function (e, t) {
  this.stopped = e;
  this.result = t;
};
module.exports = function (e, t, n) {
  var d;
  var p;
  var f;
  var h;
  var m;
  var g;
  var _;
  var v = n && n.that;
  var b = !(!n || !n.AS_ENTRIES);
  var y = !(!n || !n.IS_ITERATOR);
  var E = !(!n || !n.INTERRUPTED);
  var O = a(t, v, 1 + b + E);
  var w = function (e) {
    if (d) {
      l(d, "normal", e);
    }
    return new u(!0, e);
  };
  var C = function (e) {
    return b ? (r(e), E ? O(e[0], e[1], w) : O(e[0], e[1])) : E ? O(e, w) : O(e);
  };
  if (y) {
    d = e;
  } else {
    if ("function" != typeof (p = c(e))) {
      throw TypeError("Target is not iterable");
    }
    if (o(p)) {
      for (f = 0, h = i(e.length); h > f; f++) {
        if ((m = C(e[f])) && m instanceof u) {
          return m;
        }
      }
      return new u(!1);
    }
    d = s(e, p);
  }
  for (g = d.next; !(_ = g.call(d)).done;) {
    try {
      m = C(_.value);
    } catch (T) {
      l(d, "throw", T);
    }
    if ("object" == typeof m && m && m instanceof u) {
      return m;
    }
  }
  return new u(!1);
};