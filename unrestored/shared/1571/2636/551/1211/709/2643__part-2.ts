/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2643__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_2674 from /* 2674 */"../269/2674"
var be = {
  set: function (e, t, n, r) {
    var i = e.get(t)
    if (!i) {
      i = new Map()
      e.set(t, i)
    }
    i.set(n, r)
  },
  get: function (e, t, n) {
    var r = e.get(t)
    return r ? r.get(n) : undefined
  },
  delete: function (e, t, n) {
    e.get(t).delete(n)
  }
}
export { be }
