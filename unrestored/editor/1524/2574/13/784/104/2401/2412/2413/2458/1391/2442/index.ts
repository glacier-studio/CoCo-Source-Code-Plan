import * as r from "../../../../../../../../254/2503/2504/2505/972/index";
import * as i from "./1392/index";
import * as o from "./2448/index";
import * as a from "./2451";
import * as s from "../../../../../../2473/2474/2475/977/index";
import * as c from "../../../../446";
import * as u from "../../../../../../2473/2474/2475/970/index";
import * as l from "../../../../../../../../254/2503/2504/2505/2506/1142/index";
var f = "[object Object]";
var h = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n, d, p, _) {
  var A = c(e);
  var g = c(t);
  var v = A ? "[object Array]" : s(e);
  var m = g ? "[object Array]" : s(t);
  var y = (v = "[object Arguments]" == v ? f : v) == f;
  var b = (m = "[object Arguments]" == m ? f : m) == f;
  var w = v == m;
  if (w && u(e)) {
    if (!u(t)) {
      return !1;
    }
    A = !0;
    y = !1;
  }
  if (w && !y) {
    if (!_) {
      _ = new r();
    }
    return A || l(e) ? i(e, t, n, d, p, _) : o(e, t, v, n, d, p, _);
  }
  if (!(1 & n)) {
    var E = y && h.call(e, "__wrapped__");
    var x = b && h.call(t, "__wrapped__");
    if (E || x) {
      var C = E ? e.value() : e;
      var O = x ? t.value() : t;
      if (!_) {
        _ = new r();
      }
      return p(C, O, n, d, _);
    }
  }
  return !!w && (_ || (_ = new r()), a(e, t, n, d, p, _));
};