"use strict";

var r = require("../1633/86/index");
var o = require("../1722/817").indexOf;
var i = require("./708");
var a = [].indexOf;
var s = !!a && 1 / [1].indexOf(1, -0) < 0;
var c = i("indexOf");
r({
  target: "Array",
  proto: !0,
  forced: s || !c
}, {
  indexOf: function (e) {
    return s ? a.apply(this, arguments) || 0 : o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});