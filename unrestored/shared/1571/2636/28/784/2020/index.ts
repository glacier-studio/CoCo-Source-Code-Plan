/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2020
 */

var /* [auto-meaningful-name] */require_1121_$_1121_index$FilterCSS = require(/* 1121 */"./1121/index").FilterCSS
var i = require(/* 1333 */"../1333")
var o = require(/* 1336 */"../1336")
var /* [auto-meaningful-name] */o$parseTag = o.parseTag
var /* [auto-meaningful-name] */o$parseAttr = o.parseAttr
var c = require(/* 1122 */"./1122")
function u(e) {
  return undefined === e || null === e
}
function l(e) {
  if ((e = function (e) {
    var t = {}
    for (var n in e) t[n] = e[n]
    return t
  }(e || {})).stripIgnoreTag) {
    if (e.onIgnoreTag) {
      console.error("Notes: cannot use these two options \"stripIgnoreTag\" and \"onIgnoreTag\" at the same time")
    }
    e.onIgnoreTag = i.onIgnoreTagStripAll
  }
  if (e.whiteList || e.allowList) {
    e.whiteList = function (e) {
      var t = {}
      for (var n in e) if (Array.isArray(e[n])) {
        t[n.toLowerCase()] = e[n].map(function (e) {
          return e.toLowerCase()
        })
      } else {
        t[n.toLowerCase()] = e[n]
      }
      return t
    }(e.whiteList || e.allowList)
  } else {
    e.whiteList = i.whiteList
  }
  this.attributeWrapSign = true === e.singleQuotedAttributeValue ? "'" : i.attributeWrapSign
  e.onTag = e.onTag || i.onTag
  e.onTagAttr = e.onTagAttr || i.onTagAttr
  e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag
  e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr
  e.safeAttrValue = e.safeAttrValue || i.safeAttrValue
  e.escapeHtml = e.escapeHtml || i.escapeHtml
  this.options = e
  if (false === e.css) {
    this.cssFilter = false
  } else {
    e.css = e.css || {}
    this.cssFilter = new require_1121_$_1121_index$FilterCSS(e.css)
  }
}
l.prototype.process = function (e) {
  if (!(e = (e = e || "").toString())) {
    return ""
  }
  var /* [auto-meaningful-name] */this$options = this.options
  var /* [auto-meaningful-name] */this$options$whiteList = this$options.whiteList
  var /* [auto-meaningful-name] */this$options$onTag = this$options.onTag
  var /* [auto-meaningful-name] */this$options$onIgnoreTag = this$options.onIgnoreTag
  var /* [auto-meaningful-name] */this$options$onTagAttr = this$options.onTagAttr
  var /* [auto-meaningful-name] */this$options$onIgnoreTagAttr = this$options.onIgnoreTagAttr
  var /* [auto-meaningful-name] */this$options$safeAttrValue = this$options.safeAttrValue
  var /* [auto-meaningful-name] */this$options$escapeHtml = this$options.escapeHtml
  var /* [auto-meaningful-name] */this$attributeWrapSign = this.attributeWrapSign
  var /* [auto-meaningful-name] */this$cssFilter = this.cssFilter
  if (this$options.stripBlankChar) {
    e = i.stripBlankChar(e)
  }
  if (!this$options.allowCommentTag) {
    e = i.stripCommentTag(e)
  }
  var A = false
  if (this$options.stripIgnoreTagBody) {
    A = i.StripTagBody(this$options.stripIgnoreTagBody, this$options$onIgnoreTag)
    this$options$onIgnoreTag = A.onIgnoreTag
  }
  var g = o$parseTag(e, function (e, t, i, a, A) {
    var g = {
      sourcePosition: e,
      position: t,
      isClosing: A,
      isWhite: Object.prototype.hasOwnProperty.call(this$options$whiteList, i)
    }
    var v = this$options$onTag(i, a, g)
    if (!u(v)) {
      return v
    }
    if (g.isWhite) {
      if (g.isClosing) {
        return "</" + i + ">"
      }
      var m = function (e) {
        var t = c.spaceIndex(e)
        if (-1 === t) {
          return {
            html: "",
            closing: "/" === e[e.length - 2]
          }
        }
        var n = "/" === (e = c.trim(e.slice(t + 1, -1)))[e.length - 1]
        if (n) {
          e = c.trim(e.slice(0, -1))
        }
        return {
          html: e,
          closing: n
        }
      }(a)
      var y = this$options$whiteList[i]
      var b = o$parseAttr(m.html, function (e, t) {
        var n = -1 !== c.indexOf(y, e)
        var r = this$options$onTagAttr(i, e, t, n)
        return u(r) ? n ? (t = this$options$safeAttrValue(i, e, t, this$cssFilter)) ? e + "=" + this$attributeWrapSign + t + this$attributeWrapSign : e : u(r = this$options$onIgnoreTagAttr(i, e, t, n)) ? undefined : r : r
      })
      a = "<" + i
      if (b) {
        a += " " + b
      }
      if (m.closing) {
        a += " /"
      }
      return a += ">"
    }
    return u(v = this$options$onIgnoreTag(i, a, g)) ? this$options$escapeHtml(a) : v
  }, this$options$escapeHtml)
  if (A) {
    g = A.remove(g)
  }
  return g
}
module.exports = l
