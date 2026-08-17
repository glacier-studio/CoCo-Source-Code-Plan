/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2365
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
var r = require(/* 448 */"../../2373/448")
var i = require(/* 582 */"../../582")
var o = require(/* 1395 */"../2358/1395")
var a = require(/* 856 */"../../856")
var s = require(/* 2366 */"./2366")
var c = function (e, t, n) {
  try {
    return n()
  } catch (i) {
    throw o.isStackOverflowExeption(i) ? new Error(r.CIRCULAR_DEPENDENCY_IN_FACTORY(e, t.toString())) : i
  }
}
exports.resolve = function (e) {
  return function e(t) {
    return function (n) {
      n.parentContext.setCurrentRequest(n)
      var /* [auto-meaningful-name] */n$bindings = n.bindings
      var /* [auto-meaningful-name] */n$childRequests = n.childRequests
      var l = n.target && n.target.isArray()
      var f = !n.parentRequest || !n.parentRequest.target || !n.target || !n.parentRequest.target.matchesArray(n.target.serviceIdentifier)
      if (l && f) {
        return n$childRequests.map(function (n) {
          return e(t)(n)
        })
      }
      var d = null
      if (!n.target.isOptional() || 0 !== n$bindings.length) {
        var h = n$bindings[0]
        var p = h.scope === i.BindingScopeEnum.Singleton
        var _ = h.scope === i.BindingScopeEnum.Request
        if (p && h.activated) {
          return h.cache
        }
        if (_ && null !== t && t.has(h.id)) {
          return t.get(h.id)
        }
        if (h.type === i.BindingTypeEnum.ConstantValue) {
          d = h.cache
        } else if (h.type === i.BindingTypeEnum.Function) {
          d = h.cache
        } else if (h.type === i.BindingTypeEnum.Constructor) {
          d = h.implementationType
        } else if (h.type === i.BindingTypeEnum.DynamicValue && null !== h.dynamicValue) {
          d = c("toDynamicValue", h.serviceIdentifier, function () {
            return h.dynamicValue(n.parentContext)
          })
        } else if (h.type === i.BindingTypeEnum.Factory && null !== h.factory) {
          d = c("toFactory", h.serviceIdentifier, function () {
            return h.factory(n.parentContext)
          })
        } else if (h.type === i.BindingTypeEnum.Provider && null !== h.provider) {
          d = c("toProvider", h.serviceIdentifier, function () {
            return h.provider(n.parentContext)
          })
        } else {
          if (h.type !== i.BindingTypeEnum.Instance || null === h.implementationType) {
            var A = a.getServiceIdentifierAsString(n.serviceIdentifier)
            throw new Error(r.INVALID_BINDING_TYPE + " " + A)
          }
          d = s.resolveInstance(h.implementationType, n$childRequests, e(t))
        }
        if ("function" === typeof h.onActivation) {
          d = h.onActivation(n.parentContext, d)
        }
        if (p) {
          h.cache = d
          h.activated = true
        }
        if (_ && null !== t && !t.has(h.id)) {
          t.set(h.id, d)
        }
        return d
      }
    }
  }(e.plan.rootRequest.requestScope)(e.plan.rootRequest)
}
