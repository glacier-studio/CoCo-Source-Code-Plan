/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3313
 */

"use strict"

var a = require(/* 571 */"../../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = f
var r = a(require(/* 2734 */"../../2918/2734"))
var o = a(require(/* 2708 */"../../3309/2708"))
var i = a(require(/* 50 */"../../../../../50/index"))
var l = a(require(/* 0 */"react"))
var u = a(require(/* 8 */"classnames"))
var s = a(require(/* 2933 */"../../2934/2933"))
var d = a(require(/* 3314 */"./3314"))
var c = {
  inline: i.default.bool,
  onClick: i.default.func.isRequired,
  onFocus: i.default.func,
  onBlur: i.default.func,
  className: i.default.string
}
function f(e) {
  var /* [auto-meaningful-name] */e$inline = e.inline
  var /* [auto-meaningful-name] */e$className = e.className
  var a = (0, o.default)({}, e)
  delete a.children
  delete a.inline
  delete a.className
  return l.default.createElement(s.default, (0, r.default)({
    className: (0, u.default)(e$className, {
      "video-react-menu-button-inline": !!e$inline,
      "video-react-menu-button-popup": !e$inline
    }, "video-react-control video-react-button video-react-menu-button")
  }, a), l.default.createElement(d.default, e))
}
f.propTypes = c
f.defaultProps = {
  inline: true
}
f.displayName = "PopupButton"
