/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-18
 */

"use strict"

import { cu } from "./index__part-17"
var uu
import * as /* [auto-meaningful-name] */Module_431 from /* 431 */"../../431/index"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_135 from /* 135 */"../../135"
var /* [auto-meaningful-name] */Module_431$a$AudioPlayer = Module_431.a.AudioPlayer
!function (e) {
  e[e.SOUND_MAN = 1] = "SOUND_MAN"
  e[e.SOUND_WOMAN = 0] = "SOUND_WOMAN"
  e[e.SOUND_CHILD = 4] = "SOUND_CHILD"
}(uu || (uu = {}))
var fu = {}
function hu() {
  Module_14.a.condition(false, {
    type: "warning",
    messageId: "soundBlockValueTypeError"
  })
}
function mu(e, t) {
  return gu.apply(this, arguments)
}
function gu() {
  return (gu = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return cu({
              tex: n,
              ctp: 1,
              vol: 9,
              per: uu[t]
            })
          case 3:
            if (null === (e$sent = e.sent) || undefined === e$sent || null === (e$sent$data = e$sent.data) || undefined === e$sent$data ? undefined : e$sent$data.audioUrl) {
              Module_431$a$AudioPlayer.play_url(e$sent.data.audioUrl)
            }
            e.next = 10
            break
          case 7:
            e.prev = 7
            e.t0 = e.catch(0)
            console.error(e.t0)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 7]])
  }))).apply(this, arguments)
}
function _u(e, t) {
  return vu.apply(this, arguments)
}
function vu() {
  return (vu = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return cu({
              tex: n,
              ctp: 1,
              vol: 9,
              per: uu[t]
            })
          case 3:
            if (!(null === (e$sent = e.sent) || undefined === e$sent || null === (e$sent$data = e$sent.data) || undefined === e$sent$data ? undefined : e$sent$data.audioUrl)) {
              e.next = 7
              break
            }
            e.next = 7
            return new Promise(function (e, t) {
              Module_431$a$AudioPlayer.play_url(e$sent.data.audioUrl, function () {
                return e(true)
              }, function () {
                return t()
              })
            })
          case 7:
            e.next = 12
            break
          case 9:
            e.prev = 9
            e.t0 = e.catch(0)
            console.error(e.t0)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 9]])
  }))).apply(this, arguments)
}
function bu(e, t) {
  var /* [auto-meaningful-name] */u$attributes
  var /* [auto-meaningful-name] */u$attributes1
  var /* [auto-meaningful-name] */u$attributes2
  function i(e) {
    var t
    var /* [auto-meaningful-name] */Module_48$a$getState$soundFileMap = Module_48.a().getState().soundFileMap
    var r = Module_48$a$getState$soundFileMap.get(e)
    return r || (Module_48$a$getState$soundFileMap.forEach(function (n) {
      if (!(n.name !== e && "".concat(n.name, ".mp3") !== e)) {
        t = n
      }
    }), t)
  }
  if (fu[e]) {
    if (t) {
      var /* [auto-meaningful-name] */fuE$_volume = fu[e]._volume
      var /* [auto-meaningful-name] */fuE$_rate = fu[e]._rate
      fu[e].unload()
      var c = i(t)
      var l = Module_431$a$AudioPlayer.load(e, (null === c || undefined === c ? undefined : c.cdnUrl) || "", true)
      l.volume(fuE$_volume)
      l.rate(fuE$_rate)
      fu[e] = l
    }
    return fu[e]
  }
  var u = Module_48.a().getState().widgetMap.get(e)
  var d = t || (null === (u$attributes = u.attributes) || undefined === u$attributes ? undefined : u$attributes.fileId)
  var p = null === (u$attributes1 = u.attributes) || undefined === u$attributes1 ? undefined : u$attributes1.audioVolume
  var f = null === (u$attributes2 = u.attributes) || undefined === u$attributes2 ? undefined : u$attributes2.audioRate
  var h = i(d)
  if (h) {
    var m = Module_431$a$AudioPlayer.load(e, (null === h || undefined === h ? undefined : h.cdnUrl) || "", true)
    if ("number" === typeof p) {
      m.volume(yu(p, "volume"))
    }
    if ("number" === typeof f) {
      m.rate(yu(f, "rate"))
    }
    fu[e] = m
    return m
  }
  return ""
}
function yu(e, t) {
  if ("volume" === t) {
    e = (e = e > Module_135.f ? Module_135.f : e) < Module_135.g ? Module_135.g : e
  }
  if ("rate" === t) {
    e = (e = e > Module_135.d ? Module_135.d : e) < Module_135.e ? Module_135.e : e
  }
  return e / 100
}
function Eu(e) {
  var t = bu(e)
  if (t && !t.playing()) {
    t.play()
  }
}
function Ou(e) {
  var t = bu(e)
  if (t) {
    t.stop()
  }
}
function wu(e) {
  var t = bu(e)
  if (t) {
    t.pause()
  }
}
function Cu(e, t) {
  bu(e, t)
}
function Tu(e, t) {
  if ("number" === typeof t) {
    var n = bu(e)
    if (n) {
      n.volume(yu(t, "volume"))
    }
  } else {
    hu()
  }
}
function Su(e, t) {
  if ("number" === typeof t) {
    var n = bu(e)
    if (n) {
      n.rate(yu(t, "rate"))
    }
  } else {
    hu()
  }
}
function Au(e, t, n) {
  if ("number" === typeof n) {
    var r = bu(e)
    if (r) {
      var o = 100 * r._volume
      if ("INCREASE" === t) {
        o += n
      }
      if ("DECREASE" === t) {
        o -= n
      }
      r.volume(yu(o, "volume"))
    }
  } else {
    hu()
  }
}
function Iu(e, t, n) {
  if ("number" === typeof n) {
    var r = bu(e)
    if (r) {
      var o = 100 * r._rate
      if ("INCREASE" === t) {
        o += n
      }
      if ("DECREASE" === t) {
        o -= n
      }
      r.rate(yu(o, "rate"))
    }
  } else {
    hu()
  }
}
export { Module_431$a$AudioPlayer as pu }
export { mu }
export { _u }
export { Eu }
export { Ou }
export { wu }
export { Cu }
export { Tu }
export { Su }
export { Au }
export { Iu }
