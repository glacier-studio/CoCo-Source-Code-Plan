var r = require("../1633/86/index");
var o = require("./940");
var i = Math.cosh;
var a = Math.abs;
var s = Math.E;
r({
  target: "Math",
  stat: !0,
  forced: !i || i(710) === 1 / 0
}, {
  cosh: function (e) {
    var t = o(a(e) - 1) + 1;
    return (t + 1 / (t * s * s)) * (s / 2);
  }
});