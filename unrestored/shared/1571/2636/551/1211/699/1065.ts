/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1065
 */

"use strict"

var r = require(/* 19 */"../../../19")
var i = require(/* 54 */"../../../54")
var o = require(/* 0 */"react")
require(/* 50 */"../../../50/index")
var a = require(/* 98 */"../98")
var s = require(/* 154 */"./154/index")
var c = require(/* 233 */"./233")
var u = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p"
}
var l = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$align = e.align
  var s = undefined === e$align ? "inherit" : e$align
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$color = e.color
  var h = undefined === e$color ? "initial" : e$color
  var /* [auto-meaningful-name] */e$component = e.component
  var /* [auto-meaningful-name] */e$display = e.display
  var A = undefined === e$display ? "initial" : e$display
  var /* [auto-meaningful-name] */e$gutterBottom = e.gutterBottom
  var v = undefined !== e$gutterBottom && e$gutterBottom
  var /* [auto-meaningful-name] */e$noWrap = e.noWrap
  var y = undefined !== e$noWrap && e$noWrap
  var /* [auto-meaningful-name] */e$paragraph = e.paragraph
  var w = undefined !== e$paragraph && e$paragraph
  var /* [auto-meaningful-name] */e$variant = e.variant
  var x = undefined === e$variant ? "body1" : e$variant
  var /* [auto-meaningful-name] */e$variantMapping = e.variantMapping
  var O = undefined === e$variantMapping ? u : e$variantMapping
  var k = i.a(e, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"])
  var S = e$component || (w ? "p" : O[x] || u[x]) || "span"
  return o.createElement(S, r.a({
    className: a.a(e$classes.root, e$className, "inherit" !== x && e$classes[x], "initial" !== h && e$classes["color".concat(c.a(h))], y && e$classes.noWrap, v && e$classes.gutterBottom, w && e$classes.paragraph, "inherit" !== s && e$classes["align".concat(c.a(s))], "initial" !== A && e$classes["display".concat(c.a(A))]),
    ref: t
  }, k))
})
exports.a = s.a(function (e) {
  return {
    root: {
      margin: 0
    },
    body2: e.typography.body2,
    body1: e.typography.body1,
    caption: e.typography.caption,
    button: e.typography.button,
    h1: e.typography.h1,
    h2: e.typography.h2,
    h3: e.typography.h3,
    h4: e.typography.h4,
    h5: e.typography.h5,
    h6: e.typography.h6,
    subtitle1: e.typography.subtitle1,
    subtitle2: e.typography.subtitle2,
    overline: e.typography.overline,
    srOnly: {
      position: "absolute",
      height: 1,
      width: 1,
      overflow: "hidden"
    },
    alignLeft: {
      textAlign: "left"
    },
    alignCenter: {
      textAlign: "center"
    },
    alignRight: {
      textAlign: "right"
    },
    alignJustify: {
      textAlign: "justify"
    },
    noWrap: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    gutterBottom: {
      marginBottom: "0.35em"
    },
    paragraph: {
      marginBottom: 16
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: e.palette.primary.main
    },
    colorSecondary: {
      color: e.palette.secondary.main
    },
    colorTextPrimary: {
      color: e.palette.text.primary
    },
    colorTextSecondary: {
      color: e.palette.text.secondary
    },
    colorError: {
      color: e.palette.error.main
    },
    displayInline: {
      display: "inline"
    },
    displayBlock: {
      display: "block"
    }
  }
}, {
  name: "MuiTypography"
})(l)
