import * as r from "./1401/index";
import * as i from "../../979";
module.exports = function (e, t) {
  for (var n = 0, o = (t = r(t, e)).length; null != e && n < o;) {
    e = e[i(t[n++])];
  }
  return n && n == o ? e : void 0;
};