"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.WorkspaceDB = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = function () {
  function e() {
    this.db = new Map();
  }
  e.prototype.add = function (e) {
    this.db.set(e.id, e);
  };
  e.prototype.remove = function (e) {
    return this.db.delete(e.id);
  };
  e.prototype.get = function (e) {
    return this.db.get(e);
  };
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.WorkspaceDB = o;