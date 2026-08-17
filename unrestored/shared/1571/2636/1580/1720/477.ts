/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：477
 */

var /* [auto-meaningful-name] */Math$ceil = Math.ceil
var /* [auto-meaningful-name] */Math$floor = Math.floor
module.exports = function (e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? Math$floor : Math$ceil)(e)
}
