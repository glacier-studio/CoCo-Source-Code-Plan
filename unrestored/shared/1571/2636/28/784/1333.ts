/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1333
 */

var /* [auto-meaningful-name] */require_1121_$_2020_1121_index$FilterCSS = require(/* 1121 */"./2020/1121/index").FilterCSS
var /* [auto-meaningful-name] */require_1121_$_2020_1121_index$getDefaultWhiteList = require(/* 1121 */"./2020/1121/index").getDefaultWhiteList
var o = require(/* 1122 */"./2020/1122")
function a() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height", "loading"],
    ins: ["datetime"],
    kbd: [],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
  }
}
var s = new require_1121_$_2020_1121_index$FilterCSS()
function c(e) {
  return e.replace(u, "&lt;").replace(l, "&gt;")
}
var u = /</g
var l = />/g
var f = /"/g
var d = /&quot;/g
var h = /&#([a-zA-Z0-9]*);?/gim
var p = /&colon;?/gim
var _ = /&newline;?/gim
var A = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi
var g = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi
var v = /u\s*r\s*l\s*\(.*/gi
function m(e) {
  return e.replace(f, "&quot;")
}
function y(e) {
  return e.replace(d, "\"")
}
function b(e) {
  return e.replace(h, function (e, t) {
    return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
  })
}
function w(e) {
  return e.replace(p, ":").replace(_, " ")
}
function E(e) {
  for (var t = "", n = 0, /* [auto-meaningful-name] */e$length = e.length; n < e$length; n++) {
    t += e.charCodeAt(n) < 32 ? " " : e.charAt(n)
  }
  return o.trim(t)
}
function x(e) {
  return e = E(e = w(e = b(e = y(e))))
}
function C(e) {
  return e = c(e = m(e))
}
exports.whiteList = {
  a: ["target", "href", "title"],
  abbr: ["title"],
  address: [],
  area: ["shape", "coords", "href", "alt"],
  article: [],
  aside: [],
  audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
  b: [],
  bdi: ["dir"],
  bdo: ["dir"],
  big: [],
  blockquote: ["cite"],
  br: [],
  caption: [],
  center: [],
  cite: [],
  code: [],
  col: ["align", "valign", "span", "width"],
  colgroup: ["align", "valign", "span", "width"],
  dd: [],
  del: ["datetime"],
  details: ["open"],
  div: [],
  dl: [],
  dt: [],
  em: [],
  figcaption: [],
  figure: [],
  font: ["color", "size", "face"],
  footer: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  header: [],
  hr: [],
  i: [],
  img: ["src", "alt", "title", "width", "height", "loading"],
  ins: ["datetime"],
  kbd: [],
  li: [],
  mark: [],
  nav: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  section: [],
  small: [],
  span: [],
  sub: [],
  summary: [],
  sup: [],
  strong: [],
  strike: [],
  table: ["width", "border", "align", "valign"],
  tbody: ["align", "valign"],
  td: ["width", "rowspan", "colspan", "align", "valign"],
  tfoot: ["align", "valign"],
  th: ["width", "rowspan", "colspan", "align", "valign"],
  thead: ["align", "valign"],
  tr: ["rowspan", "align", "valign"],
  tt: [],
  u: [],
  ul: [],
  video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
}
exports.getDefaultWhiteList = a
exports.onTag = function (e, t, n) {}
exports.onIgnoreTag = function (e, t, n) {}
exports.onTagAttr = function (e, t, n) {}
exports.onIgnoreTagAttr = function (e, t, n) {}
exports.safeAttrValue = function (e, t, n, r) {
  n = x(n)
  if ("href" === t || "src" === t) {
    if ("#" === (n = o.trim(n))) {
      return "#"
    }
    if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "data:image/" !== n.substr(0, 11) && "ftp://" !== n.substr(0, 6) && "./" !== n.substr(0, 2) && "../" !== n.substr(0, 3) && "#" !== n[0] && "/" !== n[0]) {
      return ""
    }
  } else if ("background" === t) {
    A.lastIndex = 0
    if (A.test(n)) {
      return ""
    }
  } else if ("style" === t) {
    g.lastIndex = 0
    if (g.test(n)) {
      return ""
    }
    v.lastIndex = 0
    if (v.test(n) && (A.lastIndex = 0, A.test(n))) {
      return ""
    }
    if (false !== r) {
      n = (r = r || s).process(n)
    }
  }
  return n = C(n)
}
exports.escapeHtml = c
exports.escapeQuote = m
exports.unescapeQuote = y
exports.escapeHtmlEntities = b
exports.escapeDangerHtml5Entities = w
exports.clearNonPrintableCharacter = E
exports.friendlyAttrValue = x
exports.escapeAttrValue = C
exports.onIgnoreTagStripAll = function () {
  return ""
}
exports.StripTagBody = function (e, t) {
  if ("function" !== typeof t) {
    t = function () {}
  }
  var n = !Array.isArray(e)
  var r = []
  var i = false
  return {
    onIgnoreTag: function (a, s, c) {
      if (function (t) {
        return !!n || -1 !== o.indexOf(e, t)
      }(a)) {
        if (c.isClosing) {
          var /* [auto-meaningful-name] */_removed = "[/removed]"
          var l = c.position + _removed.length
          r.push([false !== i ? i : c.position, l])
          i = false
          return _removed
        }
        if (!i) {
          i = c.position
        }
        return "[removed]"
      }
      return t(a, s, c)
    },
    remove: function (e) {
      var t = ""
      var n = 0
      o.forEach(r, function (r) {
        t += e.slice(n, r[0])
        n = r[1]
      })
      return t += e.slice(n)
    }
  }
}
exports.stripCommentTag = function (e) {
  for (var t = "", n = 0; n < e.length;) {
    var r = e.indexOf("<!--", n)
    if (-1 === r) {
      t += e.slice(n)
      break
    }
    t += e.slice(n, r)
    var i = e.indexOf("-->", r)
    if (-1 === i) {
      break
    }
    n = i + 3
  }
  return t
}
exports.stripBlankChar = function (e) {
  var t = e.split("")
  return (t = t.filter(function (e) {
    var t = e.charCodeAt(0)
    return 127 !== t && (!(t <= 31) || 10 === t || 13 === t)
  })).join("")
}
exports.attributeWrapSign = "\""
exports.cssFilter = s
exports.getDefaultCSSWhiteList = require_1121_$_2020_1121_index$getDefaultWhiteList
