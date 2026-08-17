/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2230
 */

"use strict"

var r = require(/* 180 */"../180")
var i = require(/* 204 */"../204")
var o = require(/* 1358 */"./1358")
var a = require(/* 573 */"../../../1058/1393/573")
var /* [auto-meaningful-name] */o$GlobalScope = o.GlobalScope
var /* [auto-meaningful-name] */o$CatchScope = o.CatchScope
var /* [auto-meaningful-name] */o$WithScope = o.WithScope
var /* [auto-meaningful-name] */o$ModuleScope = o.ModuleScope
var /* [auto-meaningful-name] */o$ClassScope = o.ClassScope
var /* [auto-meaningful-name] */o$SwitchScope = o.SwitchScope
var /* [auto-meaningful-name] */o$FunctionScope = o.FunctionScope
var /* [auto-meaningful-name] */o$ForScope = o.ForScope
var /* [auto-meaningful-name] */o$FunctionExpressionNameScope = o.FunctionExpressionNameScope
var /* [auto-meaningful-name] */o$BlockScope = o.BlockScope
var g = function () {
  function e(t) {
    r(this, e)
    this.scopes = []
    this.globalScope = null
    this.__nodeToScope = new WeakMap()
    this.__currentScope = null
    this.__options = t
    this.__declaredVariables = new WeakMap()
  }
  i(e, [
    {
      key: "__useDirective",
      value: function () {
        return this.__options.directive
      }
    }, {
      key: "__isOptimistic",
      value: function () {
        return this.__options.optimistic
      }
    }, {
      key: "__ignoreEval",
      value: function () {
        return this.__options.ignoreEval
      }
    }, {
      key: "__isNodejsScope",
      value: function () {
        return this.__options.nodejsScope
      }
    }, {
      key: "isModule",
      value: function () {
        return "module" === this.__options.sourceType
      }
    }, {
      key: "isImpliedStrict",
      value: function () {
        return this.__options.impliedStrict
      }
    }, {
      key: "isStrictModeSupported",
      value: function () {
        return this.__options.ecmaVersion >= 5
      }
    }, {
      key: "__get",
      value: function (e) {
        return this.__nodeToScope.get(e)
      }
    }, {
      key: "getDeclaredVariables",
      value: function (e) {
        return this.__declaredVariables.get(e) || []
      }
    }, {
      key: "acquire",
      value: function (e, t) {
        function n(e) {
          return "function" !== e.type || !e.functionExpressionScope
        }
        var r = this.__get(e)
        if (!r || 0 === r.length) {
          return null
        }
        if (1 === r.length) {
          return r[0]
        }
        if (t) {
          for (var i = r.length - 1; i >= 0; --i) {
            var o = r[i]
            if (n(o)) {
              return o
            }
          }
        } else {
          for (var a = 0, /* [auto-meaningful-name] */r$length = r.length; a < r$length; ++a) {
            var c = r[a]
            if (n(c)) {
              return c
            }
          }
        }
        return null
      }
    }, {
      key: "acquireAll",
      value: function (e) {
        return this.__get(e)
      }
    }, {
      key: "release",
      value: function (e, t) {
        var n = this.__get(e)
        if (n && n.length) {
          var /* [auto-meaningful-name] */n0$upper = n[0].upper
          return n0$upper ? this.acquire(n0$upper.block, t) : null
        }
        return null
      }
    }, {
      key: "attach",
      value: function () {}
    }, {
      key: "detach",
      value: function () {}
    }, {
      key: "__nestScope",
      value: function (e) {
        if (e instanceof o$GlobalScope) {
          a(null === this.__currentScope)
          this.globalScope = e
        }
        this.__currentScope = e
        return e
      }
    }, {
      key: "__nestGlobalScope",
      value: function (e) {
        return this.__nestScope(new o$GlobalScope(this, e))
      }
    }, {
      key: "__nestBlockScope",
      value: function (e) {
        return this.__nestScope(new o$BlockScope(this, this.__currentScope, e))
      }
    }, {
      key: "__nestFunctionScope",
      value: function (e, t) {
        return this.__nestScope(new o$FunctionScope(this, this.__currentScope, e, t))
      }
    }, {
      key: "__nestForScope",
      value: function (e) {
        return this.__nestScope(new o$ForScope(this, this.__currentScope, e))
      }
    }, {
      key: "__nestCatchScope",
      value: function (e) {
        return this.__nestScope(new o$CatchScope(this, this.__currentScope, e))
      }
    }, {
      key: "__nestWithScope",
      value: function (e) {
        return this.__nestScope(new o$WithScope(this, this.__currentScope, e))
      }
    }, {
      key: "__nestClassScope",
      value: function (e) {
        return this.__nestScope(new o$ClassScope(this, this.__currentScope, e))
      }
    }, {
      key: "__nestSwitchScope",
      value: function (e) {
        return this.__nestScope(new o$SwitchScope(this, this.__currentScope, e))
      }
    }, {
      key: "__nestModuleScope",
      value: function (e) {
        return this.__nestScope(new o$ModuleScope(this, this.__currentScope, e))
      }
    }, {
      key: "__nestFunctionExpressionNameScope",
      value: function (e) {
        return this.__nestScope(new o$FunctionExpressionNameScope(this, this.__currentScope, e))
      }
    }, {
      key: "__isES6",
      value: function () {
        return this.__options.ecmaVersion >= 6
      }
    }
  ])
  return e
}()
module.exports = g
