/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1278
 */

var r = require(/* 309 */"../1771/309")
var o = require(/* 256 */"../1775/256")
var i = require(/* 947 */"../1282/947")
var a = require(/* 835 */"../1282/835")
var s = require(/* 1085 */"../1785/1246/1085")
var c = require(/* 636 */"../1282/636")
var /* [auto-meaningful-name] */require_257_$$_1754_257_index$aTypedArrayConstructor = require(/* 257 */"../1754/257/index").aTypedArrayConstructor
module.exports = function (e) {
  var t
  var n
  var u
  var d
  var p
  var /* [auto-meaningful-name] */PIHV$next
  var h = r(e)
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  var g = arguments$length > 1 ? arguments[1] : undefined
  var _ = undefined !== g
  var v = a(h)
  if (undefined != v && !s(v)) {
    for (PIHV$next = (p = i(h, v)).next, h = []; !(d = PIHV$next.call(p)).done;) {
      h.push(d.value)
    }
  }
  for (_ && arguments$length > 2 && (g = c(g, arguments[2], 2)), n = o(h.length), u = new (require_257_$$_1754_257_index$aTypedArrayConstructor(this))(n), t = 0; n > t; t++) {
    u[t] = _ ? g(h[t], t) : h[t]
  }
  return u
}
