"use strict";

function r() {
  var e = require("./2804/index");
  r = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.resolveBrowserslistConfigFile = function (e, t) {
  return;
};
exports.resolveTargets = function (e, t) {
  var n = e.targets;
  if ("string" === typeof n || Array.isArray(n)) {
    n = {
      browsers: n
    };
  }
  if (n && n.esmodules) {
    n = Object.assign({}, n, {
      esmodules: "intersect"
    });
  }
  return (0, r().default)(n, {
    ignoreBrowserslistConfig: !0,
    browserslistEnv: e.browserslistEnv
  });
};