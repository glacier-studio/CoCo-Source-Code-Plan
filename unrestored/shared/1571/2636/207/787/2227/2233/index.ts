/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2233
 */

"use strict"

var r = require(/* 180 */"../../180")
var i = require(/* 204 */"../../204")
var o = require(/* 283 */"../../../../1058/1393/1143/283/index")
var a = require(/* 284 */"../../../../1058/1393/1143/284/index")
var /* [auto-meaningful-name] */require_1130_$_1130_index$Syntax = require(/* 1130 */"./1130/index").Syntax
var c = require(/* 1360 */"./1360/index")
var u = require(/* 1131 */"../1131")
var l = require(/* 978 */"../978")
var f = require(/* 2236 */"./2236")
var d = require(/* 1359 */"./1359")
var h = require(/* 573 */"../../../../1058/1393/573")
var /* [auto-meaningful-name] */d$ParameterDefinition = d.ParameterDefinition
var /* [auto-meaningful-name] */d$Definition = d.Definition
var A = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, i) {
    var o
    r(this, n);
    (o = t.call(this, null, i.options)).declaration = e
    o.referencer = i
    return o
  }
  i(n, [
    {
      key: "visitImport",
      value: function (e, t) {
        var n = this
        this.referencer.visitPattern(e, function (e) {
          n.referencer.currentScope().__define(e, new d$Definition(l.ImportBinding, e, t, n.declaration, null, null))
        })
      }
    }, {
      key: "ImportNamespaceSpecifier",
      value: function (e) {
        var t = e.local || e.id
        if (t) {
          this.visitImport(t, e)
        }
      }
    }, {
      key: "ImportDefaultSpecifier",
      value: function (e) {
        var t = e.local || e.id
        this.visitImport(t, e)
      }
    }, {
      key: "ImportSpecifier",
      value: function (e) {
        var t = e.local || e.id
        if (e.name) {
          this.visitImport(e.name, e)
        } else {
          this.visitImport(t, e)
        }
      }
    }
  ])
  return n
}(c.Visitor)
var g = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, i) {
    var o
    r(this, n);
    (o = t.call(this, null, e)).options = e
    o.scopeManager = i
    o.parent = null
    o.isInnerMethodDefinition = false
    return o
  }
  i(n, [
    {
      key: "currentScope",
      value: function () {
        return this.scopeManager.__currentScope
      }
    }, {
      key: "close",
      value: function (e) {
        for (; this.currentScope() && e === this.currentScope().block;) {
          this.scopeManager.__currentScope = this.currentScope().__close(this.scopeManager)
        }
      }
    }, {
      key: "pushInnerMethodDefinition",
      value: function (e) {
        var /* [auto-meaningful-name] */this$isInnerMethodDefinition = this.isInnerMethodDefinition
        this.isInnerMethodDefinition = e
        return this$isInnerMethodDefinition
      }
    }, {
      key: "popInnerMethodDefinition",
      value: function (e) {
        this.isInnerMethodDefinition = e
      }
    }, {
      key: "referencingDefaultValue",
      value: function (e, t, n, r) {
        var i = this.currentScope()
        t.forEach(function (t) {
          i.__referencing(e, u.WRITE, t.right, n, e !== t.left, r)
        })
      }
    }, {
      key: "visitPattern",
      value: function (e, t, n) {
        var r = t
        var i = n
        if ("function" === typeof t) {
          i = t
          r = {
            processRightHandNodes: false
          }
        }
        (function (e, t, n, r) {
          var i = new f(e, t, r)
          i.visit(t)
          if (null !== n && undefined !== n) {
            i.rightHandNodes.forEach(n.visit, n)
          }
        })(this.options, e, r.processRightHandNodes ? this : null, i)
      }
    }, {
      key: "visitFunction",
      value: function (e) {
        var t
        var /* [auto-meaningful-name] */e$params$length
        var r = this
        if (e.type === require_1130_$_1130_index$Syntax.FunctionDeclaration) {
          this.currentScope().__define(e.id, new d$Definition(l.FunctionName, e.id, e, null, null, null))
        }
        if (e.type === require_1130_$_1130_index$Syntax.FunctionExpression && e.id) {
          this.scopeManager.__nestFunctionExpressionNameScope(e)
        }
        this.scopeManager.__nestFunctionScope(e, this.isInnerMethodDefinition)
        var i = this
        function o(n, r) {
          i.currentScope().__define(n, new d$ParameterDefinition(n, e, t, r.rest))
          i.referencingDefaultValue(n, r.assignments, null, true)
        }
        for (t = 0, e$params$length = e.params.length; t < e$params$length; ++t) {
          this.visitPattern(e.params[t], {
            processRightHandNodes: true
          }, o)
        }
        if (e.rest) {
          this.visitPattern({
            type: "RestElement",
            argument: e.rest
          }, function (t) {
            r.currentScope().__define(t, new d$ParameterDefinition(t, e, e.params.length, true))
          })
        }
        if (e.body) {
          if (e.body.type === require_1130_$_1130_index$Syntax.BlockStatement) {
            this.visitChildren(e.body)
          } else {
            this.visit(e.body)
          }
        }
        this.close(e)
      }
    }, {
      key: "visitClass",
      value: function (e) {
        if (e.type === require_1130_$_1130_index$Syntax.ClassDeclaration) {
          this.currentScope().__define(e.id, new d$Definition(l.ClassName, e.id, e, null, null, null))
        }
        this.visit(e.superClass)
        this.scopeManager.__nestClassScope(e)
        if (e.id) {
          this.currentScope().__define(e.id, new d$Definition(l.ClassName, e.id, e))
        }
        this.visit(e.body)
        this.close(e)
      }
    }, {
      key: "visitProperty",
      value: function (e) {
        var t
        if (e.computed) {
          this.visit(e.key)
        }
        var n = e.type === require_1130_$_1130_index$Syntax.MethodDefinition
        if (n) {
          t = this.pushInnerMethodDefinition(true)
        }
        this.visit(e.value)
        if (n) {
          this.popInnerMethodDefinition(t)
        }
      }
    }, {
      key: "visitForIn",
      value: function (e) {
        var t = this
        if (e.left.type === require_1130_$_1130_index$Syntax.VariableDeclaration && "var" !== e.left.kind) {
          this.scopeManager.__nestForScope(e)
        }
        if (e.left.type === require_1130_$_1130_index$Syntax.VariableDeclaration) {
          this.visit(e.left)
          this.visitPattern(e.left.declarations[0].id, function (n) {
            t.currentScope().__referencing(n, u.WRITE, e.right, null, true, true)
          })
        } else {
          this.visitPattern(e.left, {
            processRightHandNodes: true
          }, function (n, r) {
            var i = null
            if (!t.currentScope().isStrict) {
              i = {
                pattern: n,
                node: e
              }
            }
            t.referencingDefaultValue(n, r.assignments, i, false)
            t.currentScope().__referencing(n, u.WRITE, e.right, i, true, false)
          })
        }
        this.visit(e.right)
        this.visit(e.body)
        this.close(e)
      }
    }, {
      key: "visitVariableDeclaration",
      value: function (e, t, n, r) {
        var i = this
        var o = n.declarations[r]
        var /* [auto-meaningful-name] */o$init = o.init
        this.visitPattern(o.id, {
          processRightHandNodes: true
        }, function (s, c) {
          e.__define(s, new d$Definition(t, s, o, n, r, n.kind))
          i.referencingDefaultValue(s, c.assignments, null, true)
          if (o$init) {
            i.currentScope().__referencing(s, u.WRITE, o$init, null, !c.topLevel, true)
          }
        })
      }
    }, {
      key: "AssignmentExpression",
      value: function (e) {
        var t = this
        if (f.isPattern(e.left)) {
          if ("=" === e.operator) {
            this.visitPattern(e.left, {
              processRightHandNodes: true
            }, function (n, r) {
              var i = null
              if (!t.currentScope().isStrict) {
                i = {
                  pattern: n,
                  node: e
                }
              }
              t.referencingDefaultValue(n, r.assignments, i, false)
              t.currentScope().__referencing(n, u.WRITE, e.right, i, !r.topLevel, false)
            })
          } else {
            this.currentScope().__referencing(e.left, u.RW, e.right)
          }
        } else {
          this.visit(e.left)
        }
        this.visit(e.right)
      }
    }, {
      key: "CatchClause",
      value: function (e) {
        var t = this
        this.scopeManager.__nestCatchScope(e)
        this.visitPattern(e.param, {
          processRightHandNodes: true
        }, function (n, r) {
          t.currentScope().__define(n, new d$Definition(l.CatchClause, e.param, e, null, null, null))
          t.referencingDefaultValue(n, r.assignments, null, true)
        })
        this.visit(e.body)
        this.close(e)
      }
    }, {
      key: "Program",
      value: function (e) {
        this.scopeManager.__nestGlobalScope(e)
        if (this.scopeManager.__isNodejsScope()) {
          this.currentScope().isStrict = false
          this.scopeManager.__nestFunctionScope(e, false)
        }
        if (this.scopeManager.__isES6() && this.scopeManager.isModule()) {
          this.scopeManager.__nestModuleScope(e)
        }
        if (this.scopeManager.isStrictModeSupported() && this.scopeManager.isImpliedStrict()) {
          this.currentScope().isStrict = true
        }
        this.visitChildren(e)
        this.close(e)
      }
    }, {
      key: "Identifier",
      value: function (e) {
        this.currentScope().__referencing(e)
      }
    }, {
      key: "UpdateExpression",
      value: function (e) {
        if (f.isPattern(e.argument)) {
          this.currentScope().__referencing(e.argument, u.RW, null)
        } else {
          this.visitChildren(e)
        }
      }
    }, {
      key: "MemberExpression",
      value: function (e) {
        this.visit(e.object)
        if (e.computed) {
          this.visit(e.property)
        }
      }
    }, {
      key: "Property",
      value: function (e) {
        this.visitProperty(e)
      }
    }, {
      key: "MethodDefinition",
      value: function (e) {
        this.visitProperty(e)
      }
    }, {
      key: "BreakStatement",
      value: function () {}
    }, {
      key: "ContinueStatement",
      value: function () {}
    }, {
      key: "LabeledStatement",
      value: function (e) {
        this.visit(e.body)
      }
    }, {
      key: "ForStatement",
      value: function (e) {
        if (e.init && e.init.type === require_1130_$_1130_index$Syntax.VariableDeclaration && "var" !== e.init.kind) {
          this.scopeManager.__nestForScope(e)
        }
        this.visitChildren(e)
        this.close(e)
      }
    }, {
      key: "ClassExpression",
      value: function (e) {
        this.visitClass(e)
      }
    }, {
      key: "ClassDeclaration",
      value: function (e) {
        this.visitClass(e)
      }
    }, {
      key: "CallExpression",
      value: function (e) {
        if (!(this.scopeManager.__ignoreEval() || e.callee.type !== require_1130_$_1130_index$Syntax.Identifier || "eval" !== e.callee.name)) {
          this.currentScope().variableScope.__detectEval()
        }
        this.visitChildren(e)
      }
    }, {
      key: "BlockStatement",
      value: function (e) {
        if (this.scopeManager.__isES6()) {
          this.scopeManager.__nestBlockScope(e)
        }
        this.visitChildren(e)
        this.close(e)
      }
    }, {
      key: "ThisExpression",
      value: function () {
        this.currentScope().variableScope.__detectThis()
      }
    }, {
      key: "WithStatement",
      value: function (e) {
        this.visit(e.object)
        this.scopeManager.__nestWithScope(e)
        this.visit(e.body)
        this.close(e)
      }
    }, {
      key: "VariableDeclaration",
      value: function (e) {
        for (var t = "var" === e.kind ? this.currentScope().variableScope : this.currentScope(), n = 0, /* [auto-meaningful-name] */e$declarations$length = e.declarations.length; n < e$declarations$length; ++n) {
          var i = e.declarations[n]
          this.visitVariableDeclaration(t, l.Variable, e, n)
          if (i.init) {
            this.visit(i.init)
          }
        }
      }
    }, {
      key: "SwitchStatement",
      value: function (e) {
        this.visit(e.discriminant)
        if (this.scopeManager.__isES6()) {
          this.scopeManager.__nestSwitchScope(e)
        }
        for (var t = 0, /* [auto-meaningful-name] */e$cases$length = e.cases.length; t < e$cases$length; ++t) {
          this.visit(e.cases[t])
        }
        this.close(e)
      }
    }, {
      key: "FunctionDeclaration",
      value: function (e) {
        this.visitFunction(e)
      }
    }, {
      key: "FunctionExpression",
      value: function (e) {
        this.visitFunction(e)
      }
    }, {
      key: "ForOfStatement",
      value: function (e) {
        this.visitForIn(e)
      }
    }, {
      key: "ForInStatement",
      value: function (e) {
        this.visitForIn(e)
      }
    }, {
      key: "ArrowFunctionExpression",
      value: function (e) {
        this.visitFunction(e)
      }
    }, {
      key: "ImportDeclaration",
      value: function (e) {
        h(this.scopeManager.__isES6() && this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context.")
        new A(e, this).visit(e)
      }
    }, {
      key: "visitExportDeclaration",
      value: function (e) {
        if (!e.source) {
          if (e.declaration) {
            this.visit(e.declaration)
          } else {
            this.visitChildren(e)
          }
        }
      }
    }, {
      key: "ExportDeclaration",
      value: function (e) {
        this.visitExportDeclaration(e)
      }
    }, {
      key: "ExportAllDeclaration",
      value: function (e) {
        this.visitExportDeclaration(e)
      }
    }, {
      key: "ExportDefaultDeclaration",
      value: function (e) {
        this.visitExportDeclaration(e)
      }
    }, {
      key: "ExportNamedDeclaration",
      value: function (e) {
        this.visitExportDeclaration(e)
      }
    }, {
      key: "ExportSpecifier",
      value: function (e) {
        var t = e.id || e.local
        this.visit(t)
      }
    }, {
      key: "MetaProperty",
      value: function () {}
    }
  ])
  return n
}(c.Visitor)
module.exports = g
