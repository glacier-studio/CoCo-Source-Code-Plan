var r = require("../1641/1065");
var o = require("../1608/705");
var i = require("../1742/247/index")("toStringTag");
var a = "Arguments" == o(function () {
  return arguments;
}());
module.exports = r ? o : function (e) {
  var t;
  var n;
  var r;
  return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
    try {
      return e[t];
    } catch (n) {}
  }(t = Object(e), i)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r;
};