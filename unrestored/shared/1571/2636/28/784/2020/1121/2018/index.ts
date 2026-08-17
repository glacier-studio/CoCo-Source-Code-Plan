/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2018
 */

var r = require(/* 1334 */"../1334")
var i = require(/* 2019 */"./2019")
require(/* 1335 */"./1335")
function o(e) {
  return undefined === e || null === e
}
function a(e) {
  (e = function (e) {
    var t = {}
    for (var n in e) t[n] = e[n]
    return t
  }(e || {})).whiteList = e.whiteList || r.whiteList
  e.onAttr = e.onAttr || r.onAttr
  e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr
  e.safeAttrValue = e.safeAttrValue || r.safeAttrValue
  this.options = e
}
a.prototype.process = function (e) {
  if (!(e = (e = e || "").toString())) {
    return ""
  }
  var /* [auto-meaningful-name] */this$options = this.options
  var /* [auto-meaningful-name] */this$options$whiteList = this$options.whiteList
  var /* [auto-meaningful-name] */this$options$onAttr = this$options.onAttr
  var /* [auto-meaningful-name] */this$options$onIgnoreAttr = this$options.onIgnoreAttr
  var /* [auto-meaningful-name] */this$options$safeAttrValue = this$options.safeAttrValue
  return i(e, function (e, t, i, c, u) {
    var l = this$options$whiteList[i]
    var f = false
    if (true === l) {
      f = l
    } else {
      if ("function" === typeof l) {
        f = l(c)
      } else {
        if (l instanceof RegExp) {
          f = l.test(c)
        }
      }
    }
    if (true !== f) {
      f = false
    }
    if (c = this$options$safeAttrValue(i, c)) {
      var d
      var h = {
        position: t,
        sourcePosition: e,
        source: u,
        isWhite: f
      }
      return f ? o(d = this$options$onAttr(i, c, h)) ? i + ":" + c : d : o(d = this$options$onIgnoreAttr(i, c, h)) ? undefined : d
    }
  })
}
module.exports = a
