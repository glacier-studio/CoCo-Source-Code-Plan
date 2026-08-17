/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：25
 */

"use strict"

export { a }
import * as /* [auto-meaningful-name] */Module_919 from /* 919 */"./919"
import * as /* [auto-meaningful-name] */Module_1482 from /* 1482 */"./1482"
import * as /* [auto-meaningful-name] */Module_779 from /* 779 */"../10/779"
function a(e) {
  return function (e) {
    if (Array.isArray(e)) {
      return Module_919.a(e)
    }
  }(e) || Module_1482.a(e) || Module_779.a(e) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }()
}
export default a
