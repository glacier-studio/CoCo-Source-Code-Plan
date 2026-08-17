/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1778
 */

"use strict"

var r
var o = require(/* 194 */"../1648/194")
var i = require(/* 760 */"../1282/760")
var a = require(/* 718 */"./718")
var s = require(/* 951 */"../1779/951")
var c = require(/* 1279 */"../1779/1279")
var l = require(/* 231 */"../1282/231")
var /* [auto-meaningful-name] */require_426_$$_1282_426$enforce = require(/* 426 */"../1282/426").enforce
var d = require(/* 1238 */"./1238")
var p = !o.ActiveXObject && "ActiveXObject" in o
var /* [auto-meaningful-name] */Object$isExtensible = Object.isExtensible
var h = function (e) {
  return function () {
    return e(this, arguments.length ? arguments[0] : undefined)
  }
}
var m = module.exports = s("WeakMap", h, c)
if (d && p) {
  r = c.getConstructor(h, "WeakMap", true)
  a.enable()
  var /* [auto-meaningful-name] */m$prototype = m.prototype
  var /* [auto-meaningful-name] */m$prototype$delete = m$prototype.delete
  var /* [auto-meaningful-name] */m$prototype$has = m$prototype.has
  var /* [auto-meaningful-name] */m$prototype$get = m$prototype.get
  var /* [auto-meaningful-name] */m$prototype$set = m$prototype.set
  i(m$prototype, {
    delete: function (e) {
      if (l(e) && !Object$isExtensible(e)) {
        var t = require_426_$$_1282_426$enforce(this)
        if (!t.frozen) {
          t.frozen = new r()
        }
        return m$prototype$delete.call(this, e) || t.frozen.delete(e)
      }
      return m$prototype$delete.call(this, e)
    },
    has: function (e) {
      if (l(e) && !Object$isExtensible(e)) {
        var t = require_426_$$_1282_426$enforce(this)
        if (!t.frozen) {
          t.frozen = new r()
        }
        return m$prototype$has.call(this, e) || t.frozen.has(e)
      }
      return m$prototype$has.call(this, e)
    },
    get: function (e) {
      if (l(e) && !Object$isExtensible(e)) {
        var t = require_426_$$_1282_426$enforce(this)
        if (!t.frozen) {
          t.frozen = new r()
        }
        return m$prototype$has.call(this, e) ? m$prototype$get.call(this, e) : t.frozen.get(e)
      }
      return m$prototype$get.call(this, e)
    },
    set: function (e, t) {
      if (l(e) && !Object$isExtensible(e)) {
        var n = require_426_$$_1282_426$enforce(this)
        if (!n.frozen) {
          n.frozen = new r()
        }
        if (m$prototype$has.call(this, e)) {
          m$prototype$set.call(this, e, t)
        } else {
          n.frozen.set(e, t)
        }
      } else {
        m$prototype$set.call(this, e, t)
      }
      return this
    }
  })
}
