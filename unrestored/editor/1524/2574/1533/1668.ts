"use strict";

import * as r from "./1676/946";
import * as o from "./1659/241";
import * as i from "./1728/257";
import * as a from "./1738/310";
import * as s from "./1676/421";
import * as c from "./1676/1076";
import * as l from "./1676/947";
r("match", function (e, t, n) {
  return [function (t) {
    var n = s(this);
    var r = void 0 == t ? void 0 : t[e];
    return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](a(n));
  }, function (e) {
    var r = o(this);
    var s = a(e);
    var u = n(t, r, s);
    if (u.done) {
      return u.value;
    }
    if (!r.global) {
      return l(r, s);
    }
    var d = r.unicode;
    r.lastIndex = 0;
    for (var p, f = [], h = 0; null !== (p = l(r, s));) {
      var m = a(p[0]);
      f[h] = m;
      if ("" === m) {
        r.lastIndex = c(s, i(r.lastIndex), d);
      }
      h++;
    }
    return 0 === h ? null : f;
  }];
});