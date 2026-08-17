/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2918
 */

"use strict"

var a = require(/* 1068 */"../../../../13/780/1068")
var r = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 2734 */"./2734"))
var i = r(require(/* 1066 */"../../../../13/780/1066"))
var l = r(require(/* 1067 */"../../../../13/780/1067"))
var u = r(require(/* 1070 */"../../../../13/780/1070/index"))
var s = r(require(/* 940 */"../../../../13/780/940"))
var d = r(require(/* 1551 */"../../../../13/780/1070/1551"))
var c = r(require(/* 1069 */"../../../../13/780/1069/index"))
var f = r(require(/* 50 */"../../../../50/index"))
var h = a(require(/* 0 */"react"))
var p = require(/* 80 */"react-dom")
var v = r(require(/* 8 */"classnames"))
var m = a(require(/* 2751 */"../2916/2751"))
var y = r(require(/* 2919 */"../2919"))
var g = {
  player: f.default.object,
  className: f.default.string
}
var b = function (e) {
  function t(e, n) {
    var a;
    (0, i.default)(this, t);
    (a = (0, u.default)(this, (0, s.default)(t).call(this, e, n))).state = {
      mouseTime: {
        time: null,
        position: 0
      }
    }
    a.handleMouseMoveThrottle = a.handleMouseMove.bind((0, d.default)(a))
    return a
  }
  (0, c.default)(t, e);
  (0, l.default)(t, [
    {
      key: "handleMouseMove",
      value: function (e) {
        if (e.pageX) {
          var /* [auto-meaningful-name] */this$props$player$duration = this.props.player.duration
          var n = (0, p.findDOMNode)(this.seekBar)
          var a = m.getPointerPosition(n, e).x * this$props$player$duration
          var r = e.pageX - m.findElPosition(n).left
          this.setState({
            mouseTime: {
              time: a,
              position: r
            }
          })
        }
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props$className = this.props.className
        return h.default.createElement("div", {
          onMouseMove: this.handleMouseMoveThrottle,
          className: (0, v.default)("video-react-progress-control video-react-control", this$props$className)
        }, h.default.createElement(y.default, (0, o.default)({
          mouseTime: this.state.mouseTime,
          ref: function (t) {
            e.seekBar = t
          }
        }, this.props)))
      }
    }
  ])
  return t
}(h.Component)
exports.default = b
b.propTypes = g
b.displayName = "ProgressControl"
