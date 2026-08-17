/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2919
 */

"use strict"

var a = require(/* 1068 */"../../../13/780/1068")
var r = require(/* 571 */"../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 1066 */"../../../13/780/1066"))
var i = r(require(/* 1067 */"../../../13/780/1067"))
var l = r(require(/* 1070 */"../../../13/780/1070/index"))
var u = r(require(/* 940 */"../../../13/780/940"))
var s = r(require(/* 1551 */"../../../13/780/1070/1551"))
var d = r(require(/* 1069 */"../../../13/780/1069/index"))
var c = r(require(/* 50 */"../../../50/index"))
var f = a(require(/* 0 */"react"))
var h = r(require(/* 8 */"classnames"))
var p = r(require(/* 2781 */"./2781"))
var v = r(require(/* 2920 */"./2920"))
var m = r(require(/* 2921 */"./2921"))
var y = r(require(/* 2922 */"./2922"))
var g = require(/* 2701 */"./2930/2701")
var b = {
  player: c.default.object,
  mouseTime: c.default.object,
  actions: c.default.object,
  className: c.default.string
}
var k = function (e) {
  function t(e, n) {
    var a;
    (0, o.default)(this, t);
    (a = (0, l.default)(this, (0, u.default)(t).call(this, e, n))).getPercent = a.getPercent.bind((0, s.default)(a))
    a.getNewTime = a.getNewTime.bind((0, s.default)(a))
    a.stepForward = a.stepForward.bind((0, s.default)(a))
    a.stepBack = a.stepBack.bind((0, s.default)(a))
    a.handleMouseDown = a.handleMouseDown.bind((0, s.default)(a))
    a.handleMouseMove = a.handleMouseMove.bind((0, s.default)(a))
    a.handleMouseUp = a.handleMouseUp.bind((0, s.default)(a))
    return a
  }
  (0, d.default)(t, e);
  (0, i.default)(t, [
    {
      key: "componentDidMount",
      value: function () {}
    }, {
      key: "componentDidUpdate",
      value: function () {}
    }, {
      key: "getPercent",
      value: function () {
        var /* [auto-meaningful-name] */this$props$player = this.props.player
        var /* [auto-meaningful-name] */this$props$player$currentTime = this$props$player.currentTime
        var n = (this$props$player.seekingTime || this$props$player$currentTime) / this$props$player.duration
        return n >= 1 ? 1 : n
      }
    }, {
      key: "getNewTime",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$player$duration = this.props.player.duration
        var n = this.slider.calculateDistance(e) * this$props$player$duration
        return n === this$props$player$duration ? n - .1 : n
      }
    }, {
      key: "handleMouseDown",
      value: function () {}
    }, {
      key: "handleMouseUp",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$actions = this.props.actions
        var n = this.getNewTime(e)
        this$props$actions.seek(n)
        this$props$actions.handleEndSeeking(n)
      }
    }, {
      key: "handleMouseMove",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props$actions = this.props.actions
        var n = this.getNewTime(e)
        this$props$actions.handleSeekingTime(n)
      }
    }, {
      key: "stepForward",
      value: function () {
        this.props.actions.forward(5)
      }
    }, {
      key: "stepBack",
      value: function () {
        this.props.actions.replay(5)
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$player$currentTime = this$props$player.currentTime
        var /* [auto-meaningful-name] */this$props$player$seekingTime = this$props$player.seekingTime
        var /* [auto-meaningful-name] */this$props$player$duration = this$props$player.duration
        var /* [auto-meaningful-name] */this$props$player$buffered = this$props$player.buffered
        var /* [auto-meaningful-name] */this$props$mouseTime = this$props.mouseTime
        var u = this$props$player$seekingTime || this$props$player$currentTime
        return f.default.createElement(p.default, {
          ref: function (t) {
            e.slider = t
          },
          label: "video progress bar",
          className: (0, h.default)("video-react-progress-holder", this.props.className),
          valuenow: (100 * this.getPercent()).toFixed(2),
          valuetext: (0, g.formatTime)(u, this$props$player$duration),
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          getPercent: this.getPercent,
          stepForward: this.stepForward,
          stepBack: this.stepBack
        }, f.default.createElement(m.default, {
          buffered: this$props$player$buffered,
          currentTime: u,
          duration: this$props$player$duration
        }), f.default.createElement(y.default, {
          duration: this$props$player$duration,
          mouseTime: this$props$mouseTime
        }), f.default.createElement(v.default, {
          currentTime: u,
          duration: this$props$player$duration
        }))
      }
    }
  ])
  return t
}(f.Component)
exports.default = k
k.propTypes = b
k.displayName = "SeekBar"
