/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3310
 */

"use strict"

var a = require(/* 1068 */"../../../../13/780/1068")
var r = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 2708 */"./2708"))
var i = r(require(/* 1066 */"../../../../13/780/1066"))
var l = r(require(/* 1067 */"../../../../13/780/1067"))
var u = require(/* 156 */"redux")
var s = r(require(/* 2909 */"../2909/index"))
var d = a(require(/* 2750 */"../2750"))
var c = a(require(/* 2780 */"../2780"))
var f = function () {
  function e(t) {
    (0, i.default)(this, e)
    this.store = t || (0, u.createStore)(s.default)
    this.video = null
    this.rootElement = null
  }
  (0, l.default)(e, [
    {
      key: "getActions",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$store$dispatch = this.store.dispatch
        var n = (0, o.default)({}, d, c)
        return Object.keys(n).filter(function (e) {
          return "function" === typeof n[e]
        }).reduce(function (a, r) {
          var o
          a[r] = (o = n[r], function () {
            var n = o.apply(e, arguments)
            if ("undefined" !== typeof n) {
              this$store$dispatch(n)
            }
          })
          return a
        }, {})
      }
    }, {
      key: "getState",
      value: function () {
        return this.store.getState()
      }
    }, {
      key: "subscribeToStateChange",
      value: function (e, t) {
        if (!t) {
          t = this.getState.bind(this)
        }
        var n = t()
        return this.store.subscribe(function () {
          var a = t()
          if (a !== n) {
            var r = n
            n = a
            e(a, r)
          }
        })
      }
    }, {
      key: "subscribeToOperationStateChange",
      value: function (e) {
        var t = this
        return this.subscribeToStateChange(e, function () {
          return t.getState().operation
        })
      }
    }, {
      key: "subscribeToPlayerStateChange",
      value: function (e) {
        var t = this
        return this.subscribeToStateChange(e, function () {
          return t.getState().player
        })
      }
    }
  ])
  return e
}()
exports.default = f
