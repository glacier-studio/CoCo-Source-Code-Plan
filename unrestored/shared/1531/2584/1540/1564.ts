"use strict";

var r = require("./1633/86/index");
var o = require("./1563/1216");
var i = require("./1731/309");
var a = require("./1735/257");
var s = require("./1734/439");
var c = require("./1557/821/index");
r({
  target: "Array",
  proto: !0
}, {
  flatMap: function (e) {
    var t;
    var n = i(this);
    var r = a(n.length);
    s(e);
    (t = c(n, 0)).length = o(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0);
    return t;
  }
});