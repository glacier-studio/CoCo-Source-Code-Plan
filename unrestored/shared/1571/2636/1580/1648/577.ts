/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：577
 */

var r
var o = require(/* 240 */"../1282/240")
var i = require(/* 1241 */"../1785/1241")
var a = require(/* 1081 */"../1581/831/1081")
var s = require(/* 827 */"../1581/827")
var c = require(/* 1242 */"../1783/1093/1242")
var l = require(/* 1078 */"../1783/1093/1078")
var u = require(/* 946 */"../1581/946")
var d = u("IE_PROTO")
var p = function () {}
var f = function (e) {
  return "<script>" + e + "</script>"
}
var h = function (e) {
  e.write(f(""))
  e.close()
  var /* [auto-meaningful-name] */e$parentWindow$Object = e.parentWindow.Object
  e = null
  return e$parentWindow$Object
}
var m = function () {
  try {
    r = new ActiveXObject("htmlfile")
  } catch (t) {}
  m = "undefined" != typeof document ? document.domain && r ? h(r) : function () {
    var /* [auto-meaningful-name] */t$contentWindow$document
    var t = l("iframe")
    t.style.display = "none"
    c.appendChild(t)
    t.src = String("javascript:");
    (t$contentWindow$document = t.contentWindow.document).open()
    t$contentWindow$document.write(f("document.F=Object"))
    t$contentWindow$document.close()
    return t$contentWindow$document.F
  }() : h(r)
  for (var /* [auto-meaningful-name] */a$length = a.length; a$length--;) {
    delete m.prototype[a[a$length]]
  }
  return m()
}
s[d] = true
module.exports = Object.create || function (e, t) {
  var n
  if (null !== e) {
    p.prototype = o(e)
    n = new p()
    p.prototype = null
    n[d] = e
  } else {
    n = m()
  }
  return undefined === t ? n : i(n, t)
}
