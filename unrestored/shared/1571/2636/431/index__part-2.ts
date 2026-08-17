/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：431__part-2
 */

"use strict"

import { o } from "./index__part-0"
import { u, f, h, _, A, g } from "./index__part-1"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_1503 from /* 1503 */"./1503"
function m() {
  var /* [auto-meaningful-name] */u$data$config$record_sample_rate
  var /* [auto-meaningful-name] */u$data$config$target_sample_rate
  var /* [auto-meaningful-name] */u$data$config$num_channels
  var r = 0
  var i = []
  var o = this
  function a() {
    for (var e = 0; e < u$data$config$num_channels; e++) {
      i[e] = []
    }
  }
  function s(e, t) {
    for (var n = new Float32Array(t), r = 0, i = 0; i < e.length; i++) {
      n.set(e[i], r)
      r += e[i].length
    }
    return n
  }
  function c(e, t, n) {
    for (var r = 0; r < n.length; r++) {
      e.setUint8(t + r, n.charCodeAt(r))
    }
  }
  o.onmessage = function (u) {
    switch (u.data.command) {
      case "init":
        u$data$config = u.data.config
        if (__DEV__) {
          console.log("WAV Encoding worker init:", u$data$config)
        }
        u$data$config$record_sample_rate = u$data$config.record_sample_rate
        u$data$config$num_channels = u$data$config.num_channels
        u$data$config$target_sample_rate = u$data$config.target_sample_rate
        a()
        break
      case "record":
        !function (e) {
          for (var t = 0; t < u$data$config$num_channels; t++) {
            i[t].push(e[t])
          }
          r += e[0].length
        }(u.data.buffer)
        break
      case "exportWAV":
        !function (a) {
          for (var u, l = [], f = 0; f < u$data$config$num_channels; f++) {
            l.push(s(i[f], r))
          }
          u = 2 === u$data$config$num_channels ? function (e, t) {
            var n = e.length + t.length
            var r = new Float32Array(n)
            var i = 0
            var o = 0
            for (; i < n;) {
              r[i++] = e[o]
              r[i++] = t[o]
              o++
            }
            return r
          }(l[0], l[1]) : l[0]
          var d = function (e) {
            var r = new ArrayBuffer(44 + 2 * e.length)
            var i = new DataView(r)
            c(i, 0, "RIFF")
            i.setUint32(4, 36 + 2 * e.length, true)
            c(i, 8, "WAVE")
            c(i, 12, "fmt ")
            i.setUint32(16, 16, true)
            i.setUint16(20, 1, true)
            i.setUint16(22, u$data$config$num_channels, true)
            i.setUint32(24, u$data$config$target_sample_rate, true)
            i.setUint32(28, 4 * u$data$config$target_sample_rate, true)
            i.setUint16(32, 2 * u$data$config$num_channels, true)
            i.setUint16(34, 16, true)
            c(i, 36, "data")
            i.setUint32(40, 2 * e.length, true);
            (function (e, t, n) {
              for (var r = 0; r < n.length; r++, t += 2) {
                var i = Math.max(-1, Math.min(1, n[r]))
                e.setInt16(t, i < 0 ? 32768 * i : 32767 * i, true)
              }
            })(i, 44, e)
            return i
          }(function (n) {
            if (u$data$config$target_sample_rate == u$data$config$record_sample_rate) {
              return n
            }
            if (u$data$config$target_sample_rate > u$data$config$record_sample_rate) {
              throw new Error("downsampling rate show be smaller than original sample rate")
            }
            var r = u$data$config$record_sample_rate / u$data$config$target_sample_rate
            var i = Math.round(n.length / r)
            var o = new Float32Array(i)
            var a = 0
            var s = 0
            for (; a < o.length;) {
              for (var c = Math.round((a + 1) * r), u = 0, l = 0, f = s; f < c && f < n.length; f++) {
                u += n[f]
                l++
              }
              o[a] = u / l
              a++
              s = c
            }
            return o
          }(u))
          var h = new Blob([d], {
            type: a
          })
          o.postMessage({
            command: "exportWAV",
            data: h
          })
        }(u.data.mime_type)
        break
      case "getBuffer":
        !function () {
          for (var e = [], t = 0; t < u$data$config$num_channels; t++) {
            e.push(s(i[t], r))
          }
          o.postMessage({
            command: "getBuffer",
            data: e
          })
        }()
        break
      case "clear":
        r = 0
        i = []
        a()
    }
    var /* [auto-meaningful-name] */u$data$config
  }
}
var y
var b
var w
var E
var x
var C = function () {
  function e(e, t) {
    var n = this
    this.config = {
      buffer_len: 4096,
      num_channels: 2,
      sample_rate: 44100,
      mime_type: "audio/wav"
    }
    this._state = "inactive"
    this.callbacks = {
      getBuffer: [],
      exportWAV: []
    }
    Lodash.assign(this.config, t)
    this.context = e.context
    this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, this.config.buffer_len, this.config.num_channels, this.config.num_channels)
    this.node.onaudioprocess = function (e) {
      if ("recording" === n._state) {
        for (var t = [], r = 0; r < n.config.num_channels; r++) {
          t.push(e.inputBuffer.getChannelData(r))
        }
        n.worker.postMessage({
          command: "record",
          buffer: t
        })
      }
    }
    e.connect(this.node)
    this.node.connect(this.context.destination)
    this.worker = new Module_1503(m, {})
    this.worker.postMessage({
      command: "init",
      config: {
        record_sample_rate: this.context.sampleRate,
        num_channels: this.config.num_channels,
        target_sample_rate: this.config.sample_rate
      }
    })
    this.worker.onmessage = function (e) {
      if (__DEV__) {
        console.log("WAV Recorder onmessage:", e.data)
      }
      var t = n.callbacks[e.data.command].pop()
      if ("function" == typeof t) {
        t(e.data.data)
      }
    }
  }
  Object.defineProperty(e.prototype, "state", {
    get: function () {
      return this._state
    },
    enumerable: true,
    configurable: true
  })
  e.prototype.start = function () {
    this.clear()
    this._state = "recording"
    this.record()
  }
  e.prototype.record = function () {
    this._state = "recording"
  }
  e.prototype.stop = function (e) {
    this._state = "inactive"
    this.export_wav(e)
  }
  e.prototype.clear = function () {
    this.worker.postMessage({
      command: "clear"
    })
  }
  e.prototype.getBuffer = function (e) {
    if (!(e = e || this.config.callback)) {
      throw new Error("Callback not set")
    }
    this.callbacks.getBuffer.push(e)
    this.worker.postMessage({
      command: "getBuffer"
    })
  }
  e.prototype.export_wav = function (e, t) {
    t = t || this.config.mime_type
    if (!(e = e || this.config.callback)) {
      throw new Error("Callback not set")
    }
    this.callbacks.exportWAV.push(e)
    this.worker.postMessage({
      command: "exportWAV",
      mime_type: t
    })
  }
  return e
}()
var O = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e))
      } catch (t) {
        o(t)
      }
    }
    function s(e) {
      try {
        c(r.throw(e))
      } catch (t) {
        o(t)
      }
    }
    function c(e) {
      if (e.done) {
        i(e.value)
      } else {
        new n(function (t) {
          t(e.value)
        }).then(a, s)
      }
    }
    c((r = r.apply(e, t || [])).next())
  })
}
var k = function (e, t) {
  var n
  var r
  var i
  var o
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1]
      }
      return i[1]
    },
    trys: [],
    ops: []
  }
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this
    }
  }
  return o
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.")
        }
        for (; a;) {
          try {
            n = 1
            if (r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o
                break
              case 4:
                a.label++
                return {
                  value: o[1],
                  done: false
                }
              case 5:
                a.label++
                r = o[1]
                o = [0]
                continue
              case 7:
                o = a.ops.pop()
                a.trys.pop()
                continue
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0
                  continue
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1]
                  break
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1]
                  i = o
                  break
                }
                if (i && a.label < i[2]) {
                  a.label = i[2]
                  a.ops.push(o)
                  break
                }
                if (i[2]) {
                  a.ops.pop()
                }
                a.trys.pop()
                continue
            }
            o = t.call(e, a)
          } catch (s) {
            o = [6, s]
            r = 0
          } finally {
            n = i = 0
          }
        }
        if (5 & o[0]) {
          throw o[1]
        }
        return {
          value: o[0] ? o[1] : undefined,
          done: true
        }
      }([o, s])
    }
  }
};
(function () {
  function e(e) {
    this.stream = undefined
    this.audio_context = undefined
    this.on_stop = undefined
    this.sample_rate = 0
    this.num_channels = 0
    this.blob_chunks = []
    if (__DEV__) {
      console.log("Recorder Init:", e)
    }
    Lodash.assign(this, e)
    if (__DEV__) {
      console.log("Recorder Init with SampleRate:", this.sample_rate)
    }
  }
  e.prototype.init = function (e) {
    return O(this, undefined, undefined, function () {
      var t
      var n
      var r
      var i
      var o = this
      return k(this, function (a) {
        switch (a.label) {
          case 0:
            if (t = h(), n = {
              audio: e || true
            }, !t.audio_recording) {
              if (_()) {
                this.recorder_noticer("record_error/pc_browser_not_support")
              } else {
                if (g()) {
                  this.recorder_noticer("record_error/android_permission_error")
                } else {
                  if (A()) {
                    this.recorder_noticer("record_error/ios_permission_error")
                  }
                }
              }
              throw new ReferenceError("Browser not supported.")
            }
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
              return [3, 5]
            }
            a.label = 1
          case 1:
            a.trys.push([1, 3,, 4])
            return [4, navigator.mediaDevices.getUserMedia(n)]
          case 2:
            r = a.sent()
            return [2, this.create_recorder(r)]
          case 3:
            i = a.sent()
            this.check_failed(i)
            throw i
          case 4:
            return [3, 6]
          case 5:
            return [
              2, new Promise(function (e, t) {
                navigator.getUserMedia(n, function (t) {
                  e(o.create_recorder(t))
                }, function (e) {
                  o.check_failed(e)
                  t(e)
                })
              })
            ]
          case 6:
            return [2]
        }
      })
    })
  }
  e.prototype.create_recorder = function (e, t) {
    var /* [auto-meaningful-name] */Audio_webm
    var r = this
    this.stream = e
    if ("undefined" === typeof MediaRecorder || this.sample_rate || this.num_channels) {
      if (__DEV__) {
        console.log("Use fallback recorder.")
      }
      return this.create_fallback_recorder(e)
    }
    if (MediaRecorder.isTypeSupported("audio/webm")) {
      Audio_webm = "audio/webm"
    }
    var i = new MediaRecorder(e, {
      mimeType: Audio_webm
    })
    this.media_stream_recorder = i
    this.media_stream_recorder.ondataavailable = function (e) {
      r.blob_chunks.push(e.data)
    }
    this.media_stream_recorder.onstop = function () {
      if (!r.media_stream_recorder) {
        throw new Error("Recorder not found!")
      }
      if (r.media_stream_recorder instanceof MediaRecorder) {
        if (r.on_stop) {
          var e = new Blob(r.blob_chunks, {
            type: r.media_stream_recorder.mimeType
          })
          r.on_stop(e)
          r.blob_chunks.length = 0
        }
        delete r.media_stream_recorder
        r.dispose().then(function () {
          if (__DEV__) {
            console.log("Stop Recording: Disposed")
          }
        }).catch(function (e) {
          throw e
        })
      }
    }
    return this.media_stream_recorder
  }
  e.prototype.create_fallback_recorder = function (e) {
    var t = this
    this.audio_context = new AudioContext()
    var n = this.audio_context.createMediaStreamSource(e)
    var r = {
      num_channels: this.num_channels,
      sample_rate: this.sample_rate,
      callback: function (e) {
        if (t.on_stop) {
          t.on_stop(e)
          if (t.media_stream_recorder instanceof C) {
            if (t.media_stream_recorder.worker) {
              t.media_stream_recorder.worker.terminate()
            }
            if (t.stream) {
              t.stream.getTracks()[0].stop()
            }
          }
        }
        t.remove_recorder()
      }
    }
    this.media_stream_recorder = new C(n, r)
    return this.media_stream_recorder
  }
  e.prototype.start_recording = function () {
    return O(this, undefined, undefined, function () {
      return k(this, function (e) {
        switch (e.label) {
          case 0:
            return this.media_stream_recorder ? [3, 2] : [4, this.init()]
          case 1:
            e.sent()
            e.label = 2
          case 2:
            return this.media_stream_recorder ? (this.media_stream_recorder.start(), [2]) : (console.warn("Recorder not prepared."), [2])
        }
      })
    })
  }
  e.prototype.stop_recording = function () {
    if (this.media_stream_recorder) {
      this.media_stream_recorder.stop()
    } else {
      console.warn("You are not recording.")
    }
  }
  e.prototype.check_failed = function (e) {
    switch (__DEV__ && console.warn(e.name), e.name) {
      case "DevicesNotFoundError":
      case "NotFoundError":
        this.recorder_noticer("record_error/device_error")
        break
      case "PermissionDeniedError":
      case "PermissionDismissedError":
      case "NotAllowedError":
        if (_()) {
          this.recorder_noticer("record_error/pc_permission_error")
        } else {
          if (g()) {
            this.recorder_noticer("record_error/android_permission_error")
          } else {
            if (A()) {
              this.recorder_noticer("record_error/ios_permission_error")
            }
          }
        }
        break
      default:
        if (_()) {
          this.recorder_noticer("record_error/pc_other_case")
        } else {
          if (g()) {
            this.recorder_noticer("record_error/android_other_case")
          } else {
            if (A()) {
              this.recorder_noticer("record_error/ios_other_case")
            }
          }
        }
    }
  }
  e.prototype.recorder_noticer = function (e) {
    u(o(e), "error")
  }
  e.prototype.if_recorder_work = function () {
    return !!this.media_stream_recorder
  }
  e.prototype.is_recording = function () {
    if (this.media_stream_recorder) {
      return "recording" === this.media_stream_recorder.state
    }
  }
  e.prototype.dispose = function () {
    return O(this, undefined, undefined, function () {
      return k(this, function (e) {
        switch (e.label) {
          case 0:
            return this.audio_context ? [4, this.audio_context.close()] : [3, 2]
          case 1:
            e.sent()
            delete this.audio_context
            e.label = 2
          case 2:
            if (this.stream) {
              this.stream.getTracks()[0].stop()
              delete this.stream
            }
            return [2]
        }
      })
    })
  }
  e.prototype.remove_recorder = function () {
    delete this.media_stream_recorder
    this.dispose().then(function () {
      if (__DEV__) {
        console.log("Stop Recording: Disposed")
      }
    }).catch(function (e) {
      throw e
    })
  }
})()
var S = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e))
      } catch (t) {
        o(t)
      }
    }
    function s(e) {
      try {
        c(r.throw(e))
      } catch (t) {
        o(t)
      }
    }
    function c(e) {
      if (e.done) {
        i(e.value)
      } else {
        new n(function (t) {
          t(e.value)
        }).then(a, s)
      }
    }
    c((r = r.apply(e, t || [])).next())
  })
}
var T = function (e, t) {
  var n
  var r
  var i
  var o
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1]
      }
      return i[1]
    },
    trys: [],
    ops: []
  }
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this
    }
  }
  return o
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.")
        }
        for (; a;) {
          try {
            n = 1
            if (r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o
                break
              case 4:
                a.label++
                return {
                  value: o[1],
                  done: false
                }
              case 5:
                a.label++
                r = o[1]
                o = [0]
                continue
              case 7:
                o = a.ops.pop()
                a.trys.pop()
                continue
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0
                  continue
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1]
                  break
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1]
                  i = o
                  break
                }
                if (i && a.label < i[2]) {
                  a.label = i[2]
                  a.ops.push(o)
                  break
                }
                if (i[2]) {
                  a.ops.pop()
                }
                a.trys.pop()
                continue
            }
            o = t.call(e, a)
          } catch (s) {
            o = [6, s]
            r = 0
          } finally {
            n = i = 0
          }
        }
        if (5 & o[0]) {
          throw o[1]
        }
        return {
          value: o[0] ? o[1] : undefined,
          done: true
        }
      }([o, s])
    }
  }
}
var B = false
var D = false
var I = undefined
function R(e) {
  return S(this, undefined, undefined, function () {
    var t
    return T(this, function (n) {
      if (!y) {
        y = new AudioContext()
      }
      return e ? D ? (__DEV__ && console.warn("Volume measurement is already running."), [2]) : (D = true, E ? (E(e), [2]) : B ? (__DEV__ && console.warn("Volume measurement is already initialized."), [2, y.resume()]) : (t = {
        video: false,
        audio: true
      }, h().audio_recording ? (y && (w = (y.createScriptProcessor || y.createJavaScriptNode).call(y, 1024, 1, 1)).connect(y.destination), navigator.mediaDevices.getUserMedia(t).then(function (t) {
        if (y) {
          b = y.createMediaStreamSource(t)
          I = t
          var n = y.createAnalyser()
          n.fftSize = 1024
          n.smoothingTimeConstant = .5
          w.onaudioprocess = function () {
            var t = new Uint8Array(n.frequencyBinCount)
            n.getByteFrequencyData(t)
            if (e) {
              e(Lodash.round(Lodash.mean(t)))
            }
          }
          b.connect(w)
          b.connect(n)
          B = true
        }
      }).catch(function (e) {
        switch (e.name) {
          case "PermissionDeniedError":
          case "NotAllowedError":
            if (_()) {
              u(o("voice_detection/pc_permission_error"), "notice")
            } else {
              if (g()) {
                u(o("voice_detection/android_permission_error"), "notice")
              } else {
                if (A()) {
                  u(o("voice_detection/ios_permission_error"), "notice")
                }
              }
            }
            break
          case "DevicesNotFoundError":
          case "NotFoundError":
            u(o("voice_detection/not_found_error"), "notice")
            break
          default:
            u(e.name, "notice")
        }
        if (__DEV__) {
          console.log(e.name)
        }
      }), [2]) : (navigator.userAgent.indexOf("MicroMessenger") >= 0 ? u(o("voice_detection/ios_wechat_error"), "notice") : (f() || !f() && navigator.userAgent.indexOf("iPad") >= 0) && Number(function () {
        var e = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/)
        return e ? e[1].split("_")[0] : 0
      }()) < 11 ? u(o("voice_detection/ios_version_error"), "notice") : u(o("voice_detection/no_supported_error"), "notice"), __DEV__ && console.log("Browser not support getUserMedia."), [2]))) : [2]
    })
  })
}
function F() {
  return S(this, undefined, undefined, function () {
    return T(this, function (e) {
      switch (e.label) {
        case 0:
          D = false
          B = false
          return x ? (x(), [2]) : (I && I.getTracks()[0].stop(), b && (w && y && w.disconnect(y.destination), b.disconnect(), b = undefined), y ? [4, y.close()] : [3, 2])
        case 1:
          e.sent()
          e.label = 2
        case 2:
          y = undefined
          return [2]
      }
    })
  })
}
export { R }
export { F }
