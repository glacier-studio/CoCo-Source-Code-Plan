import * as r from "./1626/86/index";
import * as o from "./935/437";
import * as i from "./1728/257";
import * as a from "./1738/310";
r({
  target: "String",
  stat: !0
}, {
  raw: function (e) {
    for (var t = o(e.raw), n = i(t.length), r = arguments.length, s = [], c = 0; n > c;) {
      s.push(a(t[c++]));
      if (c < r) {
        s.push(a(arguments[c]));
      }
    }
    return s.join("");
  }
});