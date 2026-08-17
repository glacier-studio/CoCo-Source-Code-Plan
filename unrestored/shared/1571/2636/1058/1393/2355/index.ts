/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2355
 */

"use strict"

function r() {
  if (!r.quiet) {
    for (var e = require(/* 1129 */"./1129/index"), /* [auto-meaningful-name] */e$inspect = e.inspect, i = function (e) {
        return "string" === typeof e ? e : e$inspect(e, {
          depth: 10,
          colors: true
        })
      }, o = Array(r.prefix).fill("  ").join(""), /* [auto-meaningful-name] */arguments$length = arguments.length, s = new Array(arguments$length), c = 0; c < arguments$length; c++) {
      s[c] = arguments[c]
    }
    console.log(o + s.map(i).join(" "))
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = r
r.quiet = true
r.prefix = 0
