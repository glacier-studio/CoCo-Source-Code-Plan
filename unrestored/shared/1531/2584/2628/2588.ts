"use strict";

function r(e, t, n) {
  if (void 0 === n) {
    n = Error;
  }
  if (!e) {
    throw new n(t);
  }
}
export { r as a };
export default r;