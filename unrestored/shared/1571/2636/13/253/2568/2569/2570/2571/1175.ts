/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1175
 */

var r = require(/* 727 */"../../../../../797/101/2466/2467/727/index")
var i = require(/* 479 */"../../../../2583/2584/479")
module.exports = function (e) {
  if (!i(e)) {
    return false
  }
  var t = r(e)
  return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
