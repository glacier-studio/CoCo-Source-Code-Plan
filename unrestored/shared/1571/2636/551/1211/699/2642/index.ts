/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2642
 */

"use strict"

var r = require(/* 19 */"../../../../19")
var i = require(/* 54 */"../../../../54")
var o = require(/* 0 */"react")
require(/* 50 */"../../../../50/index")
var a = require(/* 98 */"../../98")
var s = require(/* 154 */"../154/index")
var c = require(/* 396 */"../../269/396")
var u = require(/* 1548 */"./1548")
var l = require(/* 233 */"../233")
var f = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$edge = e.edge
  var s = undefined !== e$edge && e$edge
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$color = e.color
  var p = undefined === e$color ? "default" : e$color
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var A = undefined !== e$disabled && e$disabled
  var /* [auto-meaningful-name] */e$disableFocusRipple = e.disableFocusRipple
  var v = undefined !== e$disableFocusRipple && e$disableFocusRipple
  var /* [auto-meaningful-name] */e$size = e.size
  var y = undefined === e$size ? "medium" : e$size
  var b = i.a(e, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"])
  return o.createElement(u.a, r.a({
    className: a.a(e$classes.root, e$className, "default" !== p && e$classes["color".concat(l.a(p))], A && e$classes.disabled, "small" === y && e$classes["size".concat(l.a(y))], {
      start: e$classes.edgeStart,
      end: e$classes.edgeEnd
    }[s]),
    centerRipple: true,
    focusRipple: !v,
    disabled: A,
    ref: t
  }, b), o.createElement("span", {
    className: e$classes.label
  }, e$children))
})
exports.a = s.a(function (e) {
  return {
    root: {
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: e.typography.pxToRem(24),
      padding: 12,
      borderRadius: "50%",
      overflow: "visible",
      color: e.palette.action.active,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest
      }),
      "&:hover": {
        backgroundColor: c.a(e.palette.action.active, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        backgroundColor: "transparent",
        color: e.palette.action.disabled
      }
    },
    edgeStart: {
      marginLeft: -12,
      "$sizeSmall&": {
        marginLeft: -3
      }
    },
    edgeEnd: {
      marginRight: -12,
      "$sizeSmall&": {
        marginRight: -3
      }
    },
    colorInherit: {
      color: "inherit"
    },
    colorPrimary: {
      color: e.palette.primary.main,
      "&:hover": {
        backgroundColor: c.a(e.palette.primary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    colorSecondary: {
      color: e.palette.secondary.main,
      "&:hover": {
        backgroundColor: c.a(e.palette.secondary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    disabled: {},
    sizeSmall: {
      padding: 3,
      fontSize: e.typography.pxToRem(18)
    },
    label: {
      width: "100%",
      display: "flex",
      alignItems: "inherit",
      justifyContent: "inherit"
    }
  }
}, {
  name: "MuiIconButton"
})(f)
