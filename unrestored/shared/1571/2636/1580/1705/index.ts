/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1705
 */

var r = require(/* 86 */"../1650/86/index")
var o = require(/* 240 */"../1282/240")
var i = require(/* 231 */"../1282/231")
var a = require(/* 1270 */"./1270")
var s = require(/* 168 */"../1648/168")
var c = require(/* 300 */"../1648/300/index")
var l = require(/* 386 */"../1648/386")
var u = require(/* 497 */"./497")
var d = require(/* 631 */"../1282/631")
r({
  target: "Reflect",
  stat: true,
  forced: s(function () {
    var e = function () {}
    var t = c.f(new e(), "a", {
      configurable: true
    })
    return false !== Reflect.set(e.prototype, "a", 1, t)
  })
}, {
  set: function e(t, n, r) {
    var s
    var p
    var /* [auto-meaningful-name] */m$set
    var h = arguments.length < 4 ? t : arguments[3]
    var m = l.f(o(t), n)
    if (!m) {
      if (i(p = u(t))) {
        return e(p, n, r, h)
      }
      m = d(0)
    }
    if (a(m)) {
      if (false === m.writable || !i(h)) {
        return false
      }
      if (s = l.f(h, n)) {
        if (s.get || s.set || false === s.writable) {
          return false
        }
        s.value = r
        c.f(h, n, s)
      } else {
        c.f(h, n, d(0, r))
      }
    } else {
      if (undefined === (m$set = m.set)) {
        return false
      }
      m$set.call(h, r)
    }
    return true
  }
})
