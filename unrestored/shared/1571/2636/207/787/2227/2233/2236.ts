/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2236
 */

"use strict"

var r = require(/* 180 */"../../180")
var i = require(/* 204 */"../../204")
var o = require(/* 283 */"../../../../1058/1393/1143/283/index")
var a = require(/* 284 */"../../../../1058/1393/1143/284/index")
var /* [auto-meaningful-name] */require_1130_$_1130_index$Syntax = require(/* 1130 */"./1130/index").Syntax
var c = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, i, o) {
    var a
    r(this, n);
    (a = t.call(this, null, e)).rootPattern = i
    a.callback = o
    a.assignments = []
    a.rightHandNodes = []
    a.restElements = []
    return a
  }
  i(n, [
    {
      key: "Identifier",
      value: function (e) {
        var /* [auto-meaningful-name] */this$restElements
        var n = (this$restElements = this.restElements)[this$restElements.length - 1] || null
        this.callback(e, {
          topLevel: e === this.rootPattern,
          rest: null !== n && undefined !== n && n.argument === e,
          assignments: this.assignments
        })
      }
    }, {
      key: "Property",
      value: function (e) {
        if (e.computed) {
          this.rightHandNodes.push(e.key)
        }
        this.visit(e.value)
      }
    }, {
      key: "ArrayPattern",
      value: function (e) {
        for (var t = 0, /* [auto-meaningful-name] */e$elements$length = e.elements.length; t < e$elements$length; ++t) {
          var r = e.elements[t]
          this.visit(r)
        }
      }
    }, {
      key: "AssignmentPattern",
      value: function (e) {
        this.assignments.push(e)
        this.visit(e.left)
        this.rightHandNodes.push(e.right)
        this.assignments.pop()
      }
    }, {
      key: "RestElement",
      value: function (e) {
        this.restElements.push(e)
        this.visit(e.argument)
        this.restElements.pop()
      }
    }, {
      key: "MemberExpression",
      value: function (e) {
        if (e.computed) {
          this.rightHandNodes.push(e.property)
        }
        this.rightHandNodes.push(e.object)
      }
    }, {
      key: "SpreadElement",
      value: function (e) {
        this.visit(e.argument)
      }
    }, {
      key: "ArrayExpression",
      value: function (e) {
        e.elements.forEach(this.visit, this)
      }
    }, {
      key: "AssignmentExpression",
      value: function (e) {
        this.assignments.push(e)
        this.visit(e.left)
        this.rightHandNodes.push(e.right)
        this.assignments.pop()
      }
    }, {
      key: "CallExpression",
      value: function (e) {
        var t = this
        e.arguments.forEach(function (e) {
          t.rightHandNodes.push(e)
        })
        this.visit(e.callee)
      }
    }
  ], [
    {
      key: "isPattern",
      value: function (e) {
        var /* [auto-meaningful-name] */e$type = e.type
        return e$type === require_1130_$_1130_index$Syntax.Identifier || e$type === require_1130_$_1130_index$Syntax.ObjectPattern || e$type === require_1130_$_1130_index$Syntax.ArrayPattern || e$type === require_1130_$_1130_index$Syntax.SpreadElement || e$type === require_1130_$_1130_index$Syntax.RestElement || e$type === require_1130_$_1130_index$Syntax.AssignmentPattern
      }
    }
  ])
  return n
}(require(/* 1360 */"./1360/index").Visitor)
module.exports = c
