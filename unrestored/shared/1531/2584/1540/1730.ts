"use strict";

var r = require("./1714/258/index");
var o = r.aTypedArray;
var i = r.exportTypedArrayMethod;
var a = Math.floor;
i("reverse", function () {
  for (var e, t = o(this).length, n = a(t / 2), r = 0; r < n;) {
    e = this[r];
    this[r++] = this[--t];
    this[t] = e;
  }
  return this;
});