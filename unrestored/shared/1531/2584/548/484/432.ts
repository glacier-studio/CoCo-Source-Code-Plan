"use strict";

export { a };
var r = require("./168");
var i = require("./111");
var o = require("./106");
function a(e, t) {
  Object(o.a)(1, arguments);
  var n = t || {};
  var a = n.locale;
  var s = a && a.options && a.options.weekStartsOn;
  var c = null == s ? 0 : Object(r.a)(s);
  var u = null == n.weekStartsOn ? c : Object(r.a)(n.weekStartsOn);
  if (!(u >= 0 && u <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var l = Object(i.a)(e);
  var f = l.getUTCDay();
  var d = (f < u ? 7 : 0) + f - u;
  l.setUTCDate(l.getUTCDate() - d);
  l.setUTCHours(0, 0, 0, 0);
  return l;
}
export default a;