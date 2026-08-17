/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：655__part-1
 */

"use strict"

var o
var r
import * as /* [auto-meaningful-name] */Module_1032 from /* 1032 */"../../37/1412/1032"
import * as /* [auto-meaningful-name] */Module_675 from /* 675 */"../../37/1412/675/index"
var s = 0
var c = 0
var l = function (e, t, n) {
  var l = t && n || 0
  var u = t || new Array(16)
  var d = (e = e || {}).node || r
  var p = undefined !== e.clockseq ? e.clockseq : o
  if (null == d || null == p) {
    var f = e.random || (e.rng || Module_1032.a)()
    if (null == d) {
      d = r = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]
    }
    if (null == p) {
      p = o = 16383 & (f[6] << 8 | f[7])
    }
  }
  var h = undefined !== e.msecs ? e.msecs : Date.now()
  var m = undefined !== e.nsecs ? e.nsecs : c + 1
  var g = h - s + (m - c) / 1e4
  if (g < 0 && undefined === e.clockseq) {
    p = p + 1 & 16383
  }
  if ((g < 0 || h > s) && undefined === e.nsecs) {
    m = 0
  }
  if (m >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
  }
  s = h
  c = m
  o = p
  var _ = (1e4 * (268435455 & (h += 122192928e5)) + m) % 4294967296
  u[l++] = _ >>> 24 & 255
  u[l++] = _ >>> 16 & 255
  u[l++] = _ >>> 8 & 255
  u[l++] = 255 & _
  var v = h / 4294967296 * 1e4 & 268435455
  u[l++] = v >>> 8 & 255
  u[l++] = 255 & v
  u[l++] = v >>> 24 & 15 | 16
  u[l++] = v >>> 16 & 255
  u[l++] = p >>> 8 | 128
  u[l++] = 255 & p
  for (var b = 0; b < 6; ++b) {
    u[l + b] = d[b]
  }
  return t || Module_675.a(u)
}
export { l }
