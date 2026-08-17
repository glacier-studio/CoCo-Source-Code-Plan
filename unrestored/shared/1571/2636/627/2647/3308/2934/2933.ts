/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2933
 */

"use strict"

var a = require(/* 1068 */"../../../../13/780/1068")
var r = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 2734 */"../2918/2734"))
var i = r(require(/* 2708 */"../3309/2708"))
var l = r(require(/* 1066 */"../../../../13/780/1066"))
var u = r(require(/* 1067 */"../../../../13/780/1067"))
var s = r(require(/* 1070 */"../../../../13/780/1070/index"))
var d = r(require(/* 940 */"../../../../13/780/940"))
var c = r(require(/* 1551 */"../../../../13/780/1070/1551"))
var f = r(require(/* 1069 */"../../../../13/780/1069/index"))
var h = r(require(/* 50 */"../../../../50/index"))
var p = a(require(/* 0 */"react"))
var v = r(require(/* 8 */"classnames"))
var m = {
  tagName: h.default.string,
  onClick: h.default.func.isRequired,
  onFocus: h.default.func,
  onBlur: h.default.func,
  className: h.default.string
}
var y = function (e) {
  function t(e, n) {
    var a;
    (0, l.default)(this, t);
    (a = (0, s.default)(this, (0, d.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0, c.default)(a))
    a.handleFocus = a.handleFocus.bind((0, c.default)(a))
    a.handleBlur = a.handleBlur.bind((0, c.default)(a))
    a.handleKeypress = a.handleKeypress.bind((0, c.default)(a))
    return a
  }
  (0, f.default)(t, e);
  (0, u.default)(t, [
    {
      key: "handleKeypress",
      value: function (e) {
        if (!(32 !== e.which && 13 !== e.which)) {
          e.preventDefault()
          this.handleClick(e)
        }
      }
    }, {
      key: "handleClick",
      value: function (e) {
        (0, this.props.onClick)(e)
      }
    }, {
      key: "handleFocus",
      value: function (e) {
        document.addEventListener("keydown", this.handleKeypress)
        if (this.props.onFocus) {
          this.props.onFocus(e)
        }
      }
    }, {
      key: "handleBlur",
      value: function (e) {
        document.removeEventListener("keydown", this.handleKeypress)
        if (this.props.onBlur) {
          this.props.onBlur(e)
        }
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props$tagName = this.props.tagName
        var t = (0, i.default)({}, this.props)
        delete t.tagName
        delete t.className
        return p.default.createElement(this$props$tagName, (0, o.default)({
          className: (0, v.default)(this.props.className),
          role: "button",
          tabIndex: "0",
          onClick: this.handleClick,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, t))
      }
    }
  ])
  return t
}(p.Component)
exports.default = y
y.propTypes = m
y.defaultProps = {
  tagName: "div"
}
y.displayName = "ClickableComponent"
