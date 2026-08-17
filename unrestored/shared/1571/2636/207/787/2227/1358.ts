/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1358
 */

"use strict"

var r = require(/* 712 */"../../../1058/1393/1143/712/index")
var i = require(/* 532 */"../../../1058/1393/1143/532")
var o = require(/* 283 */"../../../1058/1393/1143/283/index")
var a = require(/* 284 */"../../../1058/1393/1143/284/index")
var s = require(/* 180 */"../180")
var c = require(/* 204 */"../204")
var /* [auto-meaningful-name] */require_1130_$_2233_1130_index$Syntax = require(/* 1130 */"./2233/1130/index").Syntax
var l = require(/* 1131 */"./1131")
var f = require(/* 978 */"./978")
var /* [auto-meaningful-name] */require_1359_$_2233_1359$Definition = require(/* 1359 */"./2233/1359").Definition
var h = require(/* 573 */"../../../1058/1393/573")
function p(e) {
  return e.type === f.ClassName || e.type === f.Variable && "var" !== e.parent.kind
}
var _ = function () {
  function e(t, n, r, i, o) {
    s(this, e)
    this.type = n
    this.set = new Map()
    this.taints = new Map()
    this.dynamic = "global" === this.type || "with" === this.type
    this.block = i
    this.through = []
    this.variables = []
    this.references = []
    this.variableScope = "global" === this.type || "function" === this.type || "module" === this.type ? this : r.variableScope
    this.functionExpressionScope = false
    this.directCallToEvalScope = false
    this.thisFound = false
    this.__left = []
    this.upper = r
    this.isStrict = function (e, t, n, r) {
      var i
      if (e.upper && e.upper.isStrict) {
        return true
      }
      if (n) {
        return true
      }
      if ("class" === e.type || "module" === e.type) {
        return true
      }
      if ("block" === e.type || "switch" === e.type) {
        return false
      }
      if ("function" === e.type) {
        if (t.type === require_1130_$_2233_1130_index$Syntax.ArrowFunctionExpression && t.body.type !== require_1130_$_2233_1130_index$Syntax.BlockStatement) {
          return false
        }
        if (!(i = t.type === require_1130_$_2233_1130_index$Syntax.Program ? t : t.body)) {
          return false
        }
      } else {
        if ("global" !== e.type) {
          return false
        }
        i = t
      }
      if (r) {
        for (var o = 0, /* [auto-meaningful-name] */i$body$length = i.body.length; o < i$body$length; ++o) {
          var s = i.body[o]
          if (s.type !== require_1130_$_2233_1130_index$Syntax.DirectiveStatement) {
            break
          }
          if ("\"use strict\"" === s.raw || "'use strict'" === s.raw) {
            return true
          }
        }
      } else {
        for (var c = 0, /* [auto-meaningful-name] */i$body$length1 = i.body.length; c < i$body$length1; ++c) {
          var f = i.body[c]
          if (f.type !== require_1130_$_2233_1130_index$Syntax.ExpressionStatement) {
            break
          }
          var /* [auto-meaningful-name] */f$expression = f.expression
          if (f$expression.type !== require_1130_$_2233_1130_index$Syntax.Literal || "string" !== typeof f$expression.value) {
            break
          }
          if (null !== f$expression.raw && undefined !== f$expression.raw) {
            if ("\"use strict\"" === f$expression.raw || "'use strict'" === f$expression.raw) {
              return true
            }
          } else if ("use strict" === f$expression.value) {
            return true
          }
        }
      }
      return false
    }(this, i, o, t.__useDirective())
    this.childScopes = []
    if (this.upper) {
      this.upper.childScopes.push(this)
    }
    this.__declaredVariables = t.__declaredVariables;
    (function (e, t) {
      e.scopes.push(t)
      var n = e.__nodeToScope.get(t.block)
      if (n) {
        n.push(t)
      } else {
        e.__nodeToScope.set(t.block, [t])
      }
    })(t, this)
  }
  c(e, [
    {
      key: "__shouldStaticallyClose",
      value: function (e) {
        return !this.dynamic || e.__isOptimistic()
      }
    }, {
      key: "__shouldStaticallyCloseForGlobal",
      value: function (e) {
        var /* [auto-meaningful-name] */e$identifier$name = e.identifier.name
        if (!this.set.has(e$identifier$name)) {
          return false
        }
        var /* [auto-meaningful-name] */this$set$getE$identifier$name$defs = this.set.get(e$identifier$name).defs
        return this$set$getE$identifier$name$defs.length > 0 && this$set$getE$identifier$name$defs.every(p)
      }
    }, {
      key: "__staticCloseRef",
      value: function (e) {
        if (!this.__resolve(e)) {
          this.__delegateToUpperScope(e)
        }
      }
    }, {
      key: "__dynamicCloseRef",
      value: function (e) {
        var t = this
        do {
          t.through.push(e)
          t = t.upper
        } while (t)
      }
    }, {
      key: "__globalCloseRef",
      value: function (e) {
        if (this.__shouldStaticallyCloseForGlobal(e)) {
          this.__staticCloseRef(e)
        } else {
          this.__dynamicCloseRef(e)
        }
      }
    }, {
      key: "__close",
      value: function (e) {
        var t
        t = this.__shouldStaticallyClose(e) ? this.__staticCloseRef : "global" !== this.type ? this.__dynamicCloseRef : this.__globalCloseRef
        for (var n = 0, /* [auto-meaningful-name] */this$__left$length = this.__left.length; n < this$__left$length; ++n) {
          var i = this.__left[n]
          t.call(this, i)
        }
        this.__left = null
        return this.upper
      }
    }, {
      key: "__isValidResolution",
      value: function (e, t) {
        return true
      }
    }, {
      key: "__resolve",
      value: function (e) {
        var /* [auto-meaningful-name] */e$identifier$name = e.identifier.name
        if (!this.set.has(e$identifier$name)) {
          return false
        }
        var n = this.set.get(e$identifier$name)
        return !!this.__isValidResolution(e, n) && (n.references.push(e), n.stack = n.stack && e.from.variableScope === this.variableScope, e.tainted && (n.tainted = true, this.taints.set(n.name, true)), e.resolved = n, true)
      }
    }, {
      key: "__delegateToUpperScope",
      value: function (e) {
        if (this.upper) {
          this.upper.__left.push(e)
        }
        this.through.push(e)
      }
    }, {
      key: "__addDeclaredVariablesOfNode",
      value: function (e, t) {
        if (null !== t && undefined !== t) {
          var n = this.__declaredVariables.get(t)
          if (!(null !== n && undefined !== n)) {
            n = []
            this.__declaredVariables.set(t, n)
          }
          if (-1 === n.indexOf(e)) {
            n.push(e)
          }
        }
      }
    }, {
      key: "__defineGeneric",
      value: function (e, t, n, r, i) {
        var o
        if (!(o = t.get(e))) {
          o = new f(e, this)
          t.set(e, o)
          n.push(o)
        }
        if (i) {
          o.defs.push(i)
          this.__addDeclaredVariablesOfNode(o, i.node)
          this.__addDeclaredVariablesOfNode(o, i.parent)
        }
        if (r) {
          o.identifiers.push(r)
        }
      }
    }, {
      key: "__define",
      value: function (e, t) {
        if (e && e.type === require_1130_$_2233_1130_index$Syntax.Identifier) {
          this.__defineGeneric(e.name, this.set, this.variables, e, t)
        }
      }
    }, {
      key: "__referencing",
      value: function (e, t, n, r, i, o) {
        if (e && e.type === require_1130_$_2233_1130_index$Syntax.Identifier && "super" !== e.name) {
          var a = new l(e, this, t || l.READ, n, r, !!i, !!o)
          this.references.push(a)
          this.__left.push(a)
        }
      }
    }, {
      key: "__detectEval",
      value: function () {
        var e = this
        this.directCallToEvalScope = true
        do {
          e.dynamic = true
          e = e.upper
        } while (e)
      }
    }, {
      key: "__detectThis",
      value: function () {
        this.thisFound = true
      }
    }, {
      key: "__isClosed",
      value: function () {
        return null === this.__left
      }
    }, {
      key: "resolve",
      value: function (e) {
        var t
        var n
        var /* [auto-meaningful-name] */this$references$length
        for (h(this.__isClosed(), "Scope should be closed."), h(e.type === require_1130_$_2233_1130_index$Syntax.Identifier, "Target should be identifier."), n = 0, this$references$length = this.references.length; n < this$references$length; ++n) {
          if ((t = this.references[n]).identifier === e) {
            return t
          }
        }
        return null
      }
    }, {
      key: "isStatic",
      value: function () {
        return !this.dynamic
      }
    }, {
      key: "isArgumentsMaterialized",
      value: function () {
        return true
      }
    }, {
      key: "isThisMaterialized",
      value: function () {
        return true
      }
    }, {
      key: "isUsedName",
      value: function (e) {
        if (this.set.has(e)) {
          return true
        }
        for (var t = 0, /* [auto-meaningful-name] */this$through$length = this.through.length; t < this$through$length; ++t) {
          if (this.through[t].identifier.name === e) {
            return true
          }
        }
        return false
      }
    }
  ])
  return e
}()
var A = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r) {
    var i
    s(this, n);
    (i = t.call(this, e, "global", null, r, false)).implicit = {
      set: new Map(),
      variables: [],
      left: []
    }
    return i
  }
  c(n, [
    {
      key: "__close",
      value: function (e) {
        for (var t = [], o = 0, /* [auto-meaningful-name] */this$__left$length = this.__left.length; o < this$__left$length; ++o) {
          var s = this.__left[o]
          if (s.__maybeImplicitGlobal && !this.set.has(s.identifier.name)) {
            t.push(s.__maybeImplicitGlobal)
          }
        }
        for (var c = 0, /* [auto-meaningful-name] */t$length = t.length; c < t$length; ++c) {
          var l = t[c]
          this.__defineImplicit(l.pattern, new require_1359_$_2233_1359$Definition(f.ImplicitGlobalVariable, l.pattern, l.node, null, null, null))
        }
        this.implicit.left = this.__left
        return r(i(n.prototype), "__close", this).call(this, e)
      }
    }, {
      key: "__defineImplicit",
      value: function (e, t) {
        if (e && e.type === require_1130_$_2233_1130_index$Syntax.Identifier) {
          this.__defineGeneric(e.name, this.implicit.set, this.implicit.variables, e, t)
        }
      }
    }
  ])
  return n
}(_)
var g = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i) {
    s(this, n)
    return t.call(this, e, "module", r, i, false)
  }
  return n
}(_)
var v = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i) {
    var o
    s(this, n);
    (o = t.call(this, e, "function-expression-name", r, i, false)).__define(i.id, new require_1359_$_2233_1359$Definition(f.FunctionName, i.id, i, null, null, null))
    o.functionExpressionScope = true
    return o
  }
  return n
}(_)
var m = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i) {
    s(this, n)
    return t.call(this, e, "catch", r, i, false)
  }
  return n
}(_)
var y = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i) {
    s(this, n)
    return t.call(this, e, "with", r, i, false)
  }
  c(n, [
    {
      key: "__close",
      value: function (e) {
        if (this.__shouldStaticallyClose(e)) {
          return r(i(n.prototype), "__close", this).call(this, e)
        }
        for (var t = 0, /* [auto-meaningful-name] */this$__left$length = this.__left.length; t < this$__left$length; ++t) {
          var a = this.__left[t]
          a.tainted = true
          this.__delegateToUpperScope(a)
        }
        this.__left = null
        return this.upper
      }
    }
  ])
  return n
}(_)
var b = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i) {
    s(this, n)
    return t.call(this, e, "block", r, i, false)
  }
  return n
}(_)
var w = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i) {
    s(this, n)
    return t.call(this, e, "switch", r, i, false)
  }
  return n
}(_)
var E = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i, o) {
    var a
    s(this, n)
    if ((a = t.call(this, e, "function", r, i, o)).block.type !== require_1130_$_2233_1130_index$Syntax.ArrowFunctionExpression) {
      a.__defineArguments()
    }
    return a
  }
  c(n, [
    {
      key: "isArgumentsMaterialized",
      value: function () {
        if (this.block.type === require_1130_$_2233_1130_index$Syntax.ArrowFunctionExpression) {
          return false
        }
        if (!this.isStatic()) {
          return true
        }
        var e = this.set.get("arguments")
        h(e, "Always have arguments variable.")
        return e.tainted || 0 !== e.references.length
      }
    }, {
      key: "isThisMaterialized",
      value: function () {
        return !this.isStatic() || this.thisFound
      }
    }, {
      key: "__defineArguments",
      value: function () {
        this.__defineGeneric("arguments", this.set, this.variables, null, null)
        this.taints.set("arguments", true)
      }
    }, {
      key: "__isValidResolution",
      value: function (e, t) {
        if ("Program" === this.block.type) {
          return true
        }
        var n = this.block.body.range[0]
        return !(t.scope === this && e.identifier.range[0] < n && t.defs.every(function (e) {
          return e.name.range[0] >= n
        }))
      }
    }
  ])
  return n
}(_)
var x = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i) {
    s(this, n)
    return t.call(this, e, "for", r, i, false)
  }
  return n
}(_)
var C = function (e) {
  o(n, e)
  var t = a(n)
  function n(e, r, i) {
    s(this, n)
    return t.call(this, e, "class", r, i, false)
  }
  return n
}(_)
module.exports = {
  Scope: _,
  GlobalScope: A,
  ModuleScope: g,
  FunctionExpressionNameScope: v,
  CatchScope: m,
  WithScope: y,
  BlockScope: b,
  SwitchScope: w,
  FunctionScope: E,
  ForScope: x,
  ClassScope: C
}
