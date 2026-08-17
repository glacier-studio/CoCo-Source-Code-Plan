/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1465
 */

for (var n = {
    glog: function (e) {
      if (e < 1) {
        throw new Error("glog(" + e + ")")
      }
      return n.LOG_TABLE[e]
    },
    gexp: function (e) {
      for (; e < 0;) {
        e += 255
      }
      for (; e >= 256;) {
        e -= 255
      }
      return n.EXP_TABLE[e]
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
  }, r = 0; r < 8; r++) {
  n.EXP_TABLE[r] = 1 << r
}
for (r = 8; r < 256; r++) {
  n.EXP_TABLE[r] = n.EXP_TABLE[r - 4] ^ n.EXP_TABLE[r - 5] ^ n.EXP_TABLE[r - 6] ^ n.EXP_TABLE[r - 8]
}
for (r = 0; r < 255; r++) {
  n.LOG_TABLE[n.EXP_TABLE[r]] = r
}
module.exports = n
