"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("./2340/498");
var i = require("./645");
exports.tagged = function (e, t) {
  return function (n, o, a) {
    var s = new r.Metadata(e, t);
    if ("number" === typeof a) {
      i.tagParameter(n, o, a, s);
    } else {
      i.tagProperty(n, o, s);
    }
  };
};