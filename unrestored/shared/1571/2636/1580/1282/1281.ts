/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1281
 */

var r = require(/* 168 */"../1648/168")
var o = require(/* 246 */"../1782/246/index")
var i = require(/* 533 */"../1724/533")
var a = o("iterator")
module.exports = !r(function () {
  var e = new URL("b?a=1&b=2&c=3", "http://a")
  var /* [auto-meaningful-name] */e$searchParams = e.searchParams
  var n = ""
  e.pathname = "c%20d"
  e$searchParams.forEach(function (e, r) {
    e$searchParams.delete("b")
    n += r + e
  })
  return i && !e.toJSON || !e$searchParams.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== e$searchParams.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e$searchParams[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", undefined).host
})
