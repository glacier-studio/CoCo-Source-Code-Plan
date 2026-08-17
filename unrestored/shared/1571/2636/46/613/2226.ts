/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2226
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.JsonPythonGenerator = undefined
var r = require(/* 93 */"tslib")
var i = function (e) {
  function t() {
    var t = e.call(this, "Python") || this
    t.ORDER_ATOMIC = 0
    t.ORDER_COLLECTION = 1
    t.ORDER_STRING_CONVERSION = 1
    t.ORDER_MEMBER = 2.1
    t.ORDER_FUNCTION_CALL = 2.2
    t.ORDER_EXPONENTIATION = 3
    t.ORDER_UNARY_SIGN = 4
    t.ORDER_BITWISE_NOT = 4
    t.ORDER_MULTIPLICATIVE = 5
    t.ORDER_ADDITIVE = 6
    t.ORDER_BITWISE_SHIFT = 7
    t.ORDER_BITWISE_AND = 8
    t.ORDER_BITWISE_XOR = 9
    t.ORDER_BITWISE_OR = 10
    t.ORDER_RELATIONAL = 11
    t.ORDER_LOGICAL_NOT = 12
    t.ORDER_LOGICAL_AND = 13
    t.ORDER_LOGICAL_OR = 14
    t.ORDER_CONDITIONAL = 15
    t.ORDER_LAMBDA = 16
    t.ORDER_NONE = 99
    t.ORDER_EQUALITY = 9
    t.ORDER_OVERRIDES = [[t.ORDER_FUNCTION_CALL, t.ORDER_MEMBER], [t.ORDER_FUNCTION_CALL, t.ORDER_FUNCTION_CALL], [t.ORDER_MEMBER, t.ORDER_MEMBER], [t.ORDER_MEMBER, t.ORDER_FUNCTION_CALL], [t.ORDER_LOGICAL_NOT, t.ORDER_LOGICAL_NOT], [t.ORDER_LOGICAL_AND, t.ORDER_LOGICAL_AND], [t.ORDER_LOGICAL_OR, t.ORDER_LOGICAL_OR]]
    return t
  }
  (0, r.__extends)(t, e)
  t.prototype.scrub_naked_value = function (e) {
    return e + "\n"
  }
  t.prototype.quote = function (e) {
    var t = "'"
    if (-1 !== (e = e.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/\%/g, "\\%")).indexOf("'")) {
      if (-1 === e.indexOf("\"")) {
        t = "\""
      } else {
        e = e.replace(/'/g, "\\'")
      }
    }
    return t + e + t
  }
  t.prototype.add_comment_prefix = function (e) {
    return this.prefix_lines(e, "# ")
  }
  return t
}(require(/* 1356 */"./2218/1356").JsonGenerator)
exports.JsonPythonGenerator = i
