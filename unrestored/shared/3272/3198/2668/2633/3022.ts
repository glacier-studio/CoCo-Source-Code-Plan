"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key || e.property;
  if (!e.computed && (0, r.isIdentifier)(t)) {
    t = (0, i.stringLiteral)(t.name);
  }
  return t;
};
var r = require("./2636");
var i = require("./2640/index");