"use strict";

function r(e) {
  if (null === e || !0 === e || !1 === e) {
    return NaN;
  }
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
export { r as a };
export default r;