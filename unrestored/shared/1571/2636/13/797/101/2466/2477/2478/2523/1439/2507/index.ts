/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2507
 */

var r = require(/* 994 */"../../../../../../../../253/2568/2569/2570/994/index")
var i = require(/* 1440 */"./1440/index")
var o = require(/* 2513 */"./2513/index")
var a = require(/* 2516 */"./2516")
var s = require(/* 999 */"../../../../../../2538/2539/2540/999/index")
var c = require(/* 451 */"../../../../../2467/451")
var u = require(/* 992 */"../../../../../../../../253/2568/2569/2570/2571/992/index")
var l = require(/* 1170 */"../../../../../../../../253/2568/2569/2570/2571/1170/index")
var /* [auto-meaningful-name] */ObjectObject = "[object Object]"
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
module.exports = function (e, t, n, h, p, _) {
  var A = c(e)
  var g = c(t)
  var v = A ? "[object Array]" : s(e)
  var m = g ? "[object Array]" : s(t)
  var y = (v = "[object Arguments]" == v ? ObjectObject : v) == ObjectObject
  var b = (m = "[object Arguments]" == m ? ObjectObject : m) == ObjectObject
  var w = v == m
  if (w && u(e)) {
    if (!u(t)) {
      return false
    }
    A = true
    y = false
  }
  if (w && !y) {
    if (!_) {
      _ = new r()
    }
    return A || l(e) ? i(e, t, n, h, p, _) : o(e, t, v, n, h, p, _)
  }
  if (!(1 & n)) {
    var E = y && Object$prototype$hasOwnProperty.call(e, "__wrapped__")
    var x = b && Object$prototype$hasOwnProperty.call(t, "__wrapped__")
    if (E || x) {
      var C = E ? e.value() : e
      var O = x ? t.value() : t
      if (!_) {
        _ = new r()
      }
      return p(C, O, n, h, _)
    }
  }
  return !!w && (_ || (_ = new r()), a(e, t, n, h, p, _))
}
