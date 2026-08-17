/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1403
 */

"use strict"

module.exports = {
  format: function (e) {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
      n[r - 1] = arguments[r]
    }
    return e.replace(/%([sdifj])/g, function () {
      for (var /* [auto-meaningful-name] */arguments$length1 = arguments.length, t = new Array(arguments$length1), r = 0; r < arguments$length1; r++) {
        t[r] = arguments[r]
      }
      t[0]
      var i = t[1]
      var o = n.shift()
      if ("f" === i) {
        return o.toFixed(6)
      }
      if ("j" === i) {
        return JSON.stringify(o)
      }
      if ("s" === i && "object" === typeof o) {
        var a = o.constructor !== Object ? o.constructor.name : ""
        return "".concat(a, " {}").trim()
      }
      return o.toString()
    })
  },
  inspect: function (e) {
    switch (typeof e) {
      case "string":
        if (e.includes("'")) {
          if (!e.includes("\"")) {
            return "\"".concat(e, "\"")
          }
          if (!e.includes("`") && !e.includes("${")) {
            return "`".concat(e, "`")
          }
        }
        return "'".concat(e, "'")
      case "number":
        return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e
      case "bigint":
        return "".concat(String(e), "n")
      case "boolean":
      case "undefined":
        return String(e)
      case "object":
        return "{}"
    }
  }
}
