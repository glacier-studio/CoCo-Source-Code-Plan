import * as r from "../../1738/194";
module.exports = function (e, t) {
  try {
    Object.defineProperty(r, e, {
      value: t,
      configurable: !0,
      writable: !0
    });
  } catch (n) {
    r[e] = t;
  }
  return t;
};