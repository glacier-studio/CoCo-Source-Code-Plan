/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1810
 */

"use strict"

var r = 1
module.exports = {
  nextValue: function () {
    return (r = (9301 * r + 49297) % 233280) / 233280
  },
  seed: function (e) {
    r = e
  }
}
