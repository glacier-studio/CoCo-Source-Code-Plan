import * as r from "../../../../../784/104/2401/1388/718/index";
import * as i from "../../../../2518/2519/475";
module.exports = function (e) {
  if (!i(e)) {
    return !1;
  }
  var t = r(e);
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
};