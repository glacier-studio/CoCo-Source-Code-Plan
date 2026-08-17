/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2916
 */

"use strict"

var a = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var r = a(require(/* 755 */"../../../../13/780/755"))
var o = a(require(/* 1552 */"../../../../13/780/1286/1552/index"))
var i = a(require(/* 1066 */"../../../../13/780/1066"))
var l = a(require(/* 1067 */"../../../../13/780/1067"))
var u = a(require(/* 1070 */"../../../../13/780/1070/index"))
var s = a(require(/* 940 */"../../../../13/780/940"))
var d = a(require(/* 1551 */"../../../../13/780/1070/1551"))
var c = a(require(/* 1069 */"../../../../13/780/1069/index"))
var f = require(/* 0 */"react")
var h = a(require(/* 50 */"../../../../50/index"))
var p = require(/* 2751 */"./2751")
var v = {
  clickable: h.default.bool,
  dblclickable: h.default.bool,
  manager: h.default.object,
  actions: h.default.object,
  player: h.default.object,
  shortcuts: h.default.array
}
var m = function (e) {
  function t(e, n) {
    var a;
    (0, i.default)(this, t);
    (a = (0, u.default)(this, (0, s.default)(t).call(this, e, n))).defaultShortcuts = [
      {
        keyCode: 32,
        handle: a.togglePlay
      }, {
        keyCode: 75,
        handle: a.togglePlay
      }, {
        keyCode: 70,
        handle: a.toggleFullscreen
      }, {
        keyCode: 37,
        handle: function (e, t) {
          if (e.hasStarted) {
            t.replay(5, {
              action: "replay-5",
              source: "shortcut"
            })
          }
        }
      }, {
        keyCode: 74,
        handle: function (e, t) {
          if (e.hasStarted) {
            t.replay(10, {
              action: "replay-10",
              source: "shortcut"
            })
          }
        }
      }, {
        keyCode: 39,
        handle: function (e, t) {
          if (e.hasStarted) {
            t.forward(5, {
              action: "forward-5",
              source: "shortcut"
            })
          }
        }
      }, {
        keyCode: 76,
        handle: function (e, t) {
          if (e.hasStarted) {
            t.forward(10, {
              action: "forward-10",
              source: "shortcut"
            })
          }
        }
      }, {
        keyCode: 36,
        handle: function (e, t) {
          if (e.hasStarted) {
            t.seek(0)
          }
        }
      }, {
        keyCode: 35,
        handle: function (e, t) {
          if (e.hasStarted) {
            t.seek(e.duration)
          }
        }
      }, {
        keyCode: 38,
        handle: function (e, t) {
          var n = e.volume + .05
          if (n > 1) {
            n = 1
          }
          t.changeVolume(n, {
            action: "volume-up",
            source: "shortcut"
          })
        }
      }, {
        keyCode: 40,
        handle: function (e, t) {
          var n = e.volume - .05
          if (n < 0) {
            n = 0
          }
          var a = n > 0 ? "volume-down" : "volume-off"
          t.changeVolume(n, {
            action: a,
            source: "shortcut"
          })
        }
      }, {
        keyCode: 190,
        shift: true,
        handle: function (e, t) {
          var /* [auto-meaningful-name] */e$playbackRate = e.playbackRate
          if (e$playbackRate >= 1.5) {
            e$playbackRate = 2
          } else {
            if (e$playbackRate >= 1.25) {
              e$playbackRate = 1.5
            } else {
              if (e$playbackRate >= 1) {
                e$playbackRate = 1.25
              } else {
                if (e$playbackRate >= .5) {
                  e$playbackRate = 1
                } else {
                  if (e$playbackRate >= .25) {
                    e$playbackRate = .5
                  } else {
                    if (e$playbackRate >= 0) {
                      e$playbackRate = .25
                    }
                  }
                }
              }
            }
          }
          t.changeRate(e$playbackRate, {
            action: "fast-forward",
            source: "shortcut"
          })
        }
      }, {
        keyCode: 188,
        shift: true,
        handle: function (e, t) {
          var /* [auto-meaningful-name] */e$playbackRate = e.playbackRate
          if (e$playbackRate <= .5) {
            e$playbackRate = .25
          } else {
            if (e$playbackRate <= 1) {
              e$playbackRate = .5
            } else {
              if (e$playbackRate <= 1.25) {
                e$playbackRate = 1
              } else {
                if (e$playbackRate <= 1.5) {
                  e$playbackRate = 1.25
                } else {
                  if (e$playbackRate <= 2) {
                    e$playbackRate = 1.5
                  }
                }
              }
            }
          }
          t.changeRate(e$playbackRate, {
            action: "fast-rewind",
            source: "shortcut"
          })
        }
      }
    ]
    a.shortcuts = (0, o.default)(a.defaultShortcuts)
    a.mergeShortcuts = a.mergeShortcuts.bind((0, d.default)(a))
    a.handleKeyPress = a.handleKeyPress.bind((0, d.default)(a))
    a.handleClick = a.handleClick.bind((0, d.default)(a))
    a.handleDoubleClick = a.handleDoubleClick.bind((0, d.default)(a))
    return a
  }
  (0, c.default)(t, e);
  (0, l.default)(t, [
    {
      key: "componentDidMount",
      value: function () {
        this.mergeShortcuts()
        document.addEventListener("keydown", this.handleKeyPress)
        document.addEventListener("click", this.handleClick)
        document.addEventListener("dblclick", this.handleDoubleClick)
      }
    }, {
      key: "componentDidUpdate",
      value: function (e) {
        if (e.shortcuts !== this.props.shortcuts) {
          this.mergeShortcuts()
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        document.removeEventListener("keydown", this.handleKeyPress)
        document.removeEventListener("click", this.handleClick)
        document.removeEventListener("dblclick", this.handleDoubleClick)
      }
    }, {
      key: "mergeShortcuts",
      value: function () {
        var e = function (e) {
          var /* [auto-meaningful-name] */e$keyCode = e.keyCode
          var n = undefined === e$keyCode ? 0 : e$keyCode
          var /* [auto-meaningful-name] */e$ctrl = e.ctrl
          var r = undefined !== e$ctrl && e$ctrl
          var /* [auto-meaningful-name] */e$shift = e.shift
          var i = undefined !== e$shift && e$shift
          var /* [auto-meaningful-name] */e$alt = e.alt
          var u = undefined !== e$alt && e$alt
          return "".concat(n, ":").concat(r, ":").concat(i, ":").concat(u)
        }
        var t = this.defaultShortcuts.reduce(function (t, n) {
          return Object.assign(t, (0, r.default)({}, e(n), n))
        }, {})
        var n = (this.props.shortcuts || []).reduce(function (t, n) {
          var /* [auto-meaningful-name] */n$keyCode = n.keyCode
          var /* [auto-meaningful-name] */n$handle = n.handle
          return n$keyCode && "function" === typeof n$handle ? Object.assign(t, (0, r.default)({}, e(n), n)) : t
        }, t)
        var a = function (e) {
          var t = 0;
          ["ctrl", "shift", "alt"].forEach(function (n) {
            if (e[n]) {
              t++
            }
          })
          return t
        }
        this.shortcuts = Object.keys(n).map(function (e) {
          return n[e]
        }).sort(function (e, t) {
          return a(t) - a(e)
        })
      }
    }, {
      key: "togglePlay",
      value: function (e, t) {
        if (e.paused) {
          t.play({
            action: "play",
            source: "shortcut"
          })
        } else {
          t.pause({
            action: "pause",
            source: "shortcut"
          })
        }
      }
    }, {
      key: "toggleFullscreen",
      value: function (e, t) {
        t.toggleFullscreen(e)
      }
    }, {
      key: "handleKeyPress",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        if (this$props$player.isActive && (!document.activeElement || !((0, p.hasClass)(document.activeElement, "video-react-control") || (0, p.hasClass)(document.activeElement, "video-react-menu-button-active") || (0, p.hasClass)(document.activeElement, "video-react-big-play-button")))) {
          var r = e.keyCode || e.which
          var o = e.ctrlKey || e.metaKey
          var /* [auto-meaningful-name] */e$shiftKey = e.shiftKey
          var /* [auto-meaningful-name] */e$altKey = e.altKey
          var u = this.shortcuts.filter(function (e) {
            return !(!e.keyCode || e.keyCode - r !== 0) && !(undefined !== e.ctrl && e.ctrl !== o || undefined !== e.shift && e.shift !== e$shiftKey || undefined !== e.alt && e.alt !== e$altKey)
          })[0]
          if (u) {
            u.handle(this$props$player, this$props$actions)
            e.preventDefault()
          }
        }
      }
    }, {
      key: "canBeClicked",
      value: function (e, t) {
        return !(!e.isActive || "VIDEO" !== t.target.nodeName || 4 !== e.readyState)
      }
    }, {
      key: "handleClick",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$clickable = this$props.clickable
        if (this.canBeClicked(this$props$player, e) && this$props$clickable) {
          this.togglePlay(this$props$player, this$props$actions)
        }
      }
    }, {
      key: "handleDoubleClick",
      value: function (e) {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$dblclickable = this$props.dblclickable
        if (this.canBeClicked(this$props$player, e) && this$props$dblclickable) {
          this.toggleFullscreen(this$props$player, this$props$actions)
        }
      }
    }, {
      key: "render",
      value: function () {
        return null
      }
    }
  ])
  return t
}(f.Component)
exports.default = m
m.propTypes = v
m.defaultProps = {
  clickable: true,
  dblclickable: true
}
m.displayName = "Shortcut"
