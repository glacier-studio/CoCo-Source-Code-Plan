"use strict";

function r(e) {
  var t = e.theme;
  var n = e.name;
  var r = e.props;
  if (!t || !t.props || !t.props[n]) {
    return r;
  }
  var i;
  var o = t.props[n];
  for (i in o) if (void 0 === r[i]) {
    r[i] = o[i];
  }
  return r;
}
export { r as a };
export default r;