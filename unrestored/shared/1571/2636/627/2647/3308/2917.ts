/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2917
 */

"use strict"

var a = require(/* 1068 */"../../../13/780/1068")
var r = require(/* 571 */"../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 1216 */"../../../13/780/1794/1216/index"))
var i = r(require(/* 1066 */"../../../13/780/1066"))
var l = r(require(/* 1067 */"../../../13/780/1067"))
var u = r(require(/* 1070 */"../../../13/780/1070/index"))
var s = r(require(/* 940 */"../../../13/780/940"))
var d = r(require(/* 1551 */"../../../13/780/1070/1551"))
var c = r(require(/* 1069 */"../../../13/780/1069/index"))
var f = r(require(/* 50 */"../../../50/index"))
var h = a(require(/* 0 */"react"))
var p = r(require(/* 8 */"classnames"))
var v = r(require(/* 2918 */"./2918/index"))
var m = r(require(/* 2923 */"./2923"))
var y = r(require(/* 2924 */"./2924"))
var g = r(require(/* 2926 */"./2926/index"))
var b = r(require(/* 2927 */"./2927"))
var k = r(require(/* 2928 */"./2928"))
var E = r(require(/* 2929 */"./2929"))
var C = r(require(/* 2930 */"./2930/index"))
var S = r(require(/* 2931 */"./2931"))
var P = r(require(/* 2932 */"./2932/index"))
var w = r(require(/* 2782 */"./2782"))
var O = require(/* 2701 */"./2930/2701")
var M = {
  children: f.default.any,
  autoHide: f.default.bool,
  autoHideTime: f.default.number,
  disableDefaultControls: f.default.bool,
  disableCompletely: f.default.bool,
  className: f.default.string
}
var N = function (e) {
  function t(e) {
    var n;
    (0, i.default)(this, t);
    (n = (0, u.default)(this, (0, s.default)(t).call(this, e))).getDefaultChildren = n.getDefaultChildren.bind((0, d.default)(n))
    n.getFullChildren = n.getFullChildren.bind((0, d.default)(n))
    return n
  }
  (0, c.default)(t, e);
  (0, l.default)(t, [
    {
      key: "getDefaultChildren",
      value: function () {
        return [
          h.default.createElement(m.default, {
            key: "play-toggle",
            order: 1
          }), h.default.createElement(P.default, {
            key: "volume-menu-button",
            order: 4
          }), h.default.createElement(E.default, {
            key: "current-time-display",
            order: 5.1
          }), h.default.createElement(S.default, {
            key: "time-divider",
            order: 5.2
          }), h.default.createElement(C.default, {
            key: "duration-display",
            order: 5.3
          }), h.default.createElement(v.default, {
            key: "progress-control",
            order: 6
          }), h.default.createElement(b.default, {
            key: "fullscreen-toggle",
            order: 8
          })
        ]
      }
    }, {
      key: "getFullChildren",
      value: function () {
        return [
          h.default.createElement(m.default, {
            key: "play-toggle",
            order: 1
          }), h.default.createElement(g.default, {
            key: "replay-control",
            order: 2
          }), h.default.createElement(y.default, {
            key: "forward-control",
            order: 3
          }), h.default.createElement(P.default, {
            key: "volume-menu-button",
            order: 4
          }), h.default.createElement(E.default, {
            key: "current-time-display",
            order: 5
          }), h.default.createElement(S.default, {
            key: "time-divider",
            order: 6
          }), h.default.createElement(C.default, {
            key: "duration-display",
            order: 7
          }), h.default.createElement(v.default, {
            key: "progress-control",
            order: 8
          }), h.default.createElement(k.default, {
            key: "remaining-time-display",
            order: 9
          }), h.default.createElement(w.default, {
            rates: [1, 1.25, 1.5, 2],
            key: "playback-rate",
            order: 10
          }), h.default.createElement(b.default, {
            key: "fullscreen-toggle",
            order: 11
          })
        ]
      }
    }, {
      key: "getChildren",
      value: function () {
        var e = h.default.Children.toArray(this.props.children)
        var t = this.props.disableDefaultControls ? [] : this.getDefaultChildren()
        var /* [auto-meaningful-name] */this$props = this.props
        this$props.className
        var a = (0, o.default)(this$props, ["className"])
        return (0, O.mergeAndSortChildren)(t, e, a)
      }
    }, {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$autoHide = this$props.autoHide
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        var /* [auto-meaningful-name] */this$props$disableCompletely = this$props.disableCompletely
        var r = this.getChildren()
        return this$props$disableCompletely ? null : h.default.createElement("div", {
          className: (0, p.default)("video-react-control-bar", {
            "video-react-control-bar-auto-hide": this$props$autoHide
          }, this$props$className)
        }, r)
      }
    }
  ])
  return t
}(h.Component)
exports.default = N
N.propTypes = M
N.defaultProps = {
  autoHide: true,
  disableCompletely: false
}
N.displayName = "ControlBar"
