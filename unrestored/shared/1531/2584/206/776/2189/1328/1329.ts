"use strict";

var r = require("../../../../../../3272/3198/2668/2689/356/index");
var i = require("../../../../../../3272/3198/2668/2689/357/index");
var o = require("../../../../../../3272/3198/2668/220");
var a = require("../964");
var s = function e(t, n, r, i, a, s) {
  o(this, e);
  this.type = t;
  this.name = n;
  this.node = r;
  this.parent = i;
  this.index = a;
  this.kind = s;
};
var c = function (e) {
  r(n, e);
  var t = i(n);
  function n(e, r, i, s) {
    var c;
    o(this, n);
    (c = t.call(this, a.Parameter, e, r, null, i, null)).rest = s;
    return c;
  }
  return n;
}(s);
module.exports = {
  ParameterDefinition: c,
  Definition: s
};