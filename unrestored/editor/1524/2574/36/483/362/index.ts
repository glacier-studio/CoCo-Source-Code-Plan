"use strict";

export { c as useDrag };
export { l as useGesture };
import * as r from "./329/index";
import * as i from "../../../0/index";
import * as o from "../../../0/index";
import * as a from "./1168";
import "./1284";
import "./1285";
function s(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = arguments.length > 2 ? arguments[2] : void 0;
  var r = arguments.length > 3 ? arguments[3] : void 0;
  var i = o.a.useMemo(function () {
    return new a.a(e);
  }, []);
  if (i.applyHandlers(e, r), i.applyConfig(t, n), o.a.useEffect(i.effect.bind(i)), o.a.useEffect(function () {
    return i.clean.bind(i);
  }, []), void 0 === t.target) {
    return i.bind.bind(i);
  }
}
function c(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  Object(r.e)(r.a);
  return s({
    drag: e
  }, t, "drag");
}
function u(e) {
  e.forEach(r.e);
  return function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    var n = Object(a.b)(e, t);
    var r = n.handlers;
    var i = n.nativeHandlers;
    var o = n.config;
    return s(r, o, void 0, i);
  };
}
function l(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = u([r.a, r.d, r.f, r.g, r.c, r.b]);
  return n(e, t);
}