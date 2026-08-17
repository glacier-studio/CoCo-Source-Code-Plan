/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：443
 */

module.exports = function (e) {
  if ("function" != typeof e) {
    throw TypeError(String(e) + " is not a function")
  }
  return e
}
