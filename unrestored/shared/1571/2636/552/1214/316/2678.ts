/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2678
 */

"use strict"

var r = require(/* 54 */"../../../54")
var i = require(/* 19 */"../../../19")
var o = require(/* 0 */"react")
require(/* 50 */"../../../50/index")
var a = require(/* 98 */"../../../551/1211/98")
var s = require(/* 154 */"../../../551/1211/699/154/index")
var c = require(/* 396 */"../../../551/1211/269/396")
var u = require(/* 1548 */"../../../551/1211/699/2642/1548")
var l = require(/* 233 */"../../../551/1211/699/233")
var f = o.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$color = e.color
  var d = undefined === e$color ? "default" : e$color
  var /* [auto-meaningful-name] */e$component = e.component
  var p = undefined === e$component ? "button" : e$component
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var A = undefined !== e$disabled && e$disabled
  var /* [auto-meaningful-name] */e$disableElevation = e.disableElevation
  var v = undefined !== e$disableElevation && e$disableElevation
  var /* [auto-meaningful-name] */e$disableFocusRipple = e.disableFocusRipple
  var y = undefined !== e$disableFocusRipple && e$disableFocusRipple
  var /* [auto-meaningful-name] */e$endIcon = e.endIcon
  var /* [auto-meaningful-name] */e$focusVisibleClassName = e.focusVisibleClassName
  var /* [auto-meaningful-name] */e$fullWidth = e.fullWidth
  var x = undefined !== e$fullWidth && e$fullWidth
  var /* [auto-meaningful-name] */e$size = e.size
  var O = undefined === e$size ? "medium" : e$size
  var /* [auto-meaningful-name] */e$startIcon = e.startIcon
  var /* [auto-meaningful-name] */e$type = e.type
  var T = undefined === e$type ? "button" : e$type
  var /* [auto-meaningful-name] */e$variant = e.variant
  var D = undefined === e$variant ? "text" : e$variant
  var I = r.a(e, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"])
  var R = e$startIcon && o.createElement("span", {
    className: a.a(e$classes.startIcon, e$classes["iconSize".concat(l.a(O))])
  }, e$startIcon)
  var F = e$endIcon && o.createElement("span", {
    className: a.a(e$classes.endIcon, e$classes["iconSize".concat(l.a(O))])
  }, e$endIcon)
  return o.createElement(u.a, i.a({
    className: a.a(e$classes.root, e$classes[D], e$className, "inherit" === d ? e$classes.colorInherit : "default" !== d && e$classes["".concat(D).concat(l.a(d))], "medium" !== O && [e$classes["".concat(D, "Size").concat(l.a(O))], e$classes["size".concat(l.a(O))]], v && e$classes.disableElevation, A && e$classes.disabled, x && e$classes.fullWidth),
    component: p,
    disabled: A,
    focusRipple: !y,
    focusVisibleClassName: a.a(e$classes.focusVisible, e$focusVisibleClassName),
    ref: t,
    type: T
  }, I), o.createElement("span", {
    className: e$classes.label
  }, R, e$children, F))
})
exports.a = s.a(function (e) {
  return {
    root: i.a({}, e.typography.button, {
      boxSizing: "border-box",
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: e.shape.borderRadius,
      color: e.palette.text.primary,
      transition: e.transitions.create(["background-color", "box-shadow", "border"], {
        duration: e.transitions.duration.short
      }),
      "&:hover": {
        textDecoration: "none",
        backgroundColor: c.a(e.palette.text.primary, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        },
        "&$disabled": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        color: e.palette.action.disabled
      }
    }),
    label: {
      width: "100%",
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit"
    },
    text: {
      padding: "6px 8px"
    },
    textPrimary: {
      color: e.palette.primary.main,
      "&:hover": {
        backgroundColor: c.a(e.palette.primary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    textSecondary: {
      color: e.palette.secondary.main,
      "&:hover": {
        backgroundColor: c.a(e.palette.secondary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlined: {
      padding: "5px 15px",
      border: "1px solid ".concat("light" === e.palette.type ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"),
      "&$disabled": {
        border: "1px solid ".concat(e.palette.action.disabledBackground)
      }
    },
    outlinedPrimary: {
      color: e.palette.primary.main,
      border: "1px solid ".concat(c.a(e.palette.primary.main, .5)),
      "&:hover": {
        border: "1px solid ".concat(e.palette.primary.main),
        backgroundColor: c.a(e.palette.primary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    },
    outlinedSecondary: {
      color: e.palette.secondary.main,
      border: "1px solid ".concat(c.a(e.palette.secondary.main, .5)),
      "&:hover": {
        border: "1px solid ".concat(e.palette.secondary.main),
        backgroundColor: c.a(e.palette.secondary.main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&$disabled": {
        border: "1px solid ".concat(e.palette.action.disabled)
      }
    },
    contained: {
      color: e.palette.getContrastText(e.palette.grey[300]),
      backgroundColor: e.palette.grey[300],
      boxShadow: e.shadows[2],
      "&:hover": {
        backgroundColor: e.palette.grey.A100,
        boxShadow: e.shadows[4],
        "@media (hover: none)": {
          boxShadow: e.shadows[2],
          backgroundColor: e.palette.grey[300]
        },
        "&$disabled": {
          backgroundColor: e.palette.action.disabledBackground
        }
      },
      "&$focusVisible": {
        boxShadow: e.shadows[6]
      },
      "&:active": {
        boxShadow: e.shadows[8]
      },
      "&$disabled": {
        color: e.palette.action.disabled,
        boxShadow: e.shadows[0],
        backgroundColor: e.palette.action.disabledBackground
      }
    },
    containedPrimary: {
      color: e.palette.primary.contrastText,
      backgroundColor: e.palette.primary.main,
      "&:hover": {
        backgroundColor: e.palette.primary.dark,
        "@media (hover: none)": {
          backgroundColor: e.palette.primary.main
        }
      }
    },
    containedSecondary: {
      color: e.palette.secondary.contrastText,
      backgroundColor: e.palette.secondary.main,
      "&:hover": {
        backgroundColor: e.palette.secondary.dark,
        "@media (hover: none)": {
          backgroundColor: e.palette.secondary.main
        }
      }
    },
    disableElevation: {
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none"
      },
      "&$focusVisible": {
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none"
      },
      "&$disabled": {
        boxShadow: "none"
      }
    },
    focusVisible: {},
    disabled: {},
    colorInherit: {
      color: "inherit",
      borderColor: "currentColor"
    },
    textSizeSmall: {
      padding: "4px 5px",
      fontSize: e.typography.pxToRem(13)
    },
    textSizeLarge: {
      padding: "8px 11px",
      fontSize: e.typography.pxToRem(15)
    },
    outlinedSizeSmall: {
      padding: "3px 9px",
      fontSize: e.typography.pxToRem(13)
    },
    outlinedSizeLarge: {
      padding: "7px 21px",
      fontSize: e.typography.pxToRem(15)
    },
    containedSizeSmall: {
      padding: "4px 10px",
      fontSize: e.typography.pxToRem(13)
    },
    containedSizeLarge: {
      padding: "8px 22px",
      fontSize: e.typography.pxToRem(15)
    },
    sizeSmall: {},
    sizeLarge: {},
    fullWidth: {
      width: "100%"
    },
    startIcon: {
      display: "inherit",
      marginRight: 8,
      marginLeft: -4,
      "&$iconSizeSmall": {
        marginLeft: -2
      }
    },
    endIcon: {
      display: "inherit",
      marginRight: -4,
      marginLeft: 8,
      "&$iconSizeSmall": {
        marginRight: -2
      }
    },
    iconSizeSmall: {
      "& > *:first-child": {
        fontSize: 18
      }
    },
    iconSizeMedium: {
      "& > *:first-child": {
        fontSize: 20
      }
    },
    iconSizeLarge: {
      "& > *:first-child": {
        fontSize: 22
      }
    }
  }
}, {
  name: "MuiButton"
})(f)
