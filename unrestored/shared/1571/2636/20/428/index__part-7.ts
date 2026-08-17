/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-7
 */

"use strict"

import { r, o } from "./index__part-0"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../68"
import * as /* [auto-meaningful-name] */Module_91 from /* 91 */"../../91"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../47"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../10/index"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../25/index"
var _n = ["number", "string", "boolean", "undefined", "object"]
function vn(e) {
  return Module_48.a().getState().variableMap.get(e)
}
function bn(e, t) {
  Module_48.a().getState().variableMap.set(e, t)
  if ("object" === typeof t) {
    Module_91.b(Module_48.a().getState().currentScreenId, "list", e, t)
  } else {
    Module_91.b(Module_48.a().getState().currentScreenId, "variable", e, t)
  }
}
function yn(e, t) {
  var n = vn(e)
  var r = n
  if ("number" === typeof n && "number" === typeof t) {
    r = n + t
  } else {
    if ("string" === typeof n) {
      r = "".concat(n).concat(t)
    }
  }
  bn(e, r)
}
function En(e, t) {
  var n = vn(e)
  var r = n
  if ("number" === typeof n && "number" === typeof t) {
    r = n - t
  }
  bn(e, r)
}
function On(e, t, n) {
  if (Array.isArray(e)) {
    if (_n.includes(typeof t)) {
      e.push(t)
    }
    Module_91.b(Module_48.a().getState().currentScreenId, "list", n, e)
  } else {
    if (!Array.isArray(e) && e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function wn(e, t, n, r) {
  if (!isNaN(n) && Array.isArray(e)) {
    Module_14.a.range(n, {
      min: -1
    }, {
      type: "warning",
      messageId: "variableOutRange",
      values: {
        index: n + 1
      }
    })
    if (n > -1) {
      if (Mn(t)) {
        e.splice(n, 0, t)
      }
      Module_91.b(Module_48.a().getState().currentScreenId, "list", r, e)
    }
  } else {
    if (isNaN(n)) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "项数"
        }
      })
    }
    if (!Array.isArray(e) && e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function Cn(e, t, n) {
  if (!isNaN(t) && Array.isArray(e)) {
    Module_14.a.range(t, {
      min: -1,
      max: e.length
    }, {
      type: "warning",
      messageId: "variableOutRange",
      values: {
        index: t + 1
      }
    })
    if (!Ln(e, t)) {
      e.splice(t, 1)
    }
    Module_91.b(Module_48.a().getState().currentScreenId, "list", n, e)
  } else {
    if (isNaN(t)) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "项数"
        }
      })
    }
    if (!Array.isArray(e) && e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function Tn(e, t) {
  if (Array.isArray(e)) {
    e.pop()
    Module_91.b(Module_48.a().getState().currentScreenId, "list", t, e)
  } else {
    if (!Array.isArray(e) && e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function Sn(e, t) {
  if (Array.isArray(e)) {
    e.splice(0, e.length)
    Module_91.b(Module_48.a().getState().currentScreenId, "list", t, e)
  } else {
    if (!Array.isArray(e) && e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function An(e, t, n, r) {
  if (!isNaN(n) && Array.isArray(e)) {
    if (!Module_14.a.range(n, {
      min: -1,
      max: e.length
    }, {
      type: "error",
      messageId: "variableOutRange",
      values: {
        index: n + 1
      }
    })) {
      return
    }
    if (Mn(t)) {
      e[n] = t
    }
    Module_91.b(Module_48.a().getState().currentScreenId, "list", r, e)
  } else {
    if (isNaN(n)) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "项数"
        }
      })
    }
    if (!Array.isArray(e) && e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function In(e, t, n) {
  if (Array.isArray(e)) {
    if (Mn(t)) {
      e[e.length - 1] = t
    }
    Module_91.b(Module_48.a().getState().currentScreenId, "list", n, e)
  } else {
    if (!Array.isArray(e) && e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function jn(e, t, n) {
  if (Array.isArray(e) && Array.isArray(t)) {
    t.splice.apply(t, [0, t.length].concat(Module_25.a(e)))
    Module_91.b(Module_48.a().getState().currentScreenId, "list", n, t)
  } else {
    if (!Array.isArray(e) && e || !Array.isArray(t) && t) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!(e && t)) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function Nn(e, t) {
  if (!isNaN(t) && Array.isArray(e)) {
    if (!Ln(e, t)) {
      return e[t]
    }
  } else {
    if (isNaN(t)) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "项数"
        }
      })
    }
    if (!Array.isArray(e) && e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "errorArrayType"
      })
    }
    if (!e) {
      Module_14.a.condition(false, {
        type: "error",
        messageId: "notArray"
      })
    }
  }
}
function Rn(e) {
  if (Array.isArray(e)) {
    return e[e.length - 1]
  }
  if (!Array.isArray(e) && e) {
    Module_14.a.condition(false, {
      type: "error",
      messageId: "errorArrayType"
    })
  }
  if (!e) {
    Module_14.a.condition(false, {
      type: "error",
      messageId: "notArray"
    })
  }
}
function kn(e) {
  if (Array.isArray(e)) {
    return e.length
  }
  if (!Array.isArray(e) && e) {
    Module_14.a.condition(false, {
      type: "error",
      messageId: "errorArrayType"
    })
  }
  if (!e) {
    Module_14.a.condition(false, {
      type: "error",
      messageId: "notArray"
    })
  }
}
function xn(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 0
  if (Array.isArray(e)) {
    var r = e.indexOf(t)
    return r + n
  }
  if (!Array.isArray(e) && e) {
    Module_14.a.condition(false, {
      type: "error",
      messageId: "errorArrayType"
    })
  }
  if (!e) {
    Module_14.a.condition(false, {
      type: "error",
      messageId: "notArray"
    })
  }
}
function Dn(e, t) {
  if (Array.isArray(e)) {
    return e.some(function (e) {
      return e === t
    })
  }
  if (!Array.isArray(e) && e) {
    Module_14.a.condition(false, {
      type: "error",
      messageId: "errorArrayType"
    })
  }
  if (!e) {
    Module_14.a.condition(false, {
      type: "error",
      messageId: "notArray"
    })
  }
}
function Mn(e) {
  return _n.includes(typeof e)
}
function Ln(e, t) {
  return t < 0 || t >= e.length
}
function Pn(e, t) {
  return Bn.apply(this, arguments)
}
function Bn() {
  return (Bn = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    var /* [auto-meaningful-name] */o$value
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = Module_47.a(t)
            e.prev = 1
            r.s()
          case 3:
            if ((o = r.n()).done) {
              e.next = 9
              break
            }
            o$value = o.value
            e.next = 7
            return n(o$value)
          case 7:
            e.next = 3
            break
          case 9:
            e.next = 14
            break
          case 11:
            e.prev = 11
            e.t0 = e.catch(1)
            r.e(e.t0)
          case 14:
            e.prev = 14
            r.f()
            return e.finish(14)
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[1, 11, 14, 17]])
  }))).apply(this, arguments)
}
function Fn(e, t, n, r) {
  if (undefined !== t) {
    if (Lodash.isPlainObject(t)) {
      if ("string" === typeof n || "number" === typeof n) {
        t[n] = r
        Module_91.b(Module_48.a().getState().currentScreenId, "object", e, t)
      } else {
        Module_14.a.log({
          type: "error",
          messageId: "objectKeyTypeError"
        })
      }
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "objectTypeError"
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "objectNotExist"
    })
  }
}
function Gn(e, t) {
  if (Lodash.isPlainObject(e)) {
    if ("string" === typeof t || "number" === typeof t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) {
        Module_14.a.log({
          type: "error",
          messageId: "objectKeyNotExist"
        })
      }
      return e[t]
    }
    Module_14.a.log({
      type: "error",
      messageId: "objectKeyTypeError"
    })
  }
}
function Wn(e, t, n) {
  if (undefined !== t) {
    if (Lodash.isPlainObject(t)) {
      if ("string" === typeof n || "number" === typeof n) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          delete t[n]
          Module_91.b(Module_48.a().getState().currentScreenId, "object", e, t)
        } else {
          Module_14.a.log({
            type: "error",
            messageId: "objectKeyNotExist"
          })
        }
      } else {
        Module_14.a.log({
          type: "error",
          messageId: "objectKeyTypeError"
        })
      }
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "objectTypeError"
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "objectNotExist"
    })
  }
}
function Un(e, t) {
  if (undefined !== t) {
    if (Lodash.isPlainObject(t)) {
      for (var n in t) delete t[n]
      Module_91.b(Module_48.a().getState().currentScreenId, "object", e, {})
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "objectTypeError"
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "objectNotExist"
    })
  }
}
function Hn(e) {
  var t = {}
  e.forEach(function (e) {
    var n = Module_10.a(e, 2)
    var r = n[0]
    var o = n[1]
    if ("string" === typeof r || "number" === typeof r) {
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        Module_14.a.log({
          type: "warning",
          messageId: "objectRepeatKey"
        })
      }
      t[r] = o
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "objectKeyTypeError"
      })
    }
  })
  return t
}
function Vn(e) {
  return undefined === e ? (Module_14.a.log({
    type: "error",
    messageId: "objectNotExist"
  }), 0) : Lodash.isPlainObject(e) ? Object.keys(e).length : (Module_14.a.log({
    type: "error",
    messageId: "objectTypeError"
  }), 0)
}
function zn(e, t) {
  return undefined === e ? (Module_14.a.log({
    type: "error",
    messageId: "objectNotExist"
  }), false) : Lodash.isPlainObject(e) ? "string" !== typeof t && "number" !== typeof t ? (Module_14.a.log({
    type: "error",
    messageId: "objectKeyTypeError"
  }), false) : Object.prototype.hasOwnProperty.call(e, t) : (Module_14.a.log({
    type: "error",
    messageId: "objectTypeError"
  }), false)
}
var Yn = Math.pow(2, 31) - 1
function Kn() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1e3
  e = Math.min(e, Yn)
  if (!Module_28.d()) {
    Module_91.a({
      type: Module_68.b.DEVICE_VIBRATE,
      data: {
        duration: e
      }
    })
  }
  try {
    if (navigator.vibrate && !navigator.vibrate(e)) {
      throw new Error("vibrate error")
    }
  } catch (t) {
    console.error(t)
  }
}
function qn() {
  if (Module_28.d()) {
    if (!Module_28.a()) {
      try {
        if (navigator.vibrate) {
          navigator.vibrate(0)
        }
      } catch (e) {
        console.error(e)
      }
    }
  } else {
    Module_91.a({
      type: Module_68.b.DEVICE_NOT_VIBRATE
    })
  }
}
var Xn
var Qn = [0, 0, 0]
var Zn = [0, 0, 0]
var Jn = [0, 0, 0]
var $n = [0, 0, 0]
function er(e) {
  return Math.round(180 * e / Math.PI) % 360
}
function tr(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
  var n = e.toFixed(t)
  return parseFloat(n)
}
function nr() {
  var e = function (e, t) {
    var n = Module_10.a(e, 3)
    var r = n[0]
    var o = n[1]
    var i = n[2]
    if (!(r * r + o * o + i * i < .0981 * 9.81)) {
      var a = Module_10.a(t, 3)
      var s = a[0]
      var c = a[1]
      var l = a[2]
      var u = c * i - l * o
      var d = l * r - s * i
      var p = s * o - c * r
      var f = Math.sqrt(u * u + d * d + p * p)
      if (!(f < .1)) {
        var h = 1 / f
        u *= h
        d *= h
        p *= h
        var m = 1 / Math.sqrt(r * r + o * o + i * i)
        var g = (o *= m) * p - (i *= m) * d
        var _ = i * u - (r *= m) * p
        var v = r * d - o * u
        var b = [u, d, p, g, _, v, r, o, i]
        var y = 1 / Math.sqrt(s * s + c * c + l * l)
        var E = (s * g + c * _ + l * v) * y
        var O = (s * r + c * o + l * i) * y
        return {
          rotation: b,
          inclination: [1, 0, 0, 0, E, O, 0, -O, E]
        }
      }
    }
  }(Zn, Qn)
  if (e) {
    return function (e) {
      var t = er(Math.atan2(e[1], e[4]))
      return [t < 0 ? t + 360 : t || 0, er(Math.asin(-e[7])) || 0, er(Math.atan2(-e[6], e[8])) || 0]
    }(e.rotation)
  }
}
function rr() {
  return tr(Jn[0])
}
function or() {
  return tr(Jn[1])
}
function ir() {
  return tr(Jn[2])
}
function ar() {
  return tr(Zn[0])
}
function sr() {
  return tr(Zn[1])
}
function cr() {
  return tr(Zn[2])
}
function lr() {
  return tr($n[0])
}
function ur() {
  return tr($n[1])
}
function dr() {
  return tr($n[2])
}
function pr() {}
function fr() {
  if (!Module_28.a()) {
    try {
      if ("undefined" !== typeof Magnetometer) {
        var e = new Magnetometer({
          frequency: 60
        })
        e.addEventListener("reading", function () {
          Qn = [e.x, e.y, e.z]
        })
        e.start()
      }
      if ("undefined" !== typeof Accelerometer) {
        var t = new Accelerometer({
          referenceFrame: "device"
        })
        t.addEventListener("reading", function () {
          var e = t.x
          var n = t.y
          var r = t.z
          Zn = [e, n, r]
          Jn = nr() || Jn
          $n = [Jn[1], Jn[2], Jn[0]]
        })
        t.start()
      }
    } catch (n) {
      console.error(n)
    }
  }
}
function hr(e) {
  return mr.apply(this, arguments)
}
function mr() {
  return (mr = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("true" !== localStorage.getItem("".concat(t, "Permission"))) {
              e.next = 2
              break
            }
            return e.abrupt("return", true)
          case 2:
            if (!Module_28.e()) {
              e.next = 5
              break
            }
            Module_91.a({
              type: Module_68.b.PLAYER_PERMISSION,
              data: {
                type: t
              }
            })
            return e.abrupt("return", new Promise(function (e) {
              var n = setInterval(function () {
                var r = localStorage.getItem("".concat(t, "DialogPermission"))
                if ("string" === typeof r) {
                  e("true" === r)
                  if (n) {
                    clearInterval(n)
                  }
                }
              }, 500)
            }))
          case 5:
            return e.abrupt("return", true)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function gr() {
  return (gr = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("undefined" !== typeof permissionHandler) {
              e.next = 2
              break
            }
            return e.abrupt("return", true)
          case 2:
            e.next = 4
            return permissionHandler.handleRequest(t)
          case 4:
            return e.abrupt("return", e.sent)
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
!function (e) {
  e.RECORD_AUDIO = "RECORD_AUDIO"
}(Xn || (Xn = {}))
var _r = function (e) {
  return gr.apply(this, arguments)
}
var vr = -161
var br = 0
var yr = false
function Er() {
  return Or.apply(this, arguments)
}
function Or() {
  return (Or = Module_7.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return hr("microphone")
          case 2:
            if (e.sent) {
              e.next = 6
              break
            }
            Module_14.a.condition(false, {
              type: "warning",
              message: "未开启声音侦测权限，无法进行侦测"
            })
            return e.abrupt("return", false)
          case 6:
            e.next = 8
            return _r(Xn.RECORD_AUDIO)
          case 8:
            if (e.sent) {
              e.next = 12
              break
            }
            Module_14.a.condition(false, {
              type: "warning",
              message: "未开启声音侦测权限，无法进行侦测"
            })
            return e.abrupt("return", false)
          case 12:
            e.prev = 12
            e.next = 15
            return window.navigator.mediaDevices.getUserMedia({
              audio: true
            })
          case 15:
            e$sent = e.sent
            localStorage.setItem("microphonePermission", "true")
            return e.abrupt("return", e$sent)
          case 20:
            e.prev = 20
            e.t0 = e.catch(12)
            Module_14.a.condition(false, {
              type: "warning",
              message: "未开启声音侦测权限，无法进行侦测"
            })
            return e.abrupt("return", false)
          case 24:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[12, 20]])
  }))).apply(this, arguments)
}
function wr() {
  return Cr.apply(this, arguments)
}
function Cr() {
  return (Cr = Module_7.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var n
    var r
    var o
    var i
    var /* [auto-meaningful-name] */i$frequencyBinCount
    var s
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!yr) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            e.next = 4
            return Er()
          case 4:
            if (e$sent = e.sent) {
              n = window.AudioContext || window.webkitAudioContext
              r = new n()
              o = r.createMediaStreamSource(e$sent);
              (i = r.createAnalyser()).fftSize = 256
              i$frequencyBinCount = i.frequencyBinCount
              s = new Uint8Array(i$frequencyBinCount)
              o.connect(i)
              br = window.setInterval(function () {
                i.getByteFrequencyData(s)
                for (var e = 0, t = 0; t < i$frequencyBinCount; t++) {
                  e += Math.pow(s[t], 2)
                }
                var n = Math.sqrt(e / i$frequencyBinCount)
                var r = n / 255 * 160 * (Math.log(n) / Math.log(10)) || 0
                vr = Math.round(-160 + r)
                vr = Math.max(-160, Math.min(0, vr))
              }, 50)
              yr = true
            }
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Tr() {
  if (br) {
    clearInterval(br)
  }
  vr = -161
  br = 0
  yr = false
}
function Sr() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 255
  if (!yr) {
    return -1
  }
  var t = Math.round((vr - -160) * (e - 0) / 160)
  return Math.min(Math.max(t, 0), e)
}
if ("undefined" !== typeof window && window.navigator.mediaDevices) {
  window.navigator.mediaDevices.ondevicechange = function () {
    if (yr) {
      wr()
    }
  }
}
var /* [auto-meaningful-name] */r$getSensorGravityX = r.getSensorGravityX
var /* [auto-meaningful-name] */r$getSensorGravityY = r.getSensorGravityY
var /* [auto-meaningful-name] */r$getSensorGravityZ = r.getSensorGravityZ
var /* [auto-meaningful-name] */r$getSensorRotationX = r.getSensorRotationX
var /* [auto-meaningful-name] */r$getSensorRotationY = r.getSensorRotationY
var /* [auto-meaningful-name] */r$getSensorRotationZ = r.getSensorRotationZ
var /* [auto-meaningful-name] */r$getSensorOrientationAzimuth = r.getSensorOrientationAzimuth
var /* [auto-meaningful-name] */r$unsubscribeSensor = r.unsubscribeSensor
var /* [auto-meaningful-name] */r$subscribeSensor = r.subscribeSensor
var /* [auto-meaningful-name] */o$startSoundDetection = o.startSoundDetection
var /* [auto-meaningful-name] */o$stopSoundDetection = o.stopSoundDetection
var /* [auto-meaningful-name] */o$getVolumeSensorCurrentValue = o.getVolumeSensorCurrentValue
export { vn }
export { bn }
export { yn }
export { En }
export { On }
export { wn }
export { Cn }
export { Tn }
export { Sn }
export { An }
export { In }
export { jn }
export { Nn }
export { Rn }
export { kn }
export { xn }
export { Dn }
export { Pn }
export { Fn }
export { Gn }
export { Wn }
export { Un }
export { Hn }
export { Vn }
export { zn }
export { Kn }
export { qn }
export { rr }
export { or }
export { ir }
export { ar }
export { sr }
export { cr }
export { lr }
export { ur }
export { dr }
export { pr }
export { fr }
export { hr }
export { wr }
export { Tr }
export { Sr }
export { r$getSensorGravityX as Ar }
export { r$getSensorGravityY as Ir }
export { r$getSensorGravityZ as jr }
export { r$getSensorRotationX as Nr }
export { r$getSensorRotationY as Rr }
export { r$getSensorRotationZ as kr }
export { r$getSensorOrientationAzimuth as xr }
export { r$unsubscribeSensor as Dr }
export { r$subscribeSensor as Mr }
export { o$startSoundDetection as Lr }
export { o$stopSoundDetection as Pr }
export { o$getVolumeSensorCurrentValue as Br }
