import * as r from "./832/index";
import * as i from "../../../1436/1830/638";
module.exports = function (e) {
  if (!i(e)) {
    return !1;
  }
  var t = r(e);
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
};