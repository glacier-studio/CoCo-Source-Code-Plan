import * as r from "../../../1437/1087/831";
import * as i from "../../../1437/835/index";
import * as o from "./1262";
import * as a from "../../1830/638";
module.exports = function (e, t, n) {
  if (!a(n)) {
    return !1;
  }
  var s = typeof t;
  return !!("number" == s ? i(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e);
};