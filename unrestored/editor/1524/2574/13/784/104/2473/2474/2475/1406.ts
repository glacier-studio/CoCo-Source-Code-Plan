(function (e) {
  var r = require("../../../../../254/2523/1413/2520/499/index");
  var i = t && !t.nodeType && t;
  var o = i && "object" == typeof e && e && !e.nodeType && e;
  var a = o && o.exports === i ? r.Buffer : void 0;
  var s = a ? a.allocUnsafe : void 0;
  e.exports = function (e, t) {
    if (t) {
      return e.slice();
    }
    var n = e.length;
    var r = s ? s(n) : new e.constructor(n);
    e.copy(r);
    return r;
  };
}).call(this, require("../../../../../../31/571")(e));