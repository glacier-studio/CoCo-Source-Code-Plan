/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1601
 */

"use strict"

var r = require(/* 86 */"./1650/86/index")
var /* [auto-meaningful-name] */require_401_$_1754_401$find = require(/* 401 */"./1754/401").find
var i = require(/* 637 */"./1598/637")
var a = true
if ("find" in []) {
  Array(1).find(function () {
    a = false
  })
}
r({
  target: "Array",
  proto: true,
  forced: a
}, {
  find: function (e) {
    return require_401_$_1754_401$find(this, e, arguments.length > 1 ? arguments[1] : undefined)
  }
})
i("find")
