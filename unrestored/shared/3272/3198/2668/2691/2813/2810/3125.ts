"use strict";

var r = require("../../../../../2883/2731/806/index");
function i() {
  var e = require("../../../../1187/index");
  i = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e, t) {
  var n = i().resolve(t, e).split(i().sep);
  return new RegExp(["^"].concat(r(n.map(function (e, t) {
    var r = t === n.length - 1;
    return "**" === e ? r ? p : c : "*" === e ? r ? u : l : 0 === e.indexOf("*.") ? o + f(e.slice(1)) + (r ? s : a) : f(e) + (r ? s : a);
  }))).join(""));
};
var a = "\\".concat(i().sep);
var s = "(?:".concat(a, "|$)");
var o = "[^".concat(a, "]+");
var l = "(?:".concat(o).concat(a, ")");
var u = "(?:".concat(o).concat(s, ")");
var c = "".concat(l, "*?");
var p = "".concat(l, "*?").concat(u, "?");
function f(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}