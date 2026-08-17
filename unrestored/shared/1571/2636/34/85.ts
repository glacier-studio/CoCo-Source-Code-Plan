/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：85
 */

"use strict"

export { s as c }
export { c as b }
export { l as e }
export { u as d }
export { d as a }
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../37/index"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_type from /* 78 */"../../../../../src/shared/widget/custom/type"
function s(e) {
  return "".concat(e, ".__widgetName")
}
function c(e, t) {
  return "".concat(e, ".").concat(t)
}
function l(e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var n = {}
  var a = s(e$type)
  n[a] = e.title
  e.properties.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    var /* [auto-meaningful-name] */e$label = e.label
    var i = c(e$type, e$key)
    n[i] = e$label
  })
  var l = Module_37.b()
  var u = Module_11.a({}, l, n)
  Src_shared_ui_language.a(u)
}
function u(e, t) {
  for (var n in t) {
    var r = t[n]
    var i = {}
    var a = s(e.type)
    for (var l in i[a] = r[e.title], r) {
      i[c(e.type, l)] = r[l]
    }
    t[n] = i
  }
  Src_shared_ui_language.a(t)
}
function d(e, t, n) {
  if (Src_shared_widget_custom_type.d(e)) {
    return t
  }
  var r = "".concat(e, ".").concat(t)
  var s = Module_37.b()
  return Src_shared_ui_language.c(s, r, n)
}
export default d
