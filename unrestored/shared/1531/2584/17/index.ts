"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.vec2 = exports.I = exports.BU = exports.Blink = void 0;
var r = require("../1001/93");
var i = (0, r.__importStar)(require("./533"));
exports.I = i;
var o = require("./640/index");
var a = require("./642");
var s = require("./2104/index");
var c = require("./1322").version;
console.log("%c\u2b50\ufe0f Codemao Blink - v" + c + " \u2b50\ufe0f", '\n  color: #FFDB29;\n  text-shadow: 0 1px 0 #BF7000;\n  padding: 140px 10px 20px 35px;\n  background: no-repeat left / 150px 150px url("http://kn-cdn.codemao.cn/blink/blink-main-compressed.jpeg");\n  ');
var u = (0, o.get_instance)();
(0, s.bind_di_modules)(u);
exports.Blink = u.get(a.BINDING.Blink);
window.Blockly = exports.Blink;
exports.BU = (0, r.__importStar)(require("./497/index"));
var l = require("./259");
Object.defineProperty(exports, "vec2", {
  enumerable: !0,
  get: function () {
    return l.vec2;
  }
});