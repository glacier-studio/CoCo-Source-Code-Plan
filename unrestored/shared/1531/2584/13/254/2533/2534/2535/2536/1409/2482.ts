var r = require("../../../../../../785/104/2411/2422/2481/762/index");
module.exports = function (e, t) {
  return function (n, i) {
    if (null == n) {
      return n;
    }
    if (!r(n)) {
      return e(n, i);
    }
    for (var o = n.length, a = t ? o : -1, s = Object(n); (t ? a-- : ++a < o) && !1 !== i(s[a], a, s);) {
      ;
    }
    return n;
  };
};