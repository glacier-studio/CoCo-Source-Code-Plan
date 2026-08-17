/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2218
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.JsonJavaScriptGenerator = undefined
var r = require(/* 93 */"tslib")
var i = function (e) {
  function t() {
    var t = e.call(this, "Javascript") || this
    t.ORDER_ATOMIC = 0
    t.ORDER_NEW = 1.1
    t.ORDER_MEMBER = 1.2
    t.ORDER_FUNCTION_CALL = 2
    t.ORDER_INCREMENT = 3
    t.ORDER_DECREMENT = 3
    t.ORDER_BITWISE_NOT = 4.1
    t.ORDER_UNARY_PLUS = 4.2
    t.ORDER_UNARY_NEGATION = 4.3
    t.ORDER_LOGICAL_NOT = 4.4
    t.ORDER_TYPEOF = 4.5
    t.ORDER_VOID = 4.6
    t.ORDER_DELETE = 4.7
    t.ORDER_DIVISION = 5.1
    t.ORDER_MULTIPLICATION = 5.2
    t.ORDER_MODULUS = 5.3
    t.ORDER_SUBTRACTION = 6.1
    t.ORDER_ADDITION = 6.2
    t.ORDER_BITWISE_SHIFT = 7
    t.ORDER_RELATIONAL = 8
    t.ORDER_IN = 8
    t.ORDER_INSTANCEOF = 8
    t.ORDER_EQUALITY = 9
    t.ORDER_BITWISE_AND = 10
    t.ORDER_BITWISE_XOR = 11
    t.ORDER_BITWISE_OR = 12
    t.ORDER_LOGICAL_AND = 13
    t.ORDER_LOGICAL_OR = 14
    t.ORDER_CONDITIONAL = 15
    t.ORDER_ASSIGNMENT = 16
    t.ORDER_COMMA = 17
    t.ORDER_NONE = 99
    t.ORDER_OVERRIDES = [[t.ORDER_FUNCTION_CALL, t.ORDER_MEMBER], [t.ORDER_FUNCTION_CALL, t.ORDER_FUNCTION_CALL], [t.ORDER_MEMBER, t.ORDER_MEMBER], [t.ORDER_MEMBER, t.ORDER_FUNCTION_CALL], [t.ORDER_LOGICAL_NOT, t.ORDER_LOGICAL_NOT], [t.ORDER_MULTIPLICATION, t.ORDER_MULTIPLICATION], [t.ORDER_ADDITION, t.ORDER_ADDITION], [t.ORDER_LOGICAL_AND, t.ORDER_LOGICAL_AND], [t.ORDER_LOGICAL_OR, t.ORDER_LOGICAL_OR]]
    return t
  }
  (0, r.__extends)(t, e)
  t.prototype.scrub_naked_value = function (e) {
    return e + ";\n"
  }
  t.prototype.quote = function (e) {
    return "'" + (e = e.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'")) + "'"
  }
  t.prototype.add_comment_prefix = function (e) {
    return this.prefix_lines(e, "// ")
  }
  return t
}(require(/* 1356 */"./1356").JsonGenerator)
exports.JsonJavaScriptGenerator = i
