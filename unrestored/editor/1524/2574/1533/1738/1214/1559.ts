import * as r from "../../1659/241";
import * as o from "../../1639/826/1215";
module.exports = function (e, t, n, i) {
  try {
    return i ? t(r(n)[0], n[1]) : t(n);
  } catch (a) {
    o(e, "throw", a);
  }
};