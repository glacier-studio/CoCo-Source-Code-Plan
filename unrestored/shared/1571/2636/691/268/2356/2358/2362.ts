/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2362
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require(/* 1396 */"../../1396")
var i = require(/* 448 */"../../2373/448")
var o = require(/* 582 */"../../582")
var a = require(/* 359 */"../../359")
var s = require(/* 856 */"../../856")
exports.getFunctionName = s.getFunctionName
var c = require(/* 1397 */"./1397/index")
function u(e, t, n, r) {
  var a = e.getConstructorMetadata(n)
  var /* [auto-meaningful-name] */a$compilerGeneratedMetadata = a.compilerGeneratedMetadata
  if (undefined === a$compilerGeneratedMetadata) {
    var u = i.MISSING_INJECTABLE_ANNOTATION + " " + t + "."
    throw new Error(u)
  }
  var /* [auto-meaningful-name] */a$userGeneratedMetadata = a.userGeneratedMetadata
  var h = Object.keys(a$userGeneratedMetadata)
  var p = function (e, t, n, r, i) {
    for (var o = [], a = 0; a < i; a++) {
      var s = l(a, e, t, n, r)
      if (null !== s) {
        o.push(s)
      }
    }
    return o
  }(r, t, a$compilerGeneratedMetadata, a$userGeneratedMetadata, 0 === n.length && h.length > 0 ? h.length : n.length)
  var _ = function e(t, n) {
    for (var r = t.getPropertiesMetadata(n), i = [], a = Object.keys(r), s = 0, u = a; s < u.length; s++) {
      var l = u[s]
      var d = r[l]
      var h = f(r[l])
      var p = h.targetName || l
      var _ = h.inject || h.multiInject
      var A = new c.Target(o.TargetTypeEnum.ClassProperty, p, _)
      A.metadata = d
      i.push(A)
    }
    var /* [auto-meaningful-name] */Object$getPrototypeOfN$prototype$constructor = Object.getPrototypeOf(n.prototype).constructor
    if (Object$getPrototypeOfN$prototype$constructor !== Object) {
      var v = e(t, Object$getPrototypeOfN$prototype$constructor)
      i = i.concat(v)
    }
    return i
  }(e, n)
  return p.concat(_)
}
function l(e, t, n, a, s) {
  var u = s[e.toString()] || []
  var l = f(u)
  var d = true !== l.unmanaged
  var h = a[e]
  var p = l.inject || l.multiInject
  if ((h = p || h) instanceof r.LazyServiceIdentifer) {
    h = h.unwrap()
  }
  if (d) {
    if (!t && (h === Object || h === Function || undefined === h)) {
      var _ = i.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + "."
      throw new Error(_)
    }
    var A = new c.Target(o.TargetTypeEnum.ConstructorArgument, l.targetName, h)
    A.metadata = u
    return A
  }
  return null
}
function f(e) {
  var t = {}
  e.forEach(function (e) {
    t[e.key.toString()] = e.value
  })
  return {
    inject: t[a.INJECT_TAG],
    multiInject: t[a.MULTI_INJECT_TAG],
    targetName: t[a.NAME_TAG],
    unmanaged: t[a.UNMANAGED_TAG]
  }
}
exports.getDependencies = function (e, t) {
  return u(e, s.getFunctionName(t), t, false)
}
exports.getBaseClassDependencyCount = function e(t, n) {
  var /* [auto-meaningful-name] */Object$getPrototypeOfN$prototype$constructor = Object.getPrototypeOf(n.prototype).constructor
  if (Object$getPrototypeOfN$prototype$constructor !== Object) {
    var i = u(t, s.getFunctionName(Object$getPrototypeOfN$prototype$constructor), Object$getPrototypeOfN$prototype$constructor, true)
    var o = i.map(function (e) {
      return e.metadata.filter(function (e) {
        return e.key === a.UNMANAGED_TAG
      })
    })
    var /* [auto-meaningful-name] */$concat$applyO$length = [].concat.apply([], o).length
    var l = i.length - $concat$applyO$length
    return l > 0 ? l : e(t, Object$getPrototypeOfN$prototype$constructor)
  }
  return 0
}
