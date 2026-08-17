/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：401
 */

var r = require(/* 636 */"../1282/636")
var o = require(/* 825 */"../1609/825")
var i = require(/* 309 */"../1771/309")
var a = require(/* 256 */"../1775/256")
var s = require(/* 832 */"../1597/832/index")
var /* [auto-meaningful-name] */$push = [].push
var l = function (e) {
  var t = 1 == e
  var n = 2 == e
  var l = 3 == e
  var u = 4 == e
  var d = 6 == e
  var p = 7 == e
  var f = 5 == e || d
  return function (h, m, g, _) {
    for (var v, b, y = i(h), E = o(y), O = r(m, g, 3), w = a(E.length), C = 0, T = _ || s, S = t ? T(h, w) : n || p ? T(h, 0) : undefined; w > C; C++) {
      if ((f || C in E) && (b = O(v = E[C], C, y), e)) {
        if (t) {
          S[C] = b
        } else if (b) {
          switch (e) {
            case 3:
              return true
            case 5:
              return v
            case 6:
              return C
            case 2:
              $push.call(S, v)
          }
        } else {
          switch (e) {
            case 4:
              return false
            case 7:
              $push.call(S, v)
          }
        }
      }
    }
    return d ? -1 : l || u ? u : S
  }
}
module.exports = {
  forEach: l(0),
  map: l(1),
  filter: l(2),
  some: l(3),
  every: l(4),
  find: l(5),
  findIndex: l(6),
  filterReject: l(7)
}
