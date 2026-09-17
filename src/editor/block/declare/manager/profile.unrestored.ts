/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：46__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../../unrestored/shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../../unrestored/shared/1571/2636/39"
var i = function () {
  function e() {
    Module_27.a(this, e)
    this.profileMap = new Map()
  }
  Module_39.a(e, [
    {
      key: "insertBlockProfile",
      value: function (e, t) {
        this.profileMap.set(e, t)
      }
    }, {
      key: "getBlockProfileList",
      value: function () {
        var e = []
        this.profileMap.forEach(function (t) {
          return e.push(t)
        })
        return e
      }
    }
  ])
  return e
}()
export { i }
