/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2914
 */

"use strict"

var a = require(/* 1068 */"../../../13/780/1068")
var r = require(/* 571 */"../../../13/780/571")
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = undefined
var o = r(require(/* 2708 */"./3309/2708"))
var i = r(require(/* 1066 */"../../../13/780/1066"))
var l = r(require(/* 1067 */"../../../13/780/1067"))
var u = r(require(/* 1070 */"../../../13/780/1070/index"))
var s = r(require(/* 940 */"../../../13/780/940"))
var d = r(require(/* 1551 */"../../../13/780/1070/1551"))
var c = r(require(/* 1069 */"../../../13/780/1069/index"))
var f = r(require(/* 50 */"../../../50/index"))
var h = a(require(/* 0 */"react"))
var p = r(require(/* 8 */"classnames"))
var v = require(/* 2701 */"./2930/2701")
var m = {
  actions: f.default.object,
  player: f.default.object,
  children: f.default.any,
  startTime: f.default.number,
  loop: f.default.bool,
  muted: f.default.bool,
  autoPlay: f.default.bool,
  playsInline: f.default.bool,
  src: f.default.string,
  poster: f.default.string,
  className: f.default.string,
  preload: f.default.oneOf(["auto", "metadata", "none"]),
  crossOrigin: f.default.string,
  onLoadStart: f.default.func,
  onWaiting: f.default.func,
  onCanPlay: f.default.func,
  onCanPlayThrough: f.default.func,
  onPlaying: f.default.func,
  onEnded: f.default.func,
  onSeeking: f.default.func,
  onSeeked: f.default.func,
  onPlay: f.default.func,
  onPause: f.default.func,
  onProgress: f.default.func,
  onDurationChange: f.default.func,
  onError: f.default.func,
  onSuspend: f.default.func,
  onAbort: f.default.func,
  onEmptied: f.default.func,
  onStalled: f.default.func,
  onLoadedMetadata: f.default.func,
  onLoadedData: f.default.func,
  onTimeUpdate: f.default.func,
  onRateChange: f.default.func,
  onVolumeChange: f.default.func,
  onResize: f.default.func
}
var y = function (e) {
  function t(e) {
    var n;
    (0, i.default)(this, t);
    (n = (0, u.default)(this, (0, s.default)(t).call(this, e))).video = null
    n.play = n.play.bind((0, d.default)(n))
    n.pause = n.pause.bind((0, d.default)(n))
    n.seek = n.seek.bind((0, d.default)(n))
    n.forward = n.forward.bind((0, d.default)(n))
    n.replay = n.replay.bind((0, d.default)(n))
    n.toggleFullscreen = n.toggleFullscreen.bind((0, d.default)(n))
    n.getProperties = n.getProperties.bind((0, d.default)(n))
    n.renderChildren = n.renderChildren.bind((0, d.default)(n))
    n.handleLoadStart = n.handleLoadStart.bind((0, d.default)(n))
    n.handleCanPlay = n.handleCanPlay.bind((0, d.default)(n))
    n.handleCanPlayThrough = n.handleCanPlayThrough.bind((0, d.default)(n))
    n.handlePlay = n.handlePlay.bind((0, d.default)(n))
    n.handlePlaying = n.handlePlaying.bind((0, d.default)(n))
    n.handlePause = n.handlePause.bind((0, d.default)(n))
    n.handleEnded = n.handleEnded.bind((0, d.default)(n))
    n.handleWaiting = n.handleWaiting.bind((0, d.default)(n))
    n.handleSeeking = n.handleSeeking.bind((0, d.default)(n))
    n.handleSeeked = n.handleSeeked.bind((0, d.default)(n))
    n.handleFullscreenChange = n.handleFullscreenChange.bind((0, d.default)(n))
    n.handleError = n.handleError.bind((0, d.default)(n))
    n.handleSuspend = n.handleSuspend.bind((0, d.default)(n))
    n.handleAbort = n.handleAbort.bind((0, d.default)(n))
    n.handleEmptied = n.handleEmptied.bind((0, d.default)(n))
    n.handleStalled = n.handleStalled.bind((0, d.default)(n))
    n.handleLoadedMetaData = n.handleLoadedMetaData.bind((0, d.default)(n))
    n.handleLoadedData = n.handleLoadedData.bind((0, d.default)(n))
    n.handleTimeUpdate = n.handleTimeUpdate.bind((0, d.default)(n))
    n.handleRateChange = n.handleRateChange.bind((0, d.default)(n))
    n.handleVolumeChange = n.handleVolumeChange.bind((0, d.default)(n))
    n.handleDurationChange = n.handleDurationChange.bind((0, d.default)(n))
    n.handleProgress = (0, v.throttle)(n.handleProgress.bind((0, d.default)(n)), 250)
    n.handleKeypress = n.handleKeypress.bind((0, d.default)(n))
    return n
  }
  (0, c.default)(t, e);
  (0, l.default)(t, [
    {
      key: "componentDidMount",
      value: function () {
        this.forceUpdate()
      }
    }, {
      key: "getProperties",
      value: function () {
        var e = this
        return this.video ? v.mediaProperties.reduce(function (t, n) {
          t[n] = e.video[n]
          return t
        }, {}) : null
      }
    }, {
      key: "play",
      value: function () {
        var e = this.video.play()
        if (undefined !== e) {
          e.catch(function () {}).then(function () {})
        }
      }
    }, {
      key: "pause",
      value: function () {
        var e = this.video.pause()
        if (undefined !== e) {
          e.catch(function () {}).then(function () {})
        }
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
      key: "togglePlay",
      value: function () {
        if (this.video.paused) {
          this.play()
        } else {
          this.pause()
        }
      }
    }, {
      key: "seek",
      value: function (e) {
        try {
          this.video.currentTime = e
        } catch (t) {}
      }
    }, {
      key: "forward",
      value: function (e) {
        this.seek(this.video.currentTime + e)
      }
    }, {
      key: "replay",
      value: function (e) {
        this.forward(-e)
      }
    }, {
      key: "toggleFullscreen",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        this$props.actions.toggleFullscreen(this$props$player)
      }
    }, {
      key: "handleLoadStart",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onLoadStart = this$props.onLoadStart
        this$props$actions.handleLoadStart(this.getProperties())
        if (this$props$onLoadStart) {
          this$props$onLoadStart.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleCanPlay",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onCanPlay = this$props.onCanPlay
        this$props$actions.handleCanPlay(this.getProperties())
        if (this$props$onCanPlay) {
          this$props$onCanPlay.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleCanPlayThrough",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onCanPlayThrough = this$props.onCanPlayThrough
        this$props$actions.handleCanPlayThrough(this.getProperties())
        if (this$props$onCanPlayThrough) {
          this$props$onCanPlayThrough.apply(undefined, arguments)
        }
      }
    }, {
      key: "handlePlaying",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onPlaying = this$props.onPlaying
        this$props$actions.handlePlaying(this.getProperties())
        if (this$props$onPlaying) {
          this$props$onPlaying.apply(undefined, arguments)
        }
      }
    }, {
      key: "handlePlay",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onPlay = this$props.onPlay
        this$props$actions.handlePlay(this.getProperties())
        if (this$props$onPlay) {
          this$props$onPlay.apply(undefined, arguments)
        }
      }
    }, {
      key: "handlePause",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onPause = this$props.onPause
        this$props$actions.handlePause(this.getProperties())
        if (this$props$onPause) {
          this$props$onPause.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleDurationChange",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onDurationChange = this$props.onDurationChange
        this$props$actions.handleDurationChange(this.getProperties())
        if (this$props$onDurationChange) {
          this$props$onDurationChange.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleProgress",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onProgress = this$props.onProgress
        if (this.video) {
          this$props$actions.handleProgressChange(this.getProperties())
        }
        if (this$props$onProgress) {
          this$props$onProgress.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleEnded",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$loop = this$props.loop
        var /* [auto-meaningful-name] */this$props$player = this$props.player
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onEnded = this$props.onEnded
        if (this$props$loop) {
          this.seek(0)
          this.play()
        } else {
          if (!this$props$player.paused) {
            this.pause()
          }
        }
        this$props$actions.handleEnd(this.getProperties())
        if (this$props$onEnded) {
          this$props$onEnded.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleWaiting",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onWaiting = this$props.onWaiting
        this$props$actions.handleWaiting(this.getProperties())
        if (this$props$onWaiting) {
          this$props$onWaiting.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleSeeking",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onSeeking = this$props.onSeeking
        this$props$actions.handleSeeking(this.getProperties())
        if (this$props$onSeeking) {
          this$props$onSeeking.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleSeeked",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onSeeked = this$props.onSeeked
        this$props$actions.handleSeeked(this.getProperties())
        if (this$props$onSeeked) {
          this$props$onSeeked.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleFullscreenChange",
      value: function () {}
    }, {
      key: "handleSuspend",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onSuspend = this$props.onSuspend
        this$props$actions.handleSuspend(this.getProperties())
        if (this$props$onSuspend) {
          this$props$onSuspend.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleAbort",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onAbort = this$props.onAbort
        this$props$actions.handleAbort(this.getProperties())
        if (this$props$onAbort) {
          this$props$onAbort.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleEmptied",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onEmptied = this$props.onEmptied
        this$props$actions.handleEmptied(this.getProperties())
        if (this$props$onEmptied) {
          this$props$onEmptied.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleStalled",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onStalled = this$props.onStalled
        this$props$actions.handleStalled(this.getProperties())
        if (this$props$onStalled) {
          this$props$onStalled.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleLoadedMetaData",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onLoadedMetadata = this$props.onLoadedMetadata
        var /* [auto-meaningful-name] */this$props$startTime = this$props.startTime
        if (this$props$startTime && this$props$startTime > 0) {
          this.video.currentTime = this$props$startTime
        }
        this$props$actions.handleLoadedMetaData(this.getProperties())
        if (this$props$onLoadedMetadata) {
          this$props$onLoadedMetadata.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleLoadedData",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onLoadedData = this$props.onLoadedData
        this$props$actions.handleLoadedData(this.getProperties())
        if (this$props$onLoadedData) {
          this$props$onLoadedData.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleTimeUpdate",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onTimeUpdate = this$props.onTimeUpdate
        this$props$actions.handleTimeUpdate(this.getProperties())
        if (this$props$onTimeUpdate) {
          this$props$onTimeUpdate.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleRateChange",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onRateChange = this$props.onRateChange
        this$props$actions.handleRateChange(this.getProperties())
        if (this$props$onRateChange) {
          this$props$onRateChange.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleVolumeChange",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onVolumeChange = this$props.onVolumeChange
        this$props$actions.handleVolumeChange(this.getProperties())
        if (this$props$onVolumeChange) {
          this$props$onVolumeChange.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleError",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onError = this$props.onError
        this$props$actions.handleError(this.getProperties())
        if (this$props$onError) {
          this$props$onError.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleResize",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$actions = this$props.actions
        var /* [auto-meaningful-name] */this$props$onResize = this$props.onResize
        this$props$actions.handleResize(this.getProperties())
        if (this$props$onResize) {
          this$props$onResize.apply(undefined, arguments)
        }
      }
    }, {
      key: "handleKeypress",
      value: function () {}
    }, {
      key: "renderChildren",
      value: function () {
        var e = this
        var t = (0, o.default)({}, this.props, {
          video: this.video
        })
        return this.video ? h.default.Children.toArray(this.props.children).filter(v.isVideoChild).map(function (n) {
          var a
          if ("string" === typeof n.type) {
            if ("source" === n.type) {
              var /* [auto-meaningful-name] */A0O$defaultN$props$onError = (a = (0, o.default)({}, n.props)).onError
              a.onError = function () {
                if (A0O$defaultN$props$onError) {
                  A0O$defaultN$props$onError.apply(undefined, arguments)
                }
                e.handleError.apply(e, arguments)
              }
            }
          } else {
            a = t
          }
          return h.default.cloneElement(n, a)
        }) : null
      }
    }, {
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$loop = this$props.loop
        var /* [auto-meaningful-name] */this$props$poster = this$props.poster
        var /* [auto-meaningful-name] */this$props$preload = this$props.preload
        var /* [auto-meaningful-name] */this$props$src = this$props.src
        var /* [auto-meaningful-name] */this$props$autoPlay = this$props.autoPlay
        var /* [auto-meaningful-name] */this$props$playsInline = this$props.playsInline
        var /* [auto-meaningful-name] */this$props$muted = this$props.muted
        var /* [auto-meaningful-name] */this$props$crossOrigin = this$props.crossOrigin
        var /* [auto-meaningful-name] */this$props$videoId = this$props.videoId
        return h.default.createElement("video", {
          className: (0, p.default)("video-react-video", this.props.className),
          id: this$props$videoId,
          crossOrigin: this$props$crossOrigin,
          ref: function (t) {
            e.video = t
          },
          muted: this$props$muted,
          preload: this$props$preload,
          loop: this$props$loop,
          playsInline: this$props$playsInline,
          autoPlay: this$props$autoPlay,
          poster: this$props$poster,
          src: this$props$src,
          onLoadStart: this.handleLoadStart,
          onWaiting: this.handleWaiting,
          onCanPlay: this.handleCanPlay,
          onCanPlayThrough: this.handleCanPlayThrough,
          onPlaying: this.handlePlaying,
          onEnded: this.handleEnded,
          onSeeking: this.handleSeeking,
          onSeeked: this.handleSeeked,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onProgress: this.handleProgress,
          onDurationChange: this.handleDurationChange,
          onError: this.handleError,
          onSuspend: this.handleSuspend,
          onAbort: this.handleAbort,
          onEmptied: this.handleEmptied,
          onStalled: this.handleStalled,
          onLoadedMetadata: this.handleLoadedMetaData,
          onLoadedData: this.handleLoadedData,
          onTimeUpdate: this.handleTimeUpdate,
          onRateChange: this.handleRateChange,
          onVolumeChange: this.handleVolumeChange,
          tabIndex: "-1"
        }, this.renderChildren())
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
        if (e > 1) {
          e = 1
        }
        if (e < 0) {
          e = 0
        }
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
}(h.Component)
exports.default = y
y.propTypes = m
y.displayName = "Video"
