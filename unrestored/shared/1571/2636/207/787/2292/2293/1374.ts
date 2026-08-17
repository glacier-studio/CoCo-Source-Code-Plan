/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1374
 */

"use strict"

export { le as CALL }
export { fe as CONSTRUCT }
export { de as ESM }
export { ae as PatternMatcher }
export { ue as READ }
export { Ae as ReferenceTracker }
export { d as findVariable }
export { L as getFunctionHeadLocation }
export { q as getFunctionNameWithKind }
export { f as getInnermostScope }
export { Y as getPropertyName }
export { K as getStaticValue }
export { X as getStringIfConstant }
export { ee as hasSideEffect }
export { _ as isArrowToken }
export { x as isClosingBraceToken }
export { w as isClosingBracketToken }
export { y as isClosingParenToken }
export { v as isColonToken }
export { A as isCommaToken }
export { C as isCommentToken }
export { O as isNotArrowToken }
export { P as isNotClosingBraceToken }
export { R as isNotClosingBracketToken }
export { D as isNotClosingParenToken }
export { T as isNotColonToken }
export { k as isNotCommaToken }
export { N as isNotCommentToken }
export { F as isNotOpeningBraceToken }
export { I as isNotOpeningBracketToken }
export { B as isNotOpeningParenToken }
export { S as isNotSemicolonToken }
export { E as isOpeningBraceToken }
export { b as isOpeningBracketToken }
export { m as isOpeningParenToken }
export { ne as isParenthesized }
export { g as isSemicolonToken }
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../11"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../39"
import * as /* [auto-meaningful-name] */Module_465 from /* 465 */"../../../../34/465"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../../../25/index"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../../../47"
import * as /* [auto-meaningful-name] */Module_777 from /* 777 */"../../777/index"
function f(e, t) {
  var n = t.range[0]
  var r = e
  var i = false
  do {
    i = false
    var o
    var a = Module_47.a(r.childScopes)
    try {
      for (a.s(); !(o = a.n()).done;) {
        var /* [auto-meaningful-name] */o$value = o.value
        var /* [auto-meaningful-name] */o$value$block$range = o$value.block.range
        if (o$value$block$range[0] <= n && n < o$value$block$range[1]) {
          r = o$value
          i = true
          break
        }
      }
    } catch (l) {
      a.e(l)
    } finally {
      a.f()
    }
  } while (i)
  return r
}
function d(e, t) {
  var n = ""
  var r = e
  for ("string" === typeof t ? n = t : (n = t.name, r = f(r, t)); null != r;) {
    var i = r.set.get(n)
    if (null != i) {
      return i
    }
    r = r.upper
  }
  return null
}
function h(e) {
  return !this(e)
}
function p(e) {
  return h.bind(e)
}
function _(e) {
  return "=>" === e.value && "Punctuator" === e.type
}
function A(e) {
  return "," === e.value && "Punctuator" === e.type
}
function g(e) {
  return ";" === e.value && "Punctuator" === e.type
}
function v(e) {
  return ":" === e.value && "Punctuator" === e.type
}
function m(e) {
  return "(" === e.value && "Punctuator" === e.type
}
function y(e) {
  return ")" === e.value && "Punctuator" === e.type
}
function b(e) {
  return "[" === e.value && "Punctuator" === e.type
}
function w(e) {
  return "]" === e.value && "Punctuator" === e.type
}
function E(e) {
  return "{" === e.value && "Punctuator" === e.type
}
function x(e) {
  return "}" === e.value && "Punctuator" === e.type
}
function C(e) {
  return "Line" === e.type || "Block" === e.type || "Shebang" === e.type
}
var O = p(_)
var k = p(A)
var S = p(g)
var T = p(v)
var B = p(m)
var D = p(y)
var I = p(b)
var R = p(w)
var F = p(E)
var P = p(x)
var N = p(C)
function M(e, t) {
  return e.id ? t.getTokenAfter(e.id, m) : t.getFirstToken(e, m)
}
function L(e, t) {
  var /* [auto-meaningful-name] */e$parent = e.parent
  var r = null
  var i = null
  if ("ArrowFunctionExpression" === e.type) {
    var o = t.getTokenBefore(e.body, _)
    r = o.loc.start
    i = o.loc.end
  } else if ("Property" === e$parent.type || "MethodDefinition" === e$parent.type) {
    r = e$parent.loc.start
    i = M(e, t).loc.start
  } else {
    r = e.loc.start
    i = M(e, t).loc.start
  }
  return {
    start: Object.assign({}, r),
    end: Object.assign({}, i)
  }
}
var j = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : {}
var U = Object.freeze(new Set(["Array", "ArrayBuffer", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "Float32Array", "Float64Array", "Function", "Infinity", "Int16Array", "Int32Array", "Int8Array", "isFinite", "isNaN", "isPrototypeOf", "JSON", "Map", "Math", "NaN", "Number", "Object", "parseFloat", "parseInt", "Promise", "Proxy", "Reflect", "RegExp", "Set", "String", "Symbol", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "undefined", "unescape", "WeakMap", "WeakSet"]))
var H = new Set([Array.isArray, "function" === typeof BigInt ? BigInt : undefined, Boolean, Date, Date.parse, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, escape, isFinite, isNaN, isPrototypeOf].concat(Module_25.a(Object.getOwnPropertyNames(Math).map(function (e) {
  return Math[e]
}).filter(function (e) {
  return "function" === typeof e
})), [Number, Number.isFinite, Number.isNaN, Number.parseFloat, Number.parseInt, Object, Object.entries, Object.is, Object.isExtensible, Object.isFrozen, Object.isSealed, Object.keys, Object.values, parseFloat, parseInt, RegExp, String, String.fromCharCode, String.fromCodePoint, String.raw, Symbol, Symbol.for, Symbol.keyFor, unescape]).filter(function (e) {
  return "function" === typeof e
}))
var V = new Set([Object.freeze, Object.preventExtensions, Object.seal])
function G(e, t) {
  var n = function (e, t) {
    for (var n = e; ("object" === typeof n || "function" === typeof n) && null !== n;) {
      var r = Object.getOwnPropertyDescriptor(n, t)
      if (r) {
        return r
      }
      n = Object.getPrototypeOf(n)
    }
    return null
  }(e, t)
  return null != n && null != n.get
}
function z(e, t) {
  for (var n = [], r = 0; r < e.length; ++r) {
    var i = e[r]
    if (null == i) {
      n.length = r + 1
    } else if ("SpreadElement" === i.type) {
      var o = W(i.argument, t)
      if (null == o) {
        return null
      }
      n.push.apply(n, Module_25.a(o.value))
    } else {
      var a = W(i, t)
      if (null == a) {
        return null
      }
      n.push(a.value)
    }
  }
  return n
}
var Q = Object.freeze({
  ArrayExpression: function (e, t) {
    var n = z(e.elements, t)
    return null != n ? {
      value: n
    } : null
  },
  AssignmentExpression: function (e, t) {
    return "=" === e.operator ? W(e.right, t) : null
  },
  BinaryExpression: function (e, t) {
    if ("in" === e.operator || "instanceof" === e.operator) {
      return null
    }
    var n = W(e.left, t)
    var r = W(e.right, t)
    if (null != n && null != r) {
      switch (e.operator) {
        case "==":
          return {
            value: n.value == r.value
          }
        case "!=":
          return {
            value: n.value != r.value
          }
        case "===":
          return {
            value: n.value === r.value
          }
        case "!==":
          return {
            value: n.value !== r.value
          }
        case "<":
          return {
            value: n.value < r.value
          }
        case "<=":
          return {
            value: n.value <= r.value
          }
        case ">":
          return {
            value: n.value > r.value
          }
        case ">=":
          return {
            value: n.value >= r.value
          }
        case "<<":
          return {
            value: n.value << r.value
          }
        case ">>":
          return {
            value: n.value >> r.value
          }
        case ">>>":
          return {
            value: n.value >>> r.value
          }
        case "+":
          return {
            value: n.value + r.value
          }
        case "-":
          return {
            value: n.value - r.value
          }
        case "*":
          return {
            value: n.value * r.value
          }
        case "/":
          return {
            value: n.value / r.value
          }
        case "%":
          return {
            value: n.value % r.value
          }
        case "**":
          return {
            value: Math.pow(n.value, r.value)
          }
        case "|":
          return {
            value: n.value | r.value
          }
        case "^":
          return {
            value: n.value ^ r.value
          }
        case "&":
          return {
            value: n.value & r.value
          }
      }
    }
    return null
  },
  CallExpression: function (e, t) {
    var /* [auto-meaningful-name] */e$callee = e.callee
    var r = z(e.arguments, t)
    if (null != r) {
      if ("MemberExpression" === e$callee.type) {
        var i = W(e$callee.object, t)
        var o = e$callee.computed ? W(e$callee.property, t) : {
          value: e$callee.property.name
        }
        if (null != i && null != o) {
          var /* [auto-meaningful-name] */i$value = i.value
          var /* [auto-meaningful-name] */o$value = o.value
          if (H.has(i$value[o$value])) {
            return {
              value: i$value[o$value].apply(i$value, Module_25.a(r))
            }
          }
          if (V.has(i$value[o$value])) {
            return {
              value: r[0]
            }
          }
        }
      } else {
        var u = W(e$callee, t)
        if (null != u) {
          var /* [auto-meaningful-name] */u$value = u.value
          if (H.has(u$value)) {
            return {
              value: u$value.apply(undefined, Module_25.a(r))
            }
          }
          if (V.has(u$value)) {
            return {
              value: r[0]
            }
          }
        }
      }
    }
    return null
  },
  ConditionalExpression: function (e, t) {
    var n = W(e.test, t)
    return null != n ? n.value ? W(e.consequent, t) : W(e.alternate, t) : null
  },
  ExpressionStatement: function (e, t) {
    return W(e.expression, t)
  },
  Identifier: function (e, t) {
    if (null != t) {
      var n = d(t, e)
      if (null != n && 0 === n.defs.length && U.has(n.name) && n.name in j) {
        return {
          value: j[n.name]
        }
      }
      if (null != n && 1 === n.defs.length) {
        var r = n.defs[0]
        if (r.parent && "const" === r.parent.kind && "Identifier" === r.node.id.type) {
          return W(r.node.init, t)
        }
      }
    }
    return null
  },
  Literal: function (e) {
    return null == e.regex && null == e.bigint || null != e.value ? {
      value: e.value
    } : null
  },
  LogicalExpression: function (e, t) {
    var n = W(e.left, t)
    if (null != n) {
      if ("||" === e.operator && true === Boolean(n.value) || "&&" === e.operator && false === Boolean(n.value)) {
        return n
      }
      var r = W(e.right, t)
      if (null != r) {
        return r
      }
    }
    return null
  },
  MemberExpression: function (e, t) {
    var n = W(e.object, t)
    var r = e.computed ? W(e.property, t) : {
      value: e.property.name
    }
    return null == n || null == r || G(n.value, r.value) ? null : {
      value: n.value[r.value]
    }
  },
  NewExpression: function (e, t) {
    var n = W(e.callee, t)
    var r = z(e.arguments, t)
    if (null != n && null != r) {
      var /* [auto-meaningful-name] */n$value = n.value
      if (H.has(n$value)) {
        return {
          value: Module_465.a(n$value, Module_25.a(r))
        }
      }
    }
    return null
  },
  ObjectExpression: function (e, t) {
    var n
    var r = {}
    var i = Module_47.a(e.properties)
    try {
      for (i.s(); !(n = i.n()).done;) {
        var /* [auto-meaningful-name] */n$value = n.value
        if ("Property" === n$value.type) {
          if ("init" !== n$value.kind) {
            return null
          }
          var a = n$value.computed ? W(n$value.key, t) : {
            value: n$value.key.name
          }
          var s = W(n$value.value, t)
          if (null == a || null == s) {
            return null
          }
          r[a.value] = s.value
        } else {
          if ("SpreadElement" !== n$value.type && "ExperimentalSpreadProperty" !== n$value.type) {
            return null
          }
          var c = W(n$value.argument, t)
          if (null == c) {
            return null
          }
          Object.assign(r, c.value)
        }
      }
    } catch (l) {
      i.e(l)
    } finally {
      i.f()
    }
    return {
      value: r
    }
  },
  SequenceExpression: function (e, t) {
    return W(e.expressions[e.expressions.length - 1], t)
  },
  TaggedTemplateExpression: function (e, t) {
    var n = W(e.tag, t)
    var r = z(e.quasi.expressions, t)
    if (null != n && null != r) {
      var /* [auto-meaningful-name] */n$value = n.value
      var o = e.quasi.quasis.map(function (e) {
        return e.value.cooked
      })
      o.raw = e.quasi.quasis.map(function (e) {
        return e.value.raw
      })
      if (n$value === String.raw) {
        return {
          value: n$value.apply(undefined, [o].concat(Module_25.a(r)))
        }
      }
    }
    return null
  },
  TemplateLiteral: function (e, t) {
    var n = z(e.expressions, t)
    if (null != n) {
      for (var /* [auto-meaningful-name] */e$quasis0$value$cooked = e.quasis[0].value.cooked, i = 0; i < n.length; ++i) {
        e$quasis0$value$cooked += n[i]
        e$quasis0$value$cooked += e.quasis[i + 1].value.cooked
      }
      return {
        value: e$quasis0$value$cooked
      }
    }
    return null
  },
  UnaryExpression: function (e, t) {
    if ("delete" === e.operator) {
      return null
    }
    if ("void" === e.operator) {
      return {
        value: undefined
      }
    }
    var n = W(e.argument, t)
    if (null != n) {
      switch (e.operator) {
        case "-":
          return {
            value: -n.value
          }
        case "+":
          return {
            value: +n.value
          }
        case "!":
          return {
            value: !n.value
          }
        case "~":
          return {
            value: ~n.value
          }
        case "typeof":
          return {
            value: typeof n.value
          }
      }
    }
    return null
  }
})
function W(e, t) {
  return null != e && Object.hasOwnProperty.call(Q, e.type) ? Q[e.type](e, t) : null
}
function K(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null
  try {
    return W(e, t)
  } catch (n) {
    return null
  }
}
function X(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : null
  if (e && "Literal" === e.type && null === e.value) {
    if (e.regex) {
      return "/".concat(e.regex.pattern, "/").concat(e.regex.flags)
    }
    if (e.bigint) {
      return e.bigint
    }
  }
  var n = K(e, t)
  return n && String(n.value)
}
function Y(e, t) {
  switch (e.type) {
    case "MemberExpression":
      return e.computed ? X(e.property, t) : e.property.name
    case "Property":
    case "MethodDefinition":
      return e.computed ? X(e.key, t) : "Literal" === e.key.type ? String(e.key.value) : e.key.name
  }
  return null
}
function q(e) {
  var /* [auto-meaningful-name] */e$parent = e.parent
  var n = []
  if ("MethodDefinition" === e$parent.type && e$parent.static) {
    n.push("static")
  }
  if (e.async) {
    n.push("async")
  }
  if (e.generator) {
    n.push("generator")
  }
  if ("ArrowFunctionExpression" === e.type) {
    n.push("arrow", "function")
  } else if ("Property" === e$parent.type || "MethodDefinition" === e$parent.type) {
    if ("constructor" === e$parent.kind) {
      return "constructor"
    }
    if ("get" === e$parent.kind) {
      n.push("getter")
    } else {
      if ("set" === e$parent.kind) {
        n.push("setter")
      } else {
        n.push("method")
      }
    }
  } else {
    n.push("function")
  }
  if (e.id) {
    n.push("'".concat(e.id.name, "'"))
  } else {
    var r = Y(e$parent)
    if (r) {
      n.push("'".concat(r, "'"))
    }
  }
  return n.join(" ")
}
var $ = Object.freeze(new Set(["==", "!=", "<", "<=", ">", ">=", "<<", ">>", ">>>", "+", "-", "*", "/", "%", "|", "^", "&", "in"]))
var J = Object.freeze(new Set(["-", "+", "!", "~"]))
var Z = Object.freeze(Object.assign(Object.create(null), {
  $visit: function (e, t, n) {
    var /* [auto-meaningful-name] */e$type = e.type
    return "function" === typeof this[e$type] ? this[e$type](e, t, n) : this.$visitChildren(e, t, n)
  },
  $visitChildren: function (e, t, n) {
    var r
    var /* [auto-meaningful-name] */e$type = e.type
    var o = Module_47.a(n[e$type] || Module_777.getKeys(e))
    try {
      for (o.s(); !(r = o.n()).done;) {
        var a = e[r.value]
        if (Array.isArray(a)) {
          var s
          var c = Module_47.a(a)
          try {
            for (c.s(); !(s = c.n()).done;) {
              var /* [auto-meaningful-name] */s$value = s.value
              if (s$value && this.$visit(s$value, t, n)) {
                return true
              }
            }
          } catch (d) {
            c.e(d)
          } finally {
            c.f()
          }
        } else if (a && this.$visit(a, t, n)) {
          return true
        }
      }
    } catch (d) {
      o.e(d)
    } finally {
      o.f()
    }
    return false
  },
  ArrowFunctionExpression: function () {
    return false
  },
  AssignmentExpression: function () {
    return true
  },
  AwaitExpression: function () {
    return true
  },
  BinaryExpression: function (e, t, n) {
    return !(!t.considerImplicitTypeConversion || !$.has(e.operator) || "Literal" === e.left.type && "Literal" === e.right.type) || this.$visitChildren(e, t, n)
  },
  CallExpression: function () {
    return true
  },
  FunctionExpression: function () {
    return false
  },
  ImportExpression: function () {
    return true
  },
  MemberExpression: function (e, t, n) {
    return !!t.considerGetters || !(!t.considerImplicitTypeConversion || !e.computed || "Literal" === e.property.type) || this.$visitChildren(e, t, n)
  },
  MethodDefinition: function (e, t, n) {
    return !(!t.considerImplicitTypeConversion || !e.computed || "Literal" === e.key.type) || this.$visitChildren(e, t, n)
  },
  NewExpression: function () {
    return true
  },
  Property: function (e, t, n) {
    return !(!t.considerImplicitTypeConversion || !e.computed || "Literal" === e.key.type) || this.$visitChildren(e, t, n)
  },
  UnaryExpression: function (e, t, n) {
    return "delete" === e.operator || !(!t.considerImplicitTypeConversion || !J.has(e.operator) || "Literal" === e.argument.type) || this.$visitChildren(e, t, n)
  },
  UpdateExpression: function () {
    return true
  },
  YieldExpression: function () {
    return true
  }
}))
function ee(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}
  var /* [auto-meaningful-name] */n$considerGetters = n.considerGetters
  var i = undefined !== n$considerGetters && n$considerGetters
  var /* [auto-meaningful-name] */n$considerImplicitTypeConversion = n.considerImplicitTypeConversion
  var a = undefined !== n$considerImplicitTypeConversion && n$considerImplicitTypeConversion
  return Z.$visit(e, {
    considerGetters: i,
    considerImplicitTypeConversion: a
  }, t.visitorKeys || Module_777.KEYS)
}
function te(e, t) {
  var /* [auto-meaningful-name] */e$parent = e.parent
  switch (e$parent.type) {
    case "CallExpression":
    case "NewExpression":
      return 1 === e$parent.arguments.length && e$parent.arguments[0] === e ? t.getTokenAfter(e$parent.callee, m) : null
    case "DoWhileStatement":
      return e$parent.test === e ? t.getTokenAfter(e$parent.body, m) : null
    case "IfStatement":
    case "WhileStatement":
      return e$parent.test === e ? t.getFirstToken(e$parent, 1) : null
    case "ImportExpression":
      return e$parent.source === e ? t.getFirstToken(e$parent, 1) : null
    case "SwitchStatement":
      return e$parent.discriminant === e ? t.getFirstToken(e$parent, 1) : null
    case "WithStatement":
      return e$parent.object === e ? t.getFirstToken(e$parent, 1) : null
    default:
      return null
  }
}
function ne(e, t, n) {
  var r
  var i
  var o
  var a
  var s
  if ("number" === typeof e) {
    i = t
    o = n
    if (!((r = 0 | e) >= 1)) {
      throw new TypeError("'times' should be a positive integer.")
    }
  } else {
    r = 1
    i = e
    o = t
  }
  if (null == i) {
    return false
  }
  a = s = i
  do {
    a = o.getTokenBefore(a)
    s = o.getTokenAfter(s)
  } while (null != a && null != s && m(a) && y(s) && a !== te(i, o) && --r > 0)
  return 0 === r
}
var re = /\$(?:[\$&'`]|[1-9][0-9]?)/g
var ie = new WeakMap()
function oe(e, t) {
  for (var n = false, r = t - 1; r >= 0 && 92 === e.charCodeAt(r); --r) {
    n = !n
  }
  return n
}
var ae = function () {
  function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var /* [auto-meaningful-name] */n$escaped = n.escaped
    var i = undefined !== n$escaped && n$escaped
    Module_27.a(this, e)
    if (!(t instanceof RegExp)) {
      throw new TypeError("'pattern' should be a RegExp instance.")
    }
    if (!t.flags.includes("g")) {
      throw new Error("'pattern' should contains 'g' flag.")
    }
    ie.set(this, {
      pattern: new RegExp(t.source, t.flags),
      escaped: Boolean(i)
    })
  }
  Module_39.a(e, [
    {
      key: "execAll",
      value: RegeneratorRuntime.mark(function e(t) {
        var n
        var /* [auto-meaningful-name] */n$pattern
        var /* [auto-meaningful-name] */n$escaped
        var a
        var s
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                n = ie.get(this)
                n$pattern = n.pattern
                n$escaped = n.escaped
                a = null
                s = 0
                n$pattern.lastIndex = 0
              case 4:
                if (null == (a = n$pattern.exec(t))) {
                  e.next = 12
                  break
                }
                if (!n$escaped && oe(t, a.index)) {
                  e.next = 10
                  break
                }
                s = n$pattern.lastIndex
                e.next = 9
                return a
              case 9:
                n$pattern.lastIndex = s
              case 10:
                e.next = 4
                break
              case 12:
              case "end":
                return e.stop()
            }
          }
        }, e, this)
      })
    }, {
      key: "test",
      value: function (e) {
        return !this.execAll(e).next().done
      }
    }, {
      key: Symbol.replace,
      value: function (e, t) {
        return "function" === typeof t ? function (e, t, n) {
          var r
          var i = []
          var o = 0
          var a = Module_47.a(e.execAll(t))
          try {
            for (a.s(); !(r = a.n()).done;) {
              var /* [auto-meaningful-name] */r$value = r.value
              i.push(t.slice(o, r$value.index))
              i.push(String(n.apply(undefined, Module_25.a(r$value).concat([r$value.index, r$value.input]))))
              o = r$value.index + r$value[0].length
            }
          } catch (l) {
            a.e(l)
          } finally {
            a.f()
          }
          i.push(t.slice(o))
          return i.join("")
        }(this, String(e), t) : function (e, t, n) {
          var r = []
          var i = 0
          var o = null
          function a(e) {
            switch (e) {
              case "$$":
                return "$"
              case "$&":
                return o[0]
              case "$`":
                return t.slice(0, o.index)
              case "$'":
                return t.slice(o.index + o[0].length)
              default:
                var n = e.slice(1)
                return n in o ? o[n] : e
            }
          }
          var s
          var c = Module_47.a(e.execAll(t))
          try {
            for (c.s(); !(s = c.n()).done;) {
              o = s.value
              r.push(t.slice(i, o.index))
              r.push(n.replace(re, a))
              i = o.index + o[0].length
            }
          } catch (l) {
            c.e(l)
          } finally {
            c.f()
          }
          r.push(t.slice(i))
          return r.join("")
        }(this, String(e), String(t))
      }
    }
  ])
  return e
}()
var se = /^(?:Import|Export(?:All|Default|Named))Declaration$/
var ce = Function.call.bind(Object.hasOwnProperty)
var ue = Symbol("read")
var le = Symbol("call")
var fe = Symbol("construct")
var de = Symbol("esm")
var he = {
  require: Module_11.a({}, le, true)
}
function pe(e) {
  return null == e || 0 !== e.defs.length || e.references.some(function (e) {
    return e.isWrite()
  })
}
function _e(e) {
  var /* [auto-meaningful-name] */e$parent = e.parent
  switch (e$parent && e$parent.type) {
    case "ConditionalExpression":
      return e$parent.consequent === e || e$parent.alternate === e
    case "LogicalExpression":
      return true
    case "SequenceExpression":
      return e$parent.expressions[e$parent.expressions.length - 1] === e
    default:
      return false
  }
}
var Ae = function () {
  function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var /* [auto-meaningful-name] */n$mode = n.mode
    var i = undefined === n$mode ? "strict" : n$mode
    var /* [auto-meaningful-name] */n$globalObjectNames = n.globalObjectNames
    var s = undefined === n$globalObjectNames ? ["global", "self", "window"] : n$globalObjectNames
    Module_27.a(this, e)
    this.variableStack = []
    this.globalScope = t
    this.mode = i
    this.globalObjectNames = s.slice(0)
  }
  Module_39.a(e, [
    {
      key: "iterateGlobalReferences",
      value: RegeneratorRuntime.mark(function e(t) {
        var n
        var r
        var o
        var a
        var s
        var c
        var l
        var f
        var /* [auto-meaningful-name] */f$value
        var h
        var p
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                n = 0
                r = Object.keys(t)
              case 1:
                if (!(n < r.length)) {
                  e.next = 12
                  break
                }
                if (o = r[n], a = t[o], s = [o], !pe(c = this.globalScope.set.get(o))) {
                  e.next = 8
                  break
                }
                return e.abrupt("continue", 9)
              case 8:
                return e.delegateYield(this._iterateVariableReferences(c, s, a, true), "t0", 9)
              case 9:
                n++
                e.next = 1
                break
              case 12:
                l = Module_47.a(this.globalObjectNames)
                e.prev = 13
                l.s()
              case 15:
                if ((f = l.n()).done) {
                  e.next = 24
                  break
                }
                if (f$value = f.value, h = [], !pe(p = this.globalScope.set.get(f$value))) {
                  e.next = 21
                  break
                }
                return e.abrupt("continue", 22)
              case 21:
                return e.delegateYield(this._iterateVariableReferences(p, h, t, false), "t1", 22)
              case 22:
                e.next = 15
                break
              case 24:
                e.next = 29
                break
              case 26:
                e.prev = 26
                e.t2 = e.catch(13)
                l.e(e.t2)
              case 29:
                e.prev = 29
                l.f()
                return e.finish(29)
              case 32:
              case "end":
                return e.stop()
            }
          }
        }, e, this, [[13, 26, 29, 32]])
      })
    }, {
      key: "iterateCjsReferences",
      value: RegeneratorRuntime.mark(function e(t) {
        var n
        var r
        var /* [auto-meaningful-name] */r$value$node
        var a
        var s
        var c
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                n = Module_47.a(this.iterateGlobalReferences(he))
                e.prev = 1
                n.s()
              case 3:
                if ((r = n.n()).done) {
                  e.next = 16
                  break
                }
                if (r$value$node = r.value.node, null != (a = X(r$value$node.arguments[0])) && ce(t, a)) {
                  e.next = 8
                  break
                }
                return e.abrupt("continue", 14)
              case 8:
                if (s = t[a], c = [a], !s[ue]) {
                  e.next = 13
                  break
                }
                e.next = 13
                return {
                  node: r$value$node,
                  path: c,
                  type: ue,
                  info: s[ue]
                }
              case 13:
                return e.delegateYield(this._iteratePropertyReferences(r$value$node, c, s), "t0", 14)
              case 14:
                e.next = 3
                break
              case 16:
                e.next = 21
                break
              case 18:
                e.prev = 18
                e.t1 = e.catch(1)
                n.e(e.t1)
              case 21:
                e.prev = 21
                n.f()
                return e.finish(21)
              case 24:
              case "end":
                return e.stop()
            }
          }
        }, e, this, [[1, 18, 21, 24]])
      })
    }, {
      key: "iterateEsmReferences",
      value: RegeneratorRuntime.mark(function e(t) {
        var /* [auto-meaningful-name] */this$globalScope$block
        var r
        var o
        var /* [auto-meaningful-name] */o$value
        var /* [auto-meaningful-name] */o$value$source$value
        var c
        var l
        var f
        var d
        var h
        var p
        var _
        var A
        var /* [auto-meaningful-name] */A$value
        var v
        var m
        var y
        var b
        var /* [auto-meaningful-name] */b$value
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                this$globalScope$block = this.globalScope.block
                r = Module_47.a(this$globalScope$block.body)
                e.prev = 2
                r.s()
              case 4:
                if ((o = r.n()).done) {
                  e.next = 71
                  break
                }
                if (o$value = o.value, se.test(o$value.type) && null != o$value.source) {
                  e.next = 8
                  break
                }
                return e.abrupt("continue", 69)
              case 8:
                if (o$value$source$value = o$value.source.value, ce(t, o$value$source$value)) {
                  e.next = 11
                  break
                }
                return e.abrupt("continue", 69)
              case 11:
                if (c = t[o$value$source$value], l = [o$value$source$value], !c[ue]) {
                  e.next = 16
                  break
                }
                e.next = 16
                return {
                  node: o$value,
                  path: l,
                  type: ue,
                  info: c[ue]
                }
              case 16:
                if ("ExportAllDeclaration" !== o$value.type) {
                  e.next = 29
                  break
                }
                f = 0
                d = Object.keys(c)
              case 18:
                if (!(f < d.length)) {
                  e.next = 27
                  break
                }
                if (h = d[f], !(p = c[h])[ue]) {
                  e.next = 24
                  break
                }
                e.next = 24
                return {
                  node: o$value,
                  path: l.concat(h),
                  type: ue,
                  info: p[ue]
                }
              case 24:
                f++
                e.next = 18
                break
              case 27:
                e.next = 69
                break
              case 29:
                _ = Module_47.a(o$value.specifiers)
                e.prev = 30
                _.s()
              case 32:
                if ((A = _.n()).done) {
                  e.next = 61
                  break
                }
                if (A$value = A.value, v = ce(c, de), m = this._iterateImportReferences(A$value, l, v ? c : "legacy" === this.mode ? Object.assign({
                  default: c
                }, c) : {
                  default: c
                }), !v) {
                  e.next = 40
                  break
                }
                return e.delegateYield(m, "t0", 38)
              case 38:
                e.next = 59
                break
              case 40:
                y = Module_47.a(m)
                e.prev = 41
                y.s()
              case 43:
                if ((b = y.n()).done) {
                  e.next = 51
                  break
                }
                if ((b$value = b.value).path = b$value.path.filter(ge), !(b$value.path.length >= 2 || b$value.type !== ue)) {
                  e.next = 49
                  break
                }
                e.next = 49
                return b$value
              case 49:
                e.next = 43
                break
              case 51:
                e.next = 56
                break
              case 53:
                e.prev = 53
                e.t1 = e.catch(41)
                y.e(e.t1)
              case 56:
                e.prev = 56
                y.f()
                return e.finish(56)
              case 59:
                e.next = 32
                break
              case 61:
                e.next = 66
                break
              case 63:
                e.prev = 63
                e.t2 = e.catch(30)
                _.e(e.t2)
              case 66:
                e.prev = 66
                _.f()
                return e.finish(66)
              case 69:
                e.next = 4
                break
              case 71:
                e.next = 76
                break
              case 73:
                e.prev = 73
                e.t3 = e.catch(2)
                r.e(e.t3)
              case 76:
                e.prev = 76
                r.f()
                return e.finish(76)
              case 79:
              case "end":
                return e.stop()
            }
          }
        }, e, this, [[2, 73, 76, 79], [30, 63, 66, 69], [41, 53, 56, 59]])
      })
    }, {
      key: "_iterateVariableReferences",
      value: RegeneratorRuntime.mark(function e(t, n, r, o) {
        var a
        var s
        var /* [auto-meaningful-name] */s$value
        var /* [auto-meaningful-name] */s$value$identifier
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (!this.variableStack.includes(t)) {
                  e.next = 2
                  break
                }
                return e.abrupt("return")
              case 2:
                this.variableStack.push(t)
                e.prev = 3
                a = Module_47.a(t.references)
                e.prev = 5
                a.s()
              case 7:
                if ((s = a.n()).done) {
                  e.next = 18
                  break
                }
                if ((s$value = s.value).isRead()) {
                  e.next = 11
                  break
                }
                return e.abrupt("continue", 16)
              case 11:
                if (s$value$identifier = s$value.identifier, !o || !r[ue]) {
                  e.next = 15
                  break
                }
                e.next = 15
                return {
                  node: s$value$identifier,
                  path: n,
                  type: ue,
                  info: r[ue]
                }
              case 15:
                return e.delegateYield(this._iteratePropertyReferences(s$value$identifier, n, r), "t0", 16)
              case 16:
                e.next = 7
                break
              case 18:
                e.next = 23
                break
              case 20:
                e.prev = 20
                e.t1 = e.catch(5)
                a.e(e.t1)
              case 23:
                e.prev = 23
                a.f()
                return e.finish(23)
              case 26:
                e.prev = 26
                this.variableStack.pop()
                return e.finish(26)
              case 29:
              case "end":
                return e.stop()
            }
          }
        }, e, this, [[3,, 26, 29], [5, 20, 23, 26]])
      })
    }, {
      key: "_iteratePropertyReferences",
      value: RegeneratorRuntime.mark(function e(t, n, r) {
        var o
        var /* [auto-meaningful-name] */o$parent
        var s
        var c
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                for (o = t; _e(o);) {
                  o = o.parent
                }
                if ("MemberExpression" !== (o$parent = o.parent).type) {
                  e.next = 15
                  break
                }
                if (o$parent.object !== o) {
                  e.next = 14
                  break
                }
                if (null != (s = Y(o$parent)) && ce(r, s)) {
                  e.next = 8
                  break
                }
                return e.abrupt("return")
              case 8:
                if (n = n.concat(s), !(c = r[s])[ue]) {
                  e.next = 13
                  break
                }
                e.next = 13
                return {
                  node: o$parent,
                  path: n,
                  type: ue,
                  info: c[ue]
                }
              case 13:
                return e.delegateYield(this._iteratePropertyReferences(o$parent, n, c), "t0", 14)
              case 14:
                return e.abrupt("return")
              case 15:
                if ("CallExpression" !== o$parent.type) {
                  e.next = 20
                  break
                }
                if (o$parent.callee !== o || !r[le]) {
                  e.next = 19
                  break
                }
                e.next = 19
                return {
                  node: o$parent,
                  path: n,
                  type: le,
                  info: r[le]
                }
              case 19:
                return e.abrupt("return")
              case 20:
                if ("NewExpression" !== o$parent.type) {
                  e.next = 25
                  break
                }
                if (o$parent.callee !== o || !r[fe]) {
                  e.next = 24
                  break
                }
                e.next = 24
                return {
                  node: o$parent,
                  path: n,
                  type: fe,
                  info: r[fe]
                }
              case 24:
                return e.abrupt("return")
              case 25:
                if ("AssignmentExpression" !== o$parent.type) {
                  e.next = 30
                  break
                }
                if (o$parent.right !== o) {
                  e.next = 29
                  break
                }
                return e.delegateYield(this._iterateLhsReferences(o$parent.left, n, r), "t1", 28)
              case 28:
                return e.delegateYield(this._iteratePropertyReferences(o$parent, n, r), "t2", 29)
              case 29:
                return e.abrupt("return")
              case 30:
                if ("AssignmentPattern" !== o$parent.type) {
                  e.next = 34
                  break
                }
                if (o$parent.right !== o) {
                  e.next = 33
                  break
                }
                return e.delegateYield(this._iterateLhsReferences(o$parent.left, n, r), "t3", 33)
              case 33:
                return e.abrupt("return")
              case 34:
                if ("VariableDeclarator" !== o$parent.type) {
                  e.next = 37
                  break
                }
                if (o$parent.init !== o) {
                  e.next = 37
                  break
                }
                return e.delegateYield(this._iterateLhsReferences(o$parent.id, n, r), "t4", 37)
              case 37:
              case "end":
                return e.stop()
            }
          }
        }, e, this)
      })
    }, {
      key: "_iterateLhsReferences",
      value: RegeneratorRuntime.mark(function e(t, n, r) {
        var o
        var a
        var s
        var /* [auto-meaningful-name] */s$value
        var l
        var f
        var h
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if ("Identifier" !== t.type) {
                  e.next = 5
                  break
                }
                if (null == (o = d(this.globalScope, t))) {
                  e.next = 4
                  break
                }
                return e.delegateYield(this._iterateVariableReferences(o, n, r, false), "t0", 4)
              case 4:
                return e.abrupt("return")
              case 5:
                if ("ObjectPattern" !== t.type) {
                  e.next = 31
                  break
                }
                a = Module_47.a(t.properties)
                e.prev = 7
                a.s()
              case 9:
                if ((s = a.n()).done) {
                  e.next = 22
                  break
                }
                if (s$value = s.value, null != (l = Y(s$value)) && ce(r, l)) {
                  e.next = 14
                  break
                }
                return e.abrupt("continue", 20)
              case 14:
                if (f = n.concat(l), !(h = r[l])[ue]) {
                  e.next = 19
                  break
                }
                e.next = 19
                return {
                  node: s$value,
                  path: f,
                  type: ue,
                  info: h[ue]
                }
              case 19:
                return e.delegateYield(this._iterateLhsReferences(s$value.value, f, h), "t1", 20)
              case 20:
                e.next = 9
                break
              case 22:
                e.next = 27
                break
              case 24:
                e.prev = 24
                e.t2 = e.catch(7)
                a.e(e.t2)
              case 27:
                e.prev = 27
                a.f()
                return e.finish(27)
              case 30:
                return e.abrupt("return")
              case 31:
                if ("AssignmentPattern" !== t.type) {
                  e.next = 33
                  break
                }
                return e.delegateYield(this._iterateLhsReferences(t.left, n, r), "t3", 33)
              case 33:
              case "end":
                return e.stop()
            }
          }
        }, e, this, [[7, 24, 27, 30]])
      })
    }, {
      key: "_iterateImportReferences",
      value: RegeneratorRuntime.mark(function e(t, n, r) {
        var /* [auto-meaningful-name] */t$type
        var a
        var s
        var /* [auto-meaningful-name] */t$local$name
        var u
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if ("ImportSpecifier" !== (t$type = t.type) && "ImportDefaultSpecifier" !== t$type) {
                  e.next = 12
                  break
                }
                if (a = "ImportDefaultSpecifier" === t$type ? "default" : t.imported.name, ce(r, a)) {
                  e.next = 5
                  break
                }
                return e.abrupt("return")
              case 5:
                if (n = n.concat(a), !(s = r[a])[ue]) {
                  e.next = 10
                  break
                }
                e.next = 10
                return {
                  node: t,
                  path: n,
                  type: ue,
                  info: s[ue]
                }
              case 10:
                return e.delegateYield(this._iterateVariableReferences(d(this.globalScope, t.local), n, s, false), "t0", 11)
              case 11:
                return e.abrupt("return")
              case 12:
                if ("ImportNamespaceSpecifier" !== t$type) {
                  e.next = 15
                  break
                }
                return e.delegateYield(this._iterateVariableReferences(d(this.globalScope, t.local), n, r, false), "t1", 14)
              case 14:
                return e.abrupt("return")
              case 15:
                if ("ExportSpecifier" !== t$type) {
                  e.next = 24
                  break
                }
                if (t$local$name = t.local.name, ce(r, t$local$name)) {
                  e.next = 19
                  break
                }
                return e.abrupt("return")
              case 19:
                if (n = n.concat(t$local$name), !(u = r[t$local$name])[ue]) {
                  e.next = 24
                  break
                }
                e.next = 24
                return {
                  node: t,
                  path: n,
                  type: ue,
                  info: u[ue]
                }
              case 24:
              case "end":
                return e.stop()
            }
          }
        }, e, this)
      })
    }
  ])
  return e
}()
function ge(e, t) {
  return !(1 === t && "default" === e)
}
Ae.READ = ue
Ae.CALL = le
Ae.CONSTRUCT = fe
Ae.ESM = de
var ve = {
  CALL: le,
  CONSTRUCT: fe,
  ESM: de,
  findVariable: d,
  getFunctionHeadLocation: L,
  getFunctionNameWithKind: q,
  getInnermostScope: f,
  getPropertyName: Y,
  getStaticValue: K,
  getStringIfConstant: X,
  hasSideEffect: ee,
  isArrowToken: _,
  isClosingBraceToken: x,
  isClosingBracketToken: w,
  isClosingParenToken: y,
  isColonToken: v,
  isCommaToken: A,
  isCommentToken: C,
  isNotArrowToken: O,
  isNotClosingBraceToken: P,
  isNotClosingBracketToken: R,
  isNotClosingParenToken: D,
  isNotColonToken: T,
  isNotCommaToken: k,
  isNotCommentToken: N,
  isNotOpeningBraceToken: F,
  isNotOpeningBracketToken: I,
  isNotOpeningParenToken: B,
  isNotSemicolonToken: S,
  isOpeningBraceToken: E,
  isOpeningBracketToken: b,
  isOpeningParenToken: m,
  isParenthesized: ne,
  isSemicolonToken: g,
  PatternMatcher: ae,
  READ: ue,
  ReferenceTracker: Ae
}
export default ve
