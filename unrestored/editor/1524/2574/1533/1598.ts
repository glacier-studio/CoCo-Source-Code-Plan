import * as r from "./1626/86/index";
import * as o from "./1587/939";
var i = Math.exp;
r({
  target: "Math",
  stat: !0
}, {
  tanh: function (e) {
    var t = o(e = +e);
    var n = o(-e);
    return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (i(e) + i(-e));
  }
});