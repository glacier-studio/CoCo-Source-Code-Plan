import * as r from "../../../../../3262/3188/2658/2679/356/1098";
import * as i from "../../../../../3262/3188/2658/2679/357/1295";
function o(t, n, a) {
  if (i()) {
    module.exports = o = Reflect.construct;
  } else {
    module.exports = o = function (e, t, n) {
      var i = [null];
      i.push.apply(i, t);
      var o = new (Function.bind.apply(e, i))();
      if (n) {
        r(o, n.prototype);
      }
      return o;
    };
  }
  return o.apply(null, arguments);
}
module.exports = o;