"use strict";

var r = require("./1714/258/index").exportTypedArrayMethod;
var o = require("./1633/167");
var i = require("./1745/194").Uint8Array;
var a = i && i.prototype || {};
var s = [].toString;
var c = [].join;
if (o(function () {
  s.call({});
})) {
  s = function () {
    return c.call(this);
  };
}
var l = a.toString != s;
r("toString", s, l);