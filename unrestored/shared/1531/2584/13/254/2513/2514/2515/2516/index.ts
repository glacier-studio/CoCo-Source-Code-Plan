var r = require("../1418/index");
var i = require("../../../../../785/104/2483/2484/2485/1413");
var o = require("./1416");
var a = require("../../../../../785/104/2483/2484/2485/1414");
var s = require("../../../../../785/104/2483/2484/2485/1417/index");
var c = require("./1143/index");
var u = require("../../../../../785/104/2411/2412/446");
var l = require("./2517");
var f = require("../../../../../785/104/2483/2484/2485/971/index");
var d = require("./1150");
var h = require("../../../../2528/2529/475");
var p = require("../../../../../785/104/2411/1395/index");
var _ = require("./1145/index");
var A = require("../1419");
var g = require("./2518");
module.exports = function (e, t, n, v, m, y, b) {
  var w = A(e, n);
  var E = A(t, n);
  var x = b.get(E);
  if (x) {
    r(e, n, x);
  } else {
    var C = y ? y(w, E, n + "", e, t, b) : void 0;
    var O = void 0 === C;
    if (O) {
      var k = u(E);
      var S = !k && f(E);
      var T = !k && !S && _(E);
      C = E;
      if (k || S || T) {
        if (u(w)) {
          C = w;
        } else {
          if (l(w)) {
            C = a(w);
          } else {
            if (S) {
              O = !1;
              C = i(E, !0);
            } else {
              if (T) {
                O = !1;
                C = o(E, !0);
              } else {
                C = [];
              }
            }
          }
        }
      } else {
        if (p(E) || c(E)) {
          C = w;
          if (c(w)) {
            C = g(w);
          } else {
            if (!(h(w) && !d(w))) {
              C = s(E);
            }
          }
        } else {
          O = !1;
        }
      }
    }
    if (O) {
      b.set(E, C);
      m(C, E, v, y, b);
      b.delete(E);
    }
    r(e, n, C);
  }
};