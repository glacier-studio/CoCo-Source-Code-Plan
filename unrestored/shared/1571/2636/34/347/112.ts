/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：112
 */

"use strict"

export { s as d }
export { c as b }
export { l as c }
export { u as a }
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../47"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../9"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
function s(e) {
  return undefined !== c(e)
}
function c(e) {
  if ("string" === typeof e) {
    if ("" === e) {
      return e
    }
    if (Src_shared_tools_index.U(e)) {
      return e
    }
    var t = Module_48.a().getState()
    var n = t.imageFileMap.get(e)
    if (n) {
      var s = Module_9.lb(n)
      if (s) {
        return s
      }
    }
    if (e.endsWith(".svg")) {
      var c
      var /* [auto-meaningful-name] */t$iconFileMap = t.iconFileMap
      var u = Module_47.a(t$iconFileMap.values())
      try {
        for (u.s(); !(c = u.n()).done;) {
          var /* [auto-meaningful-name] */c$value = c.value
          if ("".concat(c$value.name, ".svg") === e) {
            return c$value.cdnUrl || c$value.source
          }
        }
      } catch (p) {
        u.e(p)
      } finally {
        u.f()
      }
    }
  }
}
function l(e) {
  var t = u(e)
  return Boolean(t)
}
function u(e) {
  if ("string" === typeof e) {
    var t = Module_48.a().getState()
    var /* [auto-meaningful-name] */t$iconFileMap = t.iconFileMap
    var s = t$iconFileMap.get(e)
    if (s) {
      return s
    }
    var c
    var l = Module_47.a(t$iconFileMap.values())
    try {
      for (l.s(); !(c = l.n()).done;) {
        var /* [auto-meaningful-name] */c$value = c.value
        if (c$value.name + ".svg" === e) {
          return c$value
        }
      }
    } catch (f) {
      l.e(f)
    } finally {
      l.f()
    }
    var d = t.imageFileMap.get(e)
    var p = Src_shared_tools_index.U(e) ? e : d ? Module_9.lb(d) : ""
    return ".svg" === (null === d || undefined === d ? undefined : d.extension) ? {
      id: d.id,
      name: d.id,
      source: d.source,
      cdnUrl: p || ""
    } : (null === p || undefined === p ? undefined : p.endsWith(".svg")) ? {
      id: p,
      name: p,
      cdnUrl: p
    } : p
  }
}
export default u
