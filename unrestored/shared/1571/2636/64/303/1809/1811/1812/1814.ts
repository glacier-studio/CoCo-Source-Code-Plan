/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1814
 */

module.exports = function (e, t, n) {
  for (var r = (2 << Math.log(t.length - 1) / Math.LN2) - 1, i = -~(1.6 * r * n / t.length), o = "";;) {
    for (var a = e(i), s = i; s--;) {
      if ((o += t[a[s] & r] || "").length === +n) {
        return o
      }
    }
  }
}
