/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1267
 */

var r
var o
var i
var a
var s
var c
var l
var /* [auto-meaningful-name] */l$then
var d = require(/* 194 */"../../1648/194")
var /* [auto-meaningful-name] */require_386_$$_$$_1648_386$f = require(/* 386 */"../../1648/386").f
var /* [auto-meaningful-name] */require_1093_$$_$$_1783_1093_index$set = require(/* 1093 */"../../1783/1093/index").set
var h = require(/* 1266 */"./1266")
var m = require(/* 1687 */"./1687")
var g = require(/* 1688 */"./1688")
var _ = require(/* 758 */"../758")
var v = d.MutationObserver || d.WebKitMutationObserver
var /* [auto-meaningful-name] */d$document = d.document
var /* [auto-meaningful-name] */d$process = d.process
var /* [auto-meaningful-name] */d$Promise = d.Promise
var O = require_386_$$_$$_1648_386$f(d, "queueMicrotask")
var w = O && O.value
if (!w) {
  r = function () {
    var /* [auto-meaningful-name] */d$process$domain
    var t
    for (_ && (d$process$domain = d$process.domain) && d$process$domain.exit(); o;) {
      t = o.fn
      o = o.next
      try {
        t()
      } catch (n) {
        if (o) {
          a()
        } else {
          i = undefined
        }
        throw n
      }
    }
    i = undefined
    if (d$process$domain) {
      d$process$domain.enter()
    }
  }
  if (h || _ || g || !v || !d$document) {
    if (!m && d$Promise && d$Promise.resolve) {
      (l = d$Promise.resolve(undefined)).constructor = d$Promise
      l$then = l.then
      a = function () {
        l$then.call(l, r)
      }
    } else {
      a = _ ? function () {
        d$process.nextTick(r)
      } : function () {
        require_1093_$$_$$_1783_1093_index$set.call(d, r)
      }
    }
  } else {
    s = true
    c = d$document.createTextNode("")
    new v(r).observe(c, {
      characterData: true
    })
    a = function () {
      c.data = s = !s
    }
  }
}
module.exports = w || function (e) {
  var t = {
    fn: e,
    next: undefined
  }
  if (i) {
    i.next = t
  }
  if (!o) {
    o = t
    a()
  }
  i = t
}
