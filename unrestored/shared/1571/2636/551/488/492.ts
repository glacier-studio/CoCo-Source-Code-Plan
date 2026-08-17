/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：492
 */

"use strict"

function r(e) {
  return function (t, n) {
    var r
    var i = n || {}
    if ("formatting" === (i.context ? String(i.context) : "standalone") && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth
      var a = i.width ? String(i.width) : o
      r = e.formattingValues[a] || e.formattingValues[o]
    } else {
      var /* [auto-meaningful-name] */e$defaultWidth = e.defaultWidth
      var c = i.width ? String(i.width) : e.defaultWidth
      r = e.values[c] || e.values[e$defaultWidth]
    }
    return r[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
export { r as a }
export default r
