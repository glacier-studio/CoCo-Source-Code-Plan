"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.BlockEvent = void 0;
var r = require("../../../1001/93");
var i = function (e) {
  function t(t) {
    var n = e.call(this) || this;
    var r = t.get_workspace();
    n._block_id = t.id;
    return void 0 == r ? (console.error("Event block workspace not found."), n) : (n._workspace_id = r.id, n);
  }
  (0, r.__extends)(t, e);
  t.prototype.get_block_id = function () {
    return this._block_id;
  };
  return t;
}(require("../2117/840").BaseEvent);
exports.BlockEvent = i;