import * as r from "../1738/272";
import * as o from "../1738/194";
import * as i from "./817";
import * as a from "./938";
import * as s from "../1735/422";
var c = require("../1534/300/index").f;
var l = require("../1534/631").f;
import * as u from "./1072";
import * as d from "../1738/310";
import * as p from "./943";
import * as f from "./1073";
import * as h from "../1738/398";
import * as m from "../1626/167";
import * as g from "../1738/332";
var _ = require("../1738/423/index").enforce;
import * as v from "./751";
import * as b from "../1735/247/index";
import * as y from "./1239";
import * as E from "./1240";
var O = b("match");
var w = o.RegExp;
var C = w.prototype;
var T = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var S = /a/g;
var I = /a/g;
var A = new w(S) !== S;
var j = f.UNSUPPORTED_Y;
var N = r && (!A || j || y || E || m(function () {
  I[O] = !1;
  return w(S) != S || w(I) == I || "/a/i" != w(S, "i");
}));
if (i("RegExp", N)) {
  for (var R = function (e, t) {
      var n;
      var r;
      var o;
      var i;
      var c;
      var l;
      var f = this instanceof R;
      var h = u(e);
      var m = void 0 === t;
      var v = [];
      var b = e;
      if (!f && h && m && e.constructor === R) {
        return e;
      }
      if ((h || e instanceof R) && (e = e.source, m && (t = "flags" in b ? b.flags : p.call(b))), e = void 0 === e ? "" : d(e), t = void 0 === t ? "" : d(t), b = e, y && "dotAll" in S && (r = !!t && t.indexOf("s") > -1) && (t = t.replace(/s/g, "")), n = t, j && "sticky" in S && (o = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, "")), E && (e = (i = function (e) {
        for (var t, n = e.length, r = 0, o = "", i = [], a = {}, s = !1, c = !1, l = 0, u = ""; r <= n; r++) {
          if ("\\" === (t = e.charAt(r))) {
            t += e.charAt(++r);
          } else if ("]" === t) {
            s = !1;
          } else if (!s) {
            switch (!0) {
              case "[" === t:
                s = !0;
                break;
              case "(" === t:
                if (T.test(e.slice(r + 1))) {
                  r += 2;
                  c = !0;
                }
                o += t;
                l++;
                continue;
              case ">" === t && c:
                if ("" === u || g(a, u)) {
                  throw new SyntaxError("Invalid capture group name");
                }
                a[u] = !0;
                i.push([u, l]);
                c = !1;
                u = "";
                continue;
            }
          }
          if (c) {
            u += t;
          } else {
            o += t;
          }
        }
        return [o, i];
      }(e))[0], v = i[1]), c = a(w(e, t), f ? this : C, R), (r || o || v.length) && (l = _(c), r && (l.dotAll = !0, l.raw = R(function (e) {
        for (var t, n = e.length, r = 0, o = "", i = !1; r <= n; r++) {
          if ("\\" !== (t = e.charAt(r))) {
            if (i || "." !== t) {
              if ("[" === t) {
                i = !0;
              } else {
                if ("]" === t) {
                  i = !1;
                }
              }
              o += t;
            } else {
              o += "[\\s\\S]";
            }
          } else {
            o += t + e.charAt(++r);
          }
        }
        return o;
      }(e), n)), o && (l.sticky = !0), v.length && (l.groups = v)), e !== b) {
        try {
          s(c, "source", "" === b ? "(?:)" : b);
        } catch (O) {}
      }
      return c;
    }, k = function (e) {
      if (!(e in R)) {
        c(R, e, {
          configurable: !0,
          get: function () {
            return w[e];
          },
          set: function (t) {
            w[e] = t;
          }
        });
      }
    }, x = l(w), D = 0; x.length > D;) {
    k(x[D++]);
  }
  C.constructor = R;
  R.prototype = C;
  h(o, "RegExp", R);
}
v("RegExp");