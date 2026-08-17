/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3315
 */

"use strict"

var a = require(/* 1068 */"../../../../../13/780/1068")
var r = require(/* 571 */"../../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 2734 */"../../2918/2734"))
var i = r(require(/* 1066 */"../../../../../13/780/1066"))
var l = r(require(/* 1067 */"../../../../../13/780/1067"))
var u = r(require(/* 1070 */"../../../../../13/780/1070/index"))
var s = r(require(/* 940 */"../../../../../13/780/940"))
var d = r(require(/* 1551 */"../../../../../13/780/1070/1551"))
var c = r(require(/* 1069 */"../../../../../13/780/1069/index"))
var f = r(require(/* 50 */"../../../../../50/index"))
var h = a(require(/* 0 */"react"))
var p = r(require(/* 8 */"classnames"))
var v = r(require(/* 2781 */"../../2781"))
var m = r(require(/* 3316 */"./3316"))
var y = {
  actions: f.default.object,
  player: f.default.object,
  className: f.default.string,
  onFocus: f.default.func,
  onBlur: f.default.func
}
var g = function (e) {
  function t(e, n) {
    var a;
    (0, i.default)(this, t);
    (a = (0, u.default)(this, (0, s.default)(t).call(this, e, n))).state = {
      percentage: "0%"
    }
    a.handleMouseMove = a.handleMouseMove.bind((0, d.default)(a))
    a.handlePercentageChange = a.handlePercentageChange.bind((0, d.default)(a))
    a.checkMuted = a.checkMuted.bind((0, d.default)(a))
    a.getPercent = a.getPercent.bind((0, d.default)(a))
    a.stepForward = a.stepForward.bind((0, d.default)(a))
    a.stepBack = a.stepBack.bind((0, d.default)(a))
    a.handleFocus = a.handleFocus.bind((0, d.default)(a))
    a.handleBlur = a.handleBlur.bind((0, d.default)(a))
    a.handleClick = a.handleClick.bind((0, d.default)(a))
    return a
  }
  (0, c.default)(t, e);
  (0, l.default)(t, [
    {
      key: "componentDidMount",
      value: function () {}
    }, {
      key: "getPercent",
      value: function () {
        var /* [auto-meaningful-name] */this$props$player = this.props.player
        return this$props$player.muted ? 0 : this$props$player.volume
      }
    }, {
      key: "checkMuted",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        if (this$props$player.muted) {
          this$props$actions.mute(false)
        }
      }
    }, {
      key: "handleMouseMove",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$actions = this.props.actions
        this.checkMuted()
        var n = this.slider.calculateDistance(e)
        this$props$actions.changeVolume(n)
      }
    }, {
      key: "stepForward",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        this.checkMuted()
        this$props$actions.changeVolume(this$props$player.volume + .1)
      }
    }, {
      key: "stepBack",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        this.checkMuted()
        this$props$actions.changeVolume(this$props$player.volume - .1)
      }
    }, {
      key: "handleFocus",
      value: function (e) {
        if (this.props.onFocus) {
          this.props.onFocus(e)
        }
      }
    }, {
      key: "handleBlur",
      value: function (e) {
        if (this.props.onBlur) {
          this.props.onBlur(e)
        }
      }
    }, {
      key: "handlePercentageChange",
      value: function (e) {
        if (e !== this.state.percentage) {
          this.setState({
            percentage: e
          })
        }
      }
    }, {
      key: "handleClick",
      value: function (e) {
        e.stopPropagation()
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        var r = (100 * this$props$player.volume).toFixed(2)
        return h.default.createElement(v.default, (0, o.default)({
          ref: function (t) {
            e.slider = t
          },
          label: "volume level",
          valuenow: r,
          valuetext: "".concat(r, "%"),
          onMouseMove: this.handleMouseMove,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          sliderActive: this.handleFocus,
          sliderInactive: this.handleBlur,
          getPercent: this.getPercent,
          onPercentageChange: this.handlePercentageChange,
          stepForward: this.stepForward,
          stepBack: this.stepBack
        }, this.props, {
          className: (0, p.default)(this$props$className, "video-react-volume-bar video-react-slider-bar")
        }), h.default.createElement(m.default, this.props))
      }
    }
  ])
  return t
}(h.Component)
g.propTypes = y
g.displayName = "VolumeBar"
var b = g
exports.default = b
