/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1005
 */

"use strict"

var r = require(/* 0 */"react")
require(/* 50 */"../../../50/index")
var i = require(/* 98 */"../98")
var o = require(/* 19 */"../../../19")
var a = require(/* 54 */"../../../54")
var s = require(/* 1065 */"./1065")
var c = require(/* 709 */"../709/index")
var u = require(/* 2642 */"./2642/index")
var l = c.a(function (e) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: e.typography.caption.fontSize,
      margin: "0 2px",
      color: e.palette.text.primary,
      fontWeight: e.typography.fontWeightMedium,
      padding: 0
    },
    hidden: {
      opacity: 0,
      pointerEvents: "none"
    },
    current: {
      color: e.palette.primary.main,
      fontWeight: 600
    },
    daySelected: {
      color: e.palette.primary.contrastText,
      backgroundColor: e.palette.primary.main,
      fontWeight: e.typography.fontWeightMedium,
      "&:hover": {
        backgroundColor: e.palette.primary.main
      }
    },
    dayDisabled: {
      pointerEvents: "none",
      color: e.palette.text.hint
    }
  }
}, {
  name: "MuiPickersDay"
})
var f = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$hidden = e.hidden
  var /* [auto-meaningful-name] */e$current = e.current
  var /* [auto-meaningful-name] */e$selected = e.selected
  var h = a.a(e, ["children", "disabled", "hidden", "current", "selected"])
  var p = l()
  var _ = i.a(p.day, e$hidden && p.hidden, e$current && p.current, e$selected && p.daySelected, e$disabled && p.dayDisabled)
  return r.createElement(u.a, o.a({
    className: _,
    tabIndex: e$hidden || e$disabled ? -1 : 0
  }, h), r.createElement(s.a, {
    variant: "body2",
    color: "inherit"
  }, e$children))
}
f.displayName = "Day"
f.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
}
exports.a = f
