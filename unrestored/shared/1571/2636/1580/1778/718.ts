/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：718
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 827 */"../1581/827")
var i = require(/* 231 */"../1282/231")
var a = require(/* 334 */"../1648/334")
var /* [auto-meaningful-name] */require_300_$$_1648_300_index$f = require(/* 300 */"../1648/300/index").f
var c = require(/* 635 */"../1648/635")
var l = require(/* 1083 */"../1581/1083")
var u = require(/* 826 */"../1581/826")
var d = require(/* 837 */"../1704/837")
var p = false
var f = u("meta")
var h = 0
var m = Object.isExtensible || function () {
  return true
}
var g = function (e) {
  require_300_$$_1648_300_index$f(e, f, {
    value: {
      objectID: "O" + h++,
      weakData: {}
    }
  })
}
var _ = module.exports = {
  enable: function () {
    _.enable = function () {}
    p = true
    var e = c.f
    var /* [auto-meaningful-name] */$splice = [].splice
    var n = {}
    n[f] = 1
    if (e(n).length) {
      c.f = function (n) {
        for (var r = e(n), o = 0, /* [auto-meaningful-name] */r$length = r.length; o < r$length; o++) {
          if (r[o] === f) {
            $splice.call(r, o, 1)
            break
          }
        }
        return r
      }
      r({
        target: "Object",
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: l.f
      })
    }
  },
  fastKey: function (e, t) {
    if (!i(e)) {
      return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e
    }
    if (!a(e, f)) {
      if (!m(e)) {
        return "F"
      }
      if (!t) {
        return "E"
      }
      g(e)
    }
    return e[f].objectID
  },
  getWeakData: function (e, t) {
    if (!a(e, f)) {
      if (!m(e)) {
        return true
      }
      if (!t) {
        return false
      }
      g(e)
    }
    return e[f].weakData
  },
  onFreeze: function (e) {
    if (d && p && m(e) && !a(e, f)) {
      g(e)
    }
    return e
  }
}
o[f] = true
