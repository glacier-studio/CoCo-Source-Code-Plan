"use strict";

var r = require("./1633/86/index");
var o = require("./1728/937").right;
var i = require("./1568/708");
var a = require("./1734/629");
var s = require("./1744/750");
r({
  target: "Array",
  proto: !0,
  forced: !i("reduceRight") || !s && a > 79 && a < 83
}, {
  reduceRight: function (e) {
    return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  }
});