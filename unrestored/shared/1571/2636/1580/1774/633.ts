/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：633
 */

var r
var o
var i = require(/* 194 */"../1648/194")
var a = require(/* 634 */"./1253/634")
var /* [auto-meaningful-name] */i$process = i.process
var /* [auto-meaningful-name] */i$Deno = i.Deno
var l = i$process && i$process.versions || i$Deno && i$Deno.version
var u = l && l.v8
if (u) {
  o = (r = u.split("."))[0] < 4 ? 1 : r[0] + r[1]
} else {
  if (a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/))) {
    o = r[1]
  }
}
module.exports = o && +o
