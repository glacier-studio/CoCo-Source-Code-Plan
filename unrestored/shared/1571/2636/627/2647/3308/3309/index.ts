/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：3309
 */

"use strict"

var a = require(/* 1068 */"../../../../13/780/1068")
var r = require(/* 571 */"../../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 2708 */"./2708"))
var i = r(require(/* 755 */"../../../../13/780/755"))
var l = r(require(/* 1216 */"../../../../13/780/1794/1216/index"))
var u = r(require(/* 1066 */"../../../../13/780/1066"))
var s = r(require(/* 1067 */"../../../../13/780/1067"))
var d = r(require(/* 1070 */"../../../../13/780/1070/index"))
var c = r(require(/* 940 */"../../../../13/780/940"))
var f = r(require(/* 1551 */"../../../../13/780/1070/1551"))
var h = r(require(/* 1069 */"../../../../13/780/1069/index"))
var p = r(require(/* 50 */"../../../../50/index"))
var v = a(require(/* 0 */"react"))
var m = r(require(/* 8 */"classnames"))
var y = r(require(/* 3310 */"./3310"))
var g = r(require(/* 2911 */"../2911"))
var b = r(require(/* 2912 */"../2912"))
var k = r(require(/* 2913 */"../2913"))
var E = r(require(/* 2914 */"../2914"))
var C = r(require(/* 2915 */"../2915"))
var S = r(require(/* 2916 */"../2916/index"))
var P = r(require(/* 2917 */"../2917"))
var w = a(require(/* 3319 */"./3319"))
var O = require(/* 2751 */"../2916/2751")
var M = require(/* 2701 */"../2930/2701")
var N = r(require(/* 2910 */"./2910"))
var D = {
  children: p.default.any,
  width: p.default.oneOfType([p.default.string, p.default.number]),
  height: p.default.oneOfType([p.default.string, p.default.number]),
  fluid: p.default.bool,
  muted: p.default.bool,
  playsInline: p.default.bool,
  aspectRatio: p.default.string,
  className: p.default.string,
  videoId: p.default.string,
  startTime: p.default.number,
  loop: p.default.bool,
  autoPlay: p.default.bool,
  src: p.default.string,
  poster: p.default.string,
  preload: p.default.oneOf(["auto", "metadata", "none"]),
  onLoadStart: p.default.func,
  onWaiting: p.default.func,
  onCanPlay: p.default.func,
  onCanPlayThrough: p.default.func,
  onPlaying: p.default.func,
  onEnded: p.default.func,
  onSeeking: p.default.func,
  onSeeked: p.default.func,
  onPlay: p.default.func,
  onPause: p.default.func,
  onProgress: p.default.func,
  onDurationChange: p.default.func,
  onError: p.default.func,
  onSuspend: p.default.func,
  onAbort: p.default.func,
  onEmptied: p.default.func,
  onStalled: p.default.func,
  onLoadedMetadata: p.default.func,
  onLoadedData: p.default.func,
  onTimeUpdate: p.default.func,
  onRateChange: p.default.func,
  onVolumeChange: p.default.func,
  store: p.default.object
}
var T = function (e) {
  function t(e) {
    var n;
    (0, u.default)(this, t);
    (n = (0, d.default)(this, (0, c.default)(t).call(this, e))).controlsHideTimer = null
    n.video = null
    n.manager = new y.default(e.store)
    n.actions = n.manager.getActions()
    n.manager.subscribeToPlayerStateChange(n.handleStateChange.bind((0, f.default)(n)))
    n.getStyle = n.getStyle.bind((0, f.default)(n))
    n.handleResize = n.handleResize.bind((0, f.default)(n))
    n.getChildren = n.getChildren.bind((0, f.default)(n))
    n.handleMouseMove = (0, M.throttle)(n.handleMouseMove.bind((0, f.default)(n)), 250)
    n.handleMouseDown = n.handleMouseDown.bind((0, f.default)(n))
    n.startControlsTimer = n.startControlsTimer.bind((0, f.default)(n))
    n.handleFullScreenChange = n.handleFullScreenChange.bind((0, f.default)(n))
    n.handleKeyDown = n.handleKeyDown.bind((0, f.default)(n))
    n.handleFocus = n.handleFocus.bind((0, f.default)(n))
    n.handleBlur = n.handleBlur.bind((0, f.default)(n))
    return n
  }
  (0, h.default)(t, e);
  (0, s.default)(t, [
    {
      key: "componentDidMount",
      value: function () {
        this.handleResize()
        window.addEventListener("resize", this.handleResize)
        N.default.addEventListener(this.handleFullScreenChange)
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        window.removeEventListener("resize", this.handleResize)
        N.default.removeEventListener(this.handleFullScreenChange)
        if (this.controlsHideTimer) {
          window.clearTimeout(this.controlsHideTimer)
        }
      }
    }, {
      key: "getDefaultChildren",
      value: function (e) {
        var t = this
        return [
          v.default.createElement(E.default, {
            ref: function (e) {
              t.video = e
              t.manager.video = t.video
            },
            key: "video",
            order: 0
          }, e), v.default.createElement(k.default, {
            key: "poster-image",
            order: 1
          }), v.default.createElement(b.default, {
            key: "loading-spinner",
            order: 2
          }), v.default.createElement(C.default, {
            key: "bezel",
            order: 3
          }), v.default.createElement(g.default, {
            key: "big-play-button",
            order: 4
          }), v.default.createElement(P.default, {
            key: "control-bar",
            order: 5
          }), v.default.createElement(S.default, {
            key: "shortcut",
            order: 99
          })
        ]
      }
    }, {
      key: "getChildren",
      value: function (e) {
        e.className
        var /* [auto-meaningful-name] */e$children = e.children
        var n = (0, l.default)(e, ["className", "children"])
        var a = v.default.Children.toArray(this.props.children).filter(function (e) {
          return !(0, M.isVideoChild)(e)
        })
        var r = this.getDefaultChildren(e$children)
        return (0, M.mergeAndSortChildren)(r, a, n)
      }
    }, {
      key: "setWidthOrHeight",
      value: function (e, t, n) {
        var a
        if ("string" === typeof n) {
          if ("auto" === n) {
            a = "auto"
          } else {
            if (n.match(/\d+%/)) {
              a = n
            }
          }
        } else {
          if ("number" === typeof n) {
            a = "".concat(n, "px")
          }
        }
        Object.assign(e, (0, i.default)({}, t, a))
      }
    }, {
      key: "getStyle",
      value: function () {
        var e
        var t
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$fluid = this$props.fluid
        var /* [auto-meaningful-name] */this$props$aspectRatio = this$props.aspectRatio
        var /* [auto-meaningful-name] */this$props$height = this$props.height
        var /* [auto-meaningful-name] */this$props$width = this$props.width
        var /* [auto-meaningful-name] */this$manager$getState$player = this.manager.getState().player
        var u = {}
        var s = (undefined !== this$props$aspectRatio && "auto" !== this$props$aspectRatio ? this$props$aspectRatio : this$manager$getState$player.videoWidth ? "".concat(this$manager$getState$player.videoWidth, ":").concat(this$manager$getState$player.videoHeight) : "16:9").split(":")
        var d = s[1] / s[0]
        e = undefined !== this$props$width ? this$props$width : undefined !== this$props$height ? this$props$height / d : this$manager$getState$player.videoWidth || 400
        t = undefined !== this$props$height ? this$props$height : e * d
        if (this$props$fluid) {
          u.paddingTop = "".concat(100 * d, "%")
        } else {
          this.setWidthOrHeight(u, "width", e)
          this.setWidthOrHeight(u, "height", t)
        }
        return u
      }
    }, {
      key: "getState",
      value: function () {
        return this.manager.getState()
      }
    }, {
      key: "play",
      value: function () {
        this.video.play()
      }
    }, {
      key: "pause",
      value: function () {
        this.video.pause()
      }
    }, {
      key: "load",
      value: function () {
        this.video.load()
      }
    }, {
      key: "addTextTrack",
      value: function () {
        var /* [auto-meaningful-name] */this$video;
        (this$video = this.video).addTextTrack.apply(this$video, arguments)
      }
    }, {
      key: "canPlayType",
      value: function () {
        var /* [auto-meaningful-name] */this$video;
        (this$video = this.video).canPlayType.apply(this$video, arguments)
      }
    }, {
      key: "seek",
      value: function (e) {
        this.video.seek(e)
      }
    }, {
      key: "forward",
      value: function (e) {
        this.video.forward(e)
      }
    }, {
      key: "replay",
      value: function (e) {
        this.video.replay(e)
      }
    }, {
      key: "toggleFullscreen",
      value: function () {
        this.video.toggleFullscreen()
      }
    }, {
      key: "subscribeToStateChange",
      value: function (e) {
        return this.manager.subscribeToPlayerStateChange(e)
      }
    }, {
      key: "handleResize",
      value: function () {}
    }, {
      key: "handleFullScreenChange",
      value: function (e) {
        if (e.target === this.manager.rootElement) {
          this.actions.handleFullscreenChange(N.default.isFullscreen)
        }
      }
    }, {
      key: "handleMouseDown",
      value: function () {
        this.startControlsTimer()
      }
    }, {
      key: "handleMouseMove",
      value: function () {
        this.startControlsTimer()
      }
    }, {
      key: "handleKeyDown",
      value: function () {
        this.startControlsTimer()
      }
    }, {
      key: "startControlsTimer",
      value: function () {
        var e = this
        var t = 3e3
        v.default.Children.forEach(this.props.children, function (e) {
          if (v.default.isValidElement(e) && e.type === P.default) {
            var /* [auto-meaningful-name] */e$props$autoHideTime = e.props.autoHideTime
            if ("number" === typeof e$props$autoHideTime) {
              t = e$props$autoHideTime
            }
          }
        })
        this.actions.userActivate(true)
        clearTimeout(this.controlsHideTimer)
        this.controlsHideTimer = setTimeout(function () {
          e.actions.userActivate(false)
        }, t)
      }
    }, {
      key: "handleStateChange",
      value: function (e, t) {
        if (e.isFullscreen !== t.isFullscreen) {
          this.handleResize();
          (0, O.focusNode)(this.manager.rootElement)
        }
        this.forceUpdate()
      }
    }, {
      key: "handleFocus",
      value: function () {
        this.actions.activate(true)
      }
    }, {
      key: "handleBlur",
      value: function () {
        this.actions.activate(false)
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props$fluid = this.props.fluid
        var /* [auto-meaningful-name] */this$manager$getState$player = this.manager.getState().player
        var /* [auto-meaningful-name] */this$manager$getState$player$paused = this$manager$getState$player.paused
        var /* [auto-meaningful-name] */this$manager$getState$player$hasStarted = this$manager$getState$player.hasStarted
        var /* [auto-meaningful-name] */this$manager$getState$player$waiting = this$manager$getState$player.waiting
        var /* [auto-meaningful-name] */this$manager$getState$player$seeking = this$manager$getState$player.seeking
        var /* [auto-meaningful-name] */this$manager$getState$player$isFullscreen = this$manager$getState$player.isFullscreen
        var /* [auto-meaningful-name] */this$manager$getState$player$userActivity = this$manager$getState$player.userActivity
        var d = (0, o.default)({}, this.props, {
          player: this$manager$getState$player,
          actions: this.actions,
          manager: this.manager,
          store: this.manager.store,
          video: this.video ? this.video.video : null
        })
        var c = this.getChildren(d)
        return v.default.createElement("div", {
          className: (0, m.default)({
            "video-react-controls-enabled": true,
            "video-react-has-started": this$manager$getState$player$hasStarted,
            "video-react-paused": this$manager$getState$player$paused,
            "video-react-playing": !this$manager$getState$player$paused,
            "video-react-waiting": this$manager$getState$player$waiting,
            "video-react-seeking": this$manager$getState$player$seeking,
            "video-react-fluid": this$props$fluid,
            "video-react-fullscreen": this$manager$getState$player$isFullscreen,
            "video-react-user-inactive": !this$manager$getState$player$userActivity,
            "video-react-user-active": this$manager$getState$player$userActivity,
            "video-react-workinghover": !w.IS_IOS
          }, "video-react", this.props.className),
          style: this.getStyle(),
          ref: function (t) {
            e.manager.rootElement = t
          },
          role: "region",
          onTouchStart: this.handleMouseDown,
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onKeyDown: this.handleKeyDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          tabIndex: "-1"
        }, c)
      }
    }, {
      key: "playbackRate",
      get: function () {
        return this.video.playbackRate
      },
      set: function (e) {
        this.video.playbackRate = e
      }
    }, {
      key: "muted",
      get: function () {
        return this.video.muted
      },
      set: function (e) {
        this.video.muted = e
      }
    }, {
      key: "volume",
      get: function () {
        return this.video.volume
      },
      set: function (e) {
        this.video.volume = e
      }
    }, {
      key: "videoWidth",
      get: function () {
        return this.video.videoWidth
      }
    }, {
      key: "videoHeight",
      get: function () {
        return this.video.videoHeight
      }
    }
  ])
  return t
}(v.Component)
exports.default = T
T.contextTypes = {
  store: p.default.object
}
T.propTypes = D
T.defaultProps = {
  fluid: true,
  muted: false,
  playsInline: false,
  preload: "auto",
  aspectRatio: "auto"
}
T.displayName = "Player"
