"use strict";

import * as r from "../../../../../../2873/2721/805/index";
export default (function (e, t, n, i) {
  return 1 === n.length && l(n[0]) && o(n[0].argument, {
    name: "arguments"
  }) ? i ? c(p(e, s("apply"), !1, !0), [t, n[0].argument], !1) : a(u(e, s("apply")), [t, n[0].argument]) : i ? c(p(e, s("call"), !1, !0), [t].concat(r(n)), !1) : a(u(e, s("call")), [t].concat(r(n)));
});
import * as i from "../../../../2623/index";
var a = i.callExpression;
var s = i.identifier;
var o = i.isIdentifier;
var l = i.isSpreadElement;
var u = i.memberExpression;
var c = i.optionalCallExpression;
var p = i.optionalMemberExpression;