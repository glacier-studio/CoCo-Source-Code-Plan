/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2932
 */

"use strict"

var a = require(/* 1068 */"../../../../13/780/1068")
var r = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 2734 */"../2918/2734"))
var i = r(require(/* 1066 */"../../../../13/780/1066"))
var l = r(require(/* 1067 */"../../../../13/780/1067"))
var u = r(require(/* 1070 */"../../../../13/780/1070/index"))
var s = r(require(/* 940 */"../../../../13/780/940"))
var d = r(require(/* 1551 */"../../../../13/780/1070/1551"))
var c = r(require(/* 1069 */"../../../../13/780/1069/index"))
var f = r(require(/* 50 */"../../../../50/index"))
var h = a(require(/* 0 */"react"))
var p = r(require(/* 8 */"classnames"))
var v = r(require(/* 3313 */"./3313/index"))
var m = r(require(/* 3315 */"./3315/index"))
var y = {
  player: f.default.object,
  actions: f.default.object,
  vertical: f.default.bool,
  className: f.default.string,
  alwaysShowVolume: f.default.bool
}
var g = function (e) {
  function t(e, n) {
    var a;
    (0, i.default)(this, t);
    (a = (0, u.default)(this, (0, s.default)(t).call(this, e, n))).state = {
      active: false
    }
    a.handleClick = a.handleClick.bind((0, d.default)(a))
    a.handleFocus = a.handleFocus.bind((0, d.default)(a))
    a.handleBlur = a.handleBlur.bind((0, d.default)(a))
    return a
  }
  (0, c.default)(t, e);
  (0, l.default)(t, [
    {
      key: "handleClick",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        this$props.actions.mute(!this$props$player.muted)
      }
    }, {
      key: "handleFocus",
      value: function () {
        this.setState({
          active: true
        })
      }
    }, {
      key: "handleBlur",
      value: function () {
        this.setState({
          active: false
        })
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$vertical = this$props.vertical
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        var r = !this$props$vertical
        var /* [auto-meaningful-name] */this$volumeLevel = this.volumeLevel
        return h.default.createElement(v.default, {
          className: (0, p.default)(this$props$className, {
            "video-react-volume-menu-button-vertical": this$props$vertical,
            "video-react-volume-menu-button-horizontal": !this$props$vertical,
            "video-react-vol-muted": this$props$player.muted,
            "video-react-vol-0": 0 === this$volumeLevel && !this$props$player.muted,
            "video-react-vol-1": 1 === this$volumeLevel,
            "video-react-vol-2": 2 === this$volumeLevel,
            "video-react-vol-3": 3 === this$volumeLevel,
            "video-react-slider-active": this.props.alwaysShowVolume || this.state.active,
            "video-react-lock-showing": this.props.alwaysShowVolume || this.state.active
          }, "video-react-volume-menu-button"),
          onClick: this.handleClick,
          inline: r
        }, h.default.createElement(m.default, (0, o.default)({
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, this.props)))
      }
    }, {
      key: "volumeLevel",
      get: function () {
        var /* [auto-meaningful-name] */this$props$player = this.props.player
        var /* [auto-meaningful-name] */this$props$player$volume = this$props$player.volume
        var /* [auto-meaningful-name] */this$props$player$muted = this$props$player.muted
        var a = 3
        if (0 === this$props$player$volume || this$props$player$muted) {
          a = 0
        } else {
          if (this$props$player$volume < .33) {
            a = 1
          } else {
            if (this$props$player$volume < .67) {
              a = 2
            }
          }
        }
        return a
      }
    }
  ])
  return t
}(h.Component)
g.propTypes = y
g.defaultProps = {
  vertical: false
}
g.displayName = "VolumeMenuButton"
var b = g
exports.default = b
