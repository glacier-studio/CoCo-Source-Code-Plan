/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2366
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require(/* 448 */"../../2373/448")
var i = require(/* 582 */"../../582")
var o = require(/* 359 */"../../359")
exports.resolveInstance = function (e, t, n) {
  var a
  var s
  var c = null
  if (t.length > 0) {
    var u = t.filter(function (e) {
      return null !== e.target && e.target.type === i.TargetTypeEnum.ConstructorArgument
    }).map(n)
    s = u
    c = function (e, t, n) {
      var r = t.filter(function (e) {
        return null !== e.target && e.target.type === i.TargetTypeEnum.ClassProperty
      })
      var o = r.map(n)
      r.forEach(function (t, n) {
        var r
        r = t.target.name.value()
        var i = o[n]
        e[r] = i
      })
      return e
    }(c = new ((a = e).bind.apply(a, [undefined].concat(s)))(), t, n)
  } else {
    c = new e()
  }
  (function (e, t) {
    if (Reflect.hasMetadata(o.POST_CONSTRUCT, e)) {
      var n = Reflect.getMetadata(o.POST_CONSTRUCT, e)
      try {
        t[n.value]()
      } catch (i) {
        throw new Error(r.POST_CONSTRUCT_ERROR(e.name, i.message))
      }
    }
  })(e, c)
  return c
}
