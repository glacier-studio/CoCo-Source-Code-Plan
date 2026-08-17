/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：168
 */

module.exports = function (e) {
  try {
    return !!e()
  } catch (t) {
    return true
  }
}
