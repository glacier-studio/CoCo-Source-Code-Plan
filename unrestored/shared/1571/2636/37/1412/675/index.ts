/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：675
 */

"use strict"

for (var r = require(/* 689 */"./689"), i = [], o = 0; o < 256; ++o) {
  i.push((o + 256).toString(16).substr(1))
}
exports.a = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0
  var n = (i[e[t + 0]] + i[e[t + 1]] + i[e[t + 2]] + i[e[t + 3]] + "-" + i[e[t + 4]] + i[e[t + 5]] + "-" + i[e[t + 6]] + i[e[t + 7]] + "-" + i[e[t + 8]] + i[e[t + 9]] + "-" + i[e[t + 10]] + i[e[t + 11]] + i[e[t + 12]] + i[e[t + 13]] + i[e[t + 14]] + i[e[t + 15]]).toLowerCase()
  if (!r.a(n)) {
    throw TypeError("Stringified UUID is invalid")
  }
  return n
}
