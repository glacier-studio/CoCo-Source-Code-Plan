/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：4
 */

"use strict"

export { a as e }
export { s as d }
export { l as k }
export { u as n }
export { d as l }
export { p as j }
export { f as i }
export { h }
export { m as g }
export { g as o }
export { _ as s }
export { v as r }
export { b as m }
export { y as f }
export { _param_ as a }
export { O as p }
export { w as q }
export { C as c }
export { T as b }
export { S as t }
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Module_125 from /* 125 */"../../../../src/shared/packages/@crc/blink/src/core/di"
function a(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  return {
    alt: "*",
    src: e,
    type: "field_icon",
    is_head: t
  }
}
function s(e, t, n) {
  return {
    type: "field_image",
    src: "".concat(e),
    width: t || "%{BKY_BLOCK_TYPE_ICON_WIDTH}",
    height: n || "%{BKY_BLOCK_TYPE_ICON_WIDTH}"
  }
}
function c(e) {
  return e && e.length ? e.join(", ") : ""
}
function l(e, t) {
  var n = e.map(function (e, t) {
    return e || "_unset_".concat(t)
  })
  return "async function(".concat(c(n), ") {").concat(t, "}")
}
function u(e, t, n, r) {
  var o = arguments.length > 4 && undefined !== arguments[4] && arguments[4]
  var i = c(t)
  var a = c(r)
  var s = o ? "CocoExtension." : "Coco."
  var l = "".concat(s).concat(e, "(").concat(i)
  if (n && null !== n) {
    var u = t && t.length ? ", " : ""
    l += "".concat(u, " async function(").concat(a, ") {\n").concat(n, "}")
  }
  return l + ");\n"
}
function d(e, t, n) {
  var r = arguments.length > 4 && undefined !== arguments[4] && arguments[4]
  var o = JSON.stringify({
    blockId: t.id,
    blockType: t.type,
    screenId: n.getDynamicValue("__CURRENT_SCREEN_ID__")
  })
  var i = "await ".concat("Coco.", "withContextAsync(async ()=> { ").concat(r ? "return" : "", " ").concat(e, " }, ").concat(o, ")").concat(r ? "" : ";", " ")
  if (e.endsWith("\n")) {
    i += "\n"
  }
  return i
}
function p(e, t, n, r) {
  var o = arguments.length > 4 && undefined !== arguments[4] && arguments[4]
  var i = t ? c(t) : ""
  var a = o ? "CocoExtension." : "Coco."
  var s = "await ".concat(a).concat(e, "(").concat(i)
  var l = c(r)
  if (n && null !== n) {
    var u = t && t.length ? ", " : ""
    s += "".concat(u, " async function(").concat(l, ") {\n").concat(n, "}")
  }
  return s + ");\n"
}
function f(e, t, n, r) {
  var o = "await ".concat(e, "(")
  if (t) {
    o += "async function(".concat(c(r), ") {\n").concat(t, "}")
  }
  if (n) {
    o += "".concat(t ? ", " : "").concat(c(n))
  }
  return o + ");\n"
}
function h(e, t) {
  return "/* ".concat(Object.entries(t).map(function (e) {
    var t = Module_10.a(e, 2)
    var n = t[0]
    var o = t[1]
    return "".concat(n, "=").concat(o)
  }).join(";"), " */ ").concat(e)
}
function m(e, t) {
  return "async function () {\n    if (typeof (".concat(e, ") === \"boolean\") {\n      return ((").concat(e, ") === ").concat(t, ");\n    } else if (typeof (").concat(e, ") === \"number\" && ((").concat(e, ") === 0)) {\n      return (false === ").concat(t, ");\n    }\n    return (true === ").concat(t, ")\n  }")
}
function g(e) {
  return JSON.stringify(e)
}
function _(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2]
  var r = t ? c(t) : ""
  var o = n ? "CocoExtension." : "Coco."
  return "".concat(o).concat(e, "(").concat(r, ")")
}
function v(e, t) {
  var n = t ? c(t) : ""
  return "await ".concat("Coco.").concat(e, "(").concat(n, ")")
}
function b(e, t, n) {
  var r = t ? c(t) : ""
  var o = "".concat("Coco.").concat(e, "(").concat(r)
  if (n && null !== n) {
    var i = t && t.length ? ", " : ""
    o += "".concat(i, " asyncScheduler.plan(async function() {\n").concat(n, "})")
  }
  return o + ");\n"
}
function y(e, t) {
  var n = encodeURI(e).replace(/%/g, "$")
  return "$" + t.replace(/-/g, "$") + "_" + n
}
var /* [auto-meaningful-name] */_param_ = "_param_"
var O = Src_shared_packages_Crc_blink_src_index.Blink.di_container.get(Module_125.BINDING.MutationAddButton)
var w = Src_shared_packages_Crc_blink_src_index.Blink.di_container.get(Module_125.BINDING.MutationRemoveButton)
var C = Src_shared_packages_Crc_blink_src_index.Blink.di_container.get(Module_125.BINDING.ChangeEvent)
function T(e, t, n, r) {
  if (!this.get_input(e)) {
    var /* [auto-meaningful-name] */this$rendered = this.rendered
    this.rendered = false
    var a = t()
    if (this$rendered) {
      this.inputList.forEach(function (e) {
        return e.init()
      })
      this.render(true)
    }
    if (this.rendered) {
      this.cacheId[e] = this.cacheId[e] || Src_shared_packages_Crc_blink_src_index.Blink.utils.gen_uid()
    }
    if (this.cacheId[e]) {
      var /* [auto-meaningful-name] */a$connection
      var /* [auto-meaningful-name] */a$connection1
      var l = Src_shared_packages_Crc_blink_src_index.Blink.utils.string_to_dom(n)
      l.setAttribute("id", this.cacheId[e])
      if (undefined !== r && l.firstElementChild) {
        l.firstElementChild.textContent = r
      }
      if (!(null === (a$connection = a.connection) || undefined === a$connection)) {
        a$connection.set_shadow_dom(l)
      }
      if (!(null === (a$connection1 = a.connection) || undefined === a$connection1)) {
        a$connection1.respawn_shadow()
      }
      if (Src_shared_packages_Crc_blink_src_index.Blink.events.is_enabled()) {
        var u = C("mutation", {
          block: this,
          old_value: undefined,
          new_value: "1"
        })
        Src_shared_packages_Crc_blink_src_index.Blink.events.fire(u)
      }
      this.rendered = this$rendered
    }
  }
}
function S(e, t, n) {
  var /* [auto-meaningful-name] */i$connection
  var i = this.get_input(e)
  if (i) {
    var a
    var s = null === (i$connection = i.connection) || undefined === i$connection ? undefined : i$connection.targetBlock()
    if (s && s.is_shadow()) {
      this.cacheId[e] = s.id
      a = s.get_field_value(t) || "1"
    } else {
      var /* [auto-meaningful-name] */i$connection1
      var l
      var u = null === (i$connection1 = i.connection) || undefined === i$connection1 ? undefined : i$connection1.get_shadow_dom()
      this.cacheId[e] = (null === u || undefined === u ? undefined : u.getAttribute("id")) || Src_shared_packages_Crc_blink_src_index.Blink.utils.gen_uid()
      a = (null === u || undefined === u || null === (l = u.querySelector("field[name=\"".concat(t, "\"]"))) || undefined === l ? undefined : l.textContent) || "1"
    }
    var /* [auto-meaningful-name] */this$rendered = this.rendered
    this.rendered = false
    n()
    if (this$rendered) {
      this.inputList.forEach(function (e) {
        return e.init()
      })
      this.render(true)
    }
    if (Src_shared_packages_Crc_blink_src_index.Blink.events.is_enabled()) {
      var p = C("mutation", {
        block: this,
        old_value: a,
        new_value: undefined
      })
      Src_shared_packages_Crc_blink_src_index.Blink.events.fire(p)
    }
    this.rendered = this$rendered
  }
}
export default _param_
