/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-10
 */

"use strict"

import { Uo, Yo, Ko } from "./index__part-9"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../9"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Lodash from /* 30 */"lodash"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../47"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_277 from /* 277 */"../../277"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_105 from /* 105 */"../../105"
import * as /* [auto-meaningful-name] */Module_65 from /* 65 */"../../691/65"
import * as /* [auto-meaningful-name] */Module_126 from /* 126 */"../../691/126"
import * as /* [auto-meaningful-name] */Module_67 from /* 67 */"./67/index"
import * as /* [auto-meaningful-name] */Module_144 from /* 144 */"../../144"
function di(e, t) {
  if ("number" === typeof t) {
    var n = Module_12.d(e)
    if (n && Module_14.a.isNumber(t, {
      type: "error",
      widgetId: e,
      messageId: "argNotNumber",
      values: {
        name: "旋转角度"
      }
    })) {
      var r = n.rotation + t / 180 * Math.PI
      Module_12.h(e, {
        rotation: r
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "旋转角度"
      }
    })
  }
}
function pi(e, t) {
  if ("number" === typeof t) {
    var n = Module_12.d(e)
    if (n) {
      var r = n.rotation + -t / 180 * Math.PI
      Module_12.h(e, {
        rotation: r
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "旋转"
      }
    })
  }
}
function fi(e, t) {
  if ("number" === typeof t) {
    var n = Ko(e)
    if (n && Module_14.a.isNumber(t, {
      type: "error",
      widgetId: e,
      messageId: "argNotNumber",
      values: {
        name: "移动距离"
      }
    })) {
      n.move_forward(t)
      var r = n.get_position()
      Module_12.j(e, r)
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "移动"
      }
    })
  }
}
function hi(e, t) {
  if ("number" === typeof t) {
    fi(e, -t)
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "移动"
      }
    })
  }
}
function mi(e, t) {
  if ("number" === typeof t) {
    Module_12.h(e, {
      rotation: t / 180 * Math.PI
    })
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "角度"
      }
    })
  }
}
function gi(e, t) {
  var n = Module_12.e(e)
  if (n) {
    var r = t.x - n.x
    var o = t.y - n.y
    if (!(0 === r && 0 === o)) {
      Module_12.h(e, {
        rotation: Math.atan2(o, r)
      })
    }
  }
}
var _i = new Map()
function vi(e, t, n, r) {
  bi(e, t, n, r)
}
function bi(e, t, n, r) {
  var o
  if ("string" === typeof t) {
    if (t.includes("ACTOR") || Qi(e, t)) {
      if (Module_14.a.isNumber(n, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "间隔时间"
        }
      }) && Module_14.a.isNumber(r, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "重复次数"
        }
      })) {
        Module_14.a.range(n, {
          min: Module_144.d,
          max: Module_144.b
        }, {
          type: "warning",
          widgetId: e,
          messageId: "valueOutOfRange"
        })
        _i.delete(e)
        var i
        var s
        var /* [auto-meaningful-name] */Module_12$bE$attributes = Module_12.b(e).attributes
        var /* [auto-meaningful-name] */Module_12$bE$attributes$actionList = Module_12$bE$attributes.actionList
        var /* [auto-meaningful-name] */Module_12$bE$attributes$selectedStyleId = Module_12$bE$attributes.selectedStyleId
        var d = []
        if (t.includes("ACTOR")) {
          d = (null === (i = Module_12$bE$attributes$actionList.find(function (e) {
            return e.id === t
          })) || undefined === i ? undefined : i.styleList) || []
        } else {
          d = (null === (s = Module_12$bE$attributes$actionList.find(function (e) {
            return e.name === t
          })) || undefined === s ? undefined : s.styleList) || []
        }
        if ((null === (o = d) || undefined === o ? undefined : o.length) && n && r) {
          var p = d.findIndex(function (e) {
            return e.id === Module_12$bE$attributes$selectedStyleId
          })
          if (-1 === p) {
            p = 0
          }
          return new Promise(function (t) {
            Ei(e, d[p].id)
            var o = 1
            var i = 0
            var a = window.setInterval(function () {
              if (o >= d.length) {
                o = 0
                i++
              }
              if (i >= r || _i.get(e) !== a) {
                window.clearInterval(a)
                return t()
              }
              p = (p + 1) % d.length
              o++
              Ei(e, d[p].id)
            }, n)
            _i.set(e, a)
          })
        }
      }
    } else {
      Module_14.a.log({
        type: "error",
        widgetId: e,
        messageId: "actorActionNameNotExists"
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      widgetId: e,
      messageId: "mustToBeString",
      values: {
        name: "动作"
      }
    })
  }
}
function yi(e) {
  _i.delete(e)
}
function Ei(e, t) {
  Module_12.h(e, {
    selectedStyleId: t
  })
}
function Oi(e, t) {
  if ("__random" === t) {
    var n = Lodash.random(-1 * Math.PI, Math.PI)
    Module_12.h(e, {
      rotation: n
    })
  } else if ("__mouse" === t) {
    var r = Uo(e)
    if (!r) {
      return
    }
    var o = Yo(r)
    if (o) {
      gi(e, o)
    }
  } else {
    var i = Module_12.e(t)
    if (!i) {
      return
    }
    gi(e, i)
  }
}
function wi(e, t, n) {
  var r = Uo(e)
  if (r) {
    var o = r.actors.get_actor(e)
    var /* [auto-meaningful-name] */o$value = o.value
    if (!(0, o.is_error)(o$value) && Module_14.a.isNumber(n, {
      type: "error",
      widgetId: e,
      messageId: "argNotNumber",
      values: {
        name: "旋转角度"
      }
    })) {
      var a = Module_65.b(n)
      o$value.rotate_around_actor(t, a)
    }
  }
}
function Ci(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : "full"
  var r = Uo(e)
  if (r) {
    var o = r.actors.get_actor(e)
    var /* [auto-meaningful-name] */o$value = o.value
    var /* [auto-meaningful-name] */o$is_error = o.is_error
    if (!o$is_error(o$value)) {
      if ("x" === n) {
        o$value.set_position_x(t.x)
      } else {
        if ("y" === n) {
          o$value.set_position_y(t.y)
        } else {
          o$value.set_position(t.x, t.y)
        }
      }
    }
  }
}
function Ti(e, t, n) {
  if (Module_14.a.isNumber(t, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "x坐标"
    }
  }) && Module_14.a.isNumber(n, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "y坐标"
    }
  })) {
    Module_12.j(e, {
      x: t,
      y: n
    })
    Ci(e, {
      x: t,
      y: n
    })
  }
}
function Si(e, t) {
  if ("__random" === t) {
    var n = Uo(e)
    if (!n) {
      return
    }
    var /* [auto-meaningful-name] */n$get_view$clientWidth = n.get_view().clientWidth
    var /* [auto-meaningful-name] */n$get_view$clientHeight = n.get_view().clientHeight
    var i = Lodash.random(-1 * n$get_view$clientWidth, n$get_view$clientWidth)
    var s = Lodash.random(-1 * n$get_view$clientHeight, n$get_view$clientHeight)
    Module_12.j(e, {
      x: i,
      y: s
    })
    Ci(e, {
      x: i,
      y: s
    })
  } else if ("__mouse" === t) {
    var c = Uo(e)
    if (!c) {
      return
    }
    var l = Yo(c)
    if (l) {
      var u = l.x
      var d = l.y
      Module_12.j(e, {
        x: u,
        y: d
      })
      Ci(e, {
        x: u,
        y: d
      })
    }
  } else {
    var p = Module_12.e(t)
    if (!p) {
      return
    }
    Module_12.j(e, p)
    Ci(e, p)
  }
}
function Ai(e, t) {
  if (Module_14.a.isNumber(t, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "x坐标"
    }
  })) {
    Module_12.j(e, {
      x: t
    })
    Ci(e, {
      x: t
    }, "x")
  }
}
function Ii(e, t) {
  if (Module_14.a.isNumber(t, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "y坐标"
    }
  })) {
    Module_12.j(e, {
      y: t
    })
    Ci(e, {
      y: t
    }, "y")
  }
}
function ji(e, t, n) {
  if ("number" === typeof t) {
    var r = Module_12.e(e)
    if (r) {
      if (!Module_14.a.isNumber(t, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "x坐标"
        }
      })) {
        return
      }
      Module_12.j(e, {
        x: r.x + n * t
      })
      Ci(e, {
        x: r.x + n * t
      }, "x")
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "X坐标"
      }
    })
  }
}
function Ni(e, t, n) {
  if ("number" === typeof t) {
    var r = Module_12.e(e)
    if (r && Module_14.a.isNumber(t, {
      type: "error",
      widgetId: e,
      messageId: "argNotNumber",
      values: {
        name: "y坐标"
      }
    })) {
      Module_12.j(e, {
        y: r.y + n * t
      })
      Ci(e, {
        y: r.y + n * t
      }, "y")
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "Y坐标"
      }
    })
  }
}
function Ri(e, t, n, r) {
  return ki.apply(this, arguments)
}
function ki() {
  return (ki = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    var s
    var c
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("number" === typeof o) {
              e.next = 3
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "时间"
              }
            })
            return e.abrupt("return")
          case 3:
            if ("number" === typeof n) {
              e.next = 6
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "X坐标"
              }
            })
            return e.abrupt("return")
          case 6:
            if (i = Uo(t), s = Module_12.e(t), i && s) {
              e.next = 10
              break
            }
            return e.abrupt("return")
          case 10:
            if (o < 0 && Module_14.a.log({
              type: "warning",
              messageId: "valueOutOfRange",
              widgetId: t
            }), !(o <= 0)) {
              e.next = 14
              break
            }
            ji(t, n, r)
            return e.abrupt("return")
          case 14:
            c = s.x + n * r
            e.next = 17
            return i.stage_animation.compose_tween(t, {
              variation_type: Module_105.f.TO,
              tween_vars: {
                position_x: c,
                duration: o,
                on_complete: function () {
                  Module_12.j(t, {
                    x: c
                  })
                }
              }
            })
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function xi(e, t, n, r) {
  return Di.apply(this, arguments)
}
function Di() {
  return (Di = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    var s
    var c
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("number" === typeof o) {
              e.next = 3
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "时间"
              }
            })
            return e.abrupt("return")
          case 3:
            if ("number" === typeof n) {
              e.next = 6
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "Y坐标"
              }
            })
            return e.abrupt("return")
          case 6:
            if (i = Uo(t), s = Module_12.e(t), i && s) {
              e.next = 10
              break
            }
            return e.abrupt("return")
          case 10:
            if (o < 0 && Module_14.a.log({
              type: "warning",
              messageId: "valueOutOfRange",
              widgetId: t
            }), !(o <= 0)) {
              e.next = 14
              break
            }
            Ni(t, n, r)
            return e.abrupt("return")
          case 14:
            c = s.y + n * r
            e.next = 17
            return i.stage_animation.compose_tween(t, {
              variation_type: Module_105.f.TO,
              tween_vars: {
                position_y: c,
                duration: o,
                on_complete: function () {
                  Module_12.j(t, {
                    y: c
                  })
                }
              }
            })
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Mi(e, t, n, r) {
  return Li.apply(this, arguments)
}
function Li() {
  return (Li = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("number" === typeof n) {
              e.next = 3
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "时间"
              }
            })
            return e.abrupt("return")
          case 3:
            if ("number" === typeof r) {
              e.next = 6
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "X坐标"
              }
            })
            return e.abrupt("return")
          case 6:
            if ("number" === typeof o) {
              e.next = 9
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "Y坐标"
              }
            })
            return e.abrupt("return")
          case 9:
            if (i = Uo(t)) {
              e.next = 12
              break
            }
            return e.abrupt("return")
          case 12:
            if (n < 0 && Module_14.a.log({
              type: "warning",
              messageId: "valueOutOfRange",
              widgetId: t
            }), !(n <= 0)) {
              e.next = 16
              break
            }
            Ti(t, r, o)
            return e.abrupt("return")
          case 16:
            e.next = 18
            return i.stage_animation.compose_tween(t, {
              variation_type: Module_105.f.TO,
              tween_vars: {
                position_x: r,
                position_y: o,
                duration: n,
                on_complete: function () {
                  Module_12.j(t, {
                    x: r,
                    y: o
                  })
                }
              }
            })
          case 18:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Pi(e, t) {
  Module_12.l(e, t)
}
function Bi(e, t) {
  return Fi.apply(this, arguments)
}
function Fi() {
  return (Fi = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (r = Uo(t)) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            if (o = Ko(t)) {
              e.next = 6
              break
            }
            return e.abrupt("return")
          case 6:
            if (Module_14.a.isNumber(n, {
              type: "error",
              widgetId: t,
              messageId: "argNotNumber",
              values: {
                name: "时间"
              }
            })) {
              e.next = 8
              break
            }
            return e.abrupt("return")
          case 8:
            o.set_visible(true)
            o.set_alpha(0)
            e.next = 12
            return r.stage_animation.compose_tween(t, {
              variation_type: Module_105.f.TO,
              tween_vars: {
                alpha: 1,
                duration: n
              }
            })
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Gi(e, t) {
  return Wi.apply(this, arguments)
}
function Wi() {
  return (Wi = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (r = Uo(t)) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            if (Module_14.a.isNumber(n, {
              type: "error",
              widgetId: t,
              messageId: "argNotNumber",
              values: {
                name: "时间"
              }
            })) {
              e.next = 5
              break
            }
            return e.abrupt("return")
          case 5:
            e.next = 7
            return r.stage_animation.compose_tween(t, {
              variation_type: Module_105.f.TO,
              tween_vars: {
                alpha: 0,
                duration: n
              }
            })
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Ui(e, t) {
  if (Module_12.d(e) && Module_14.a.isNumber(t, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "比例大小"
    }
  })) {
    var n = {
      x: t /= 100,
      y: t,
      ratio: false
    }
    Module_12.h(e, {
      scaleAndLock: n
    })
  }
}
function Hi(e, t, n) {
  var r = Module_12.d(e)
  if (r && Module_14.a.isNumber(t, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "比例大小"
    }
  })) {
    var o
    var i = {
      x: o = r.scaleAndLock ? (r.scaleAndLock.x || 0) + t / 100 * n : r.scale + t / 100 * n,
      y: o,
      ratio: false
    }
    Module_12.h(e, {
      scaleAndLock: i
    })
  }
}
function Vi(e, t, n) {
  var r = Module_12.d(e)
  if (r && Module_14.a.isNumber(n, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "比例大小"
    }
  })) {
    n /= 100
    var o
    var i = Module_6.a({}, r.scaleAndLock || {
      x: 1,
      y: 1,
      ratio: false
    })
    i.ratio = false
    o = "scale_x" === t ? i.x = n : "scale_y" === t ? i.y = n : i.x = i.y = n
    Module_14.a.range(o, {
      min: .01,
      max: 100
    }, {
      type: "warning",
      widgetId: e,
      messageId: "scaleOutOfRange"
    })
    Module_12.h(e, {
      scaleAndLock: i
    })
  }
}
function zi(e, t) {
  var n = Module_12.d(e)
  if (n) {
    var r = Module_6.a({}, n.scaleAndLock || {
      x: 1,
      y: 1,
      ratio: false
    })
    var o = r.x
    if ("scale_y" === t) {
      o = r.y
    }
    return Math.round(100 * o)
  }
}
function Yi(e, t, n, r) {
  var o = Module_12.d(e)
  if (o && Module_14.a.isNumber(n, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "比例大小"
    }
  })) {
    var i
    var s = Module_6.a({}, o.scaleAndLock || {
      x: 1,
      y: 1,
      ratio: false
    })
    s.ratio = false
    i = "scale_x" === t ? s.x += n / 100 * r : "scale_y" === t ? s.y += n / 100 * r : s.x = s.y = s.x + n / 100 * r
    Module_14.a.range(i, {
      min: .01,
      max: 100
    }, {
      type: "warning",
      widgetId: e,
      messageId: "scaleOutOfRange"
    })
    Module_12.h(e, {
      scaleAndLock: s
    })
  }
}
function Ki(e, t, n) {
  var r = Module_12.b(e)
  if (r && Module_14.a.isNumber(t, {
    type: "error",
    widgetId: e,
    messageId: "argNotNumber",
    values: {
      name: "不透明度"
    }
  })) {
    var o = "number" === typeof r.opacity ? r.opacity : 100
    Module_14.a.range(o + t * n, {
      min: 0,
      max: 100
    }, {
      type: "warning",
      widgetId: e,
      messageId: "opacityOutOfRange"
    })
    var i = Math.min(100, Math.max(0, o + t * n))
    Module_12.i(e, i)
  }
}
function qi(e, t) {
  var n = []
  var r = Module_12.b(e)
  return r ? (r.attributes.actionList.some(function (e) {
    var r = e.styleList.map(function (e) {
      return e.id
    })
    return !!r.includes(t) && (n = r, true)
  }), n) : n
}
function Xi(e) {
  var t
  var n = Ko(e)
  if (n) {
    var r = null === (t = n.get_current_style()) || undefined === t ? undefined : t.style_id
    if (r) {
      var o = qi(e, r)
      if (o.includes(r)) {
        return o.indexOf(r) + 1
      }
    }
  }
}
function Qi(e, t) {
  var n = Ko(e)
  var r = Module_12.b(e)
  if (r && n) {
    return r.attributes.actionList.some(function (e) {
      return e.name === t
    })
  }
}
function Zi(e, t) {
  var n = Ko(e)
  var r = Module_12.b(e)
  if (!r || !n) {
    return null
  }
  var /* [auto-meaningful-name] */r$attributes$actionList = r.attributes.actionList
  return t.includes("ACTOR") ? r$attributes$actionList.find(function (e) {
    return e.id === t
  }) : r$attributes$actionList.find(function (e) {
    return e.name === t
  })
}
function Ji(e, t, n) {
  var r
  var o = Zi(e, t)
  return o ? null === (r = o.styleList[n]) || undefined === r ? undefined : r.id : null
}
function $i(e, t) {
  var n = Ko(e)
  var r = Module_12.b(e)
  if (!r || !n) {
    return -1
  }
  var o
  var /* [auto-meaningful-name] */r$attributes$actionList = r.attributes.actionList
  var s = -1
  var c = Module_47.a(r$attributes$actionList)
  try {
    for (c.s(); !(o = c.n()).done;) {
      var l = o.value.styleList.findIndex(function (e) {
        return e.id === t
      })
      if (l >= 0) {
        s = l
        break
      }
    }
  } catch (u) {
    c.e(u)
  } finally {
    c.f()
  }
  return s
}
function ea(e, t, n) {
  var r = Zi(e, t)
  return !!r && ("number" === typeof n ? !!r.styleList[n - 1] && r.styleList[n - 1].id : !!r.styleList.find(function (e) {
    return e.id === n
  }) && n)
}
function ta(e, t) {
  var n = Module_12.d(e)
  if (n) {
    switch (t) {
      case "scale":
        return 100 * n.scale
      case "degree":
        return Math.ceil(n.rotation / Math.PI * 180)
      case "style":
        return Xi(e)
      default:
        console.error("getActorProperty property error", t)
    }
  }
}
function na(e, t) {
  _i.delete(e)
  Module_12.h(e, {
    selectedStyleId: t
  })
}
function ra(e, t, n) {
  var r = t
  if ("string" === typeof n) {
    if (!n || n.includes("ACTOR") || Qi(e, n)) {
      if (t !== Module_9.h) {
        if ("object" !== typeof t && "boolean" !== typeof t) {
          if ("number" === typeof t || t.includes("STYLE")) {
            if ("number" === typeof t) {
              var o = ea(e, n, t)
              if (!o) {
                return void Module_14.a.log({
                  type: "error",
                  widgetId: e,
                  messageId: "actorStyleIndexNotExists"
                })
              }
              r = o
            }
            if (n && !n.includes("ACTOR") && "string" === typeof t && t.includes("STYLE")) {
              var i = $i(e, t)
              if (i >= 0) {
                var s = Ji(e, n, i)
                if (!s) {
                  return void Module_14.a.log({
                    type: "error",
                    widgetId: e,
                    messageId: "actorStyleIndexNotExists"
                  })
                }
                r = s
              }
            }
            _i.delete(e)
            Module_12.h(e, {
              selectedStyleId: r
            })
          } else {
            Module_14.a.log({
              type: "error",
              widgetId: e,
              messageId: "actorStyleIndexNotExists",
              values: {
                name: "造型"
              }
            })
          }
        } else {
          Module_14.a.log({
            type: "error",
            widgetId: e,
            messageId: "actorStyleIndexNotExists",
            values: {
              name: "造型"
            }
          })
        }
      } else {
        Module_14.a.log({
          type: "error",
          widgetId: e,
          messageId: "actorStyleIndexNotExists",
          values: {
            name: "造型"
          }
        })
      }
    } else {
      Module_14.a.log({
        type: "error",
        widgetId: e,
        messageId: "actorActionNameNotExists",
        values: {
          name: "动作"
        }
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      widgetId: e,
      messageId: "mustToBeString",
      values: {
        name: "动作"
      }
    })
  }
}
function oa(e, t) {
  if (Ko(e)) {
    var /* [auto-meaningful-name] */Module_12$dE$selectedStyleId = Module_12.d(e).selectedStyleId
    if (Module_12$dE$selectedStyleId) {
      var r = qi(e, Module_12$dE$selectedStyleId)
      if (null === r || undefined === r ? undefined : r.length) {
        var o = 0
        if ("random" === t) {
          o = Math.floor(Math.random() * r.length)
        } else {
          var i = r.indexOf(Module_12$dE$selectedStyleId)
          if (i <= -1) {
            return
          }
          o = (i + t + r.length) % r.length
        }
        na(e, r[o])
      }
    }
  }
}
function ia(e) {
  var t
  return Math.ceil((null === (t = Module_12.e(e)) || undefined === t ? undefined : t.x) || 0)
}
function aa(e) {
  var t
  return Math.ceil((null === (t = Module_12.e(e)) || undefined === t ? undefined : t.y) || 0)
}
function sa(e) {
  var t = Module_12.d(e)
  if (t) {
    return Math.ceil(t.rotation / Math.PI * 180)
  }
}
function ca(e, t, n, r) {
  var o = Uo(e)
  if (o) {
    var i = o.components.get_actor_dialog_manager()
    if (i) {
      if ("" !== t) {
        if (Module_14.a.isNumber(r, {
          type: "error",
          widgetId: e,
          messageId: "argNotNumber",
          values: {
            name: "时间"
          }
        })) {
          var a = t.length > 90 ? "".concat(t.substr(0, 90), "...") : t
          i.load_actor_dialog(e, a, n)
          if (r !== 1 / 0) {
            setTimeout(function () {
              i.destroy_actor_dialog(e)
            }, 1e3 * r)
          }
        }
      } else {
        i.destroy_actor_dialog(e)
      }
    }
  }
}
function la(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 1 / 0
  ca(e, t, Module_126.a.SAYING, n)
}
function ua(e) {
  switch (e) {
    case "__boundary_left":
      return Module_105.b.LEFT
    case "__boundary_right":
      return Module_105.b.RIGHT
    case "__boundary_top":
      return Module_105.b.TOP
    default:
      return Module_105.b.BOTTOM
  }
}
var da = [Module_105.b.LEFT, Module_105.b.RIGHT, Module_105.b.TOP, Module_105.b.BOTTOM]
var pa = new Set()
function fa(e) {
  pa.add(e)
}
function ha(e) {
  pa.delete(e)
}
function ma() {
  pa.clear()
}
function ga(e) {
  return pa.has(e)
}
function _a(e, t) {
  var n = Uo(e)
  if (!n) {
    return false
  }
  var r = n.actors.get_actor(e)
  var /* [auto-meaningful-name] */r$is_error = r.is_error
  var /* [auto-meaningful-name] */r$value = r.value
  if (r$is_error(r$value) || !r$value.get_visible()) {
    return false
  }
  var a = r$value.check_bumped(t)
  var /* [auto-meaningful-name] */a$is_error = a.is_error
  var /* [auto-meaningful-name] */a$value = a.value
  return !a$is_error(a$value) && a$value
}
function va(e, t) {
  var n = Uo(e)
  if (!n) {
    return false
  }
  var r = n.actors.get_actor(e)
  var /* [auto-meaningful-name] */r$is_error = r.is_error
  var /* [auto-meaningful-name] */r$value = r.value
  return !(r$is_error(r$value) || !r$value.get_visible()) && ("__boundary_any" === t ? da.some(function (e) {
    return r$value.check_relation_with_edge("collision", e)
  }) : r$value.check_relation_with_edge("collision", ua(t)))
}
function ba(e) {
  var t = Uo(e)
  if (!t) {
    return false
  }
  var n = Yo(t)
  if (!n) {
    return false
  }
  var r = t.actors.get_actor(e)
  var /* [auto-meaningful-name] */r$is_error = r.is_error
  var /* [auto-meaningful-name] */r$value = r.value
  if (r$is_error(r$value) || !r$value.get_visible()) {
    return false
  }
  var a = 0
  t.actors.get_actor_ids().forEach(function (e) {
    var /* [auto-meaningful-name] */t$actors$get_actorE$value = t.actors.get_actor(e).value
    if (!r$is_error(t$actors$get_actorE$value) && t$actors$get_actorE$value.get_visible() && t$actors$get_actorE$value.hit_test(n.x, n.y) && t$actors$get_actorE$value.get_z_index() > a) {
      a = t$actors$get_actorE$value.get_z_index()
    }
  })
  return r$value.hit_test(n.x, n.y) && r$value.get_z_index() === a
}
function ya(e) {
  var t = Uo(e)
  if (!t) {
    return false
  }
  var n = t.actors.get_actor(e)
  var /* [auto-meaningful-name] */n$is_error = n.is_error
  var /* [auto-meaningful-name] */n$value = n.value
  return !n$is_error(n$value) && n$value.has_left_stage()
}
function Ea(e, t) {
  if ("__boundary_any" === t) {
    return ya(e)
  }
  var n = Uo(e)
  if (!n) {
    return false
  }
  var r = n.actors.get_actor(e)
  var /* [auto-meaningful-name] */r$is_error = r.is_error
  var /* [auto-meaningful-name] */r$value = r.value
  return !r$is_error(r$value) && r$value.check_relation_with_edge("overstep", ua(t))
}
function Oa(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : 1 / 0
  ca(e, t, Module_126.a.THINKING, n)
}
function wa(e, t, n) {
  Module_67.b(function () {
    return _a(e, t)
  }, n)
}
function Ca(e, t, n) {
  Module_67.b(function () {
    return va(e, t)
  }, n)
}
function Ta(e, t, n) {
  if ("__mouse" === t) {
    Module_67.b(function () {
      return ba(e)
    }, n)
  }
}
function Sa(e, t) {
  Module_67.b(function () {
    return ya(e)
  }, t)
}
function Aa(e, t, n) {
  if ("__boundary_any" !== t) {
    Module_67.b(function () {
      return Ea(e, t)
    }, n)
  } else {
    Sa(e, n)
  }
}
function Ia(e, t) {
  var n = Module_12.d(e)
  if (n) {
    var r = Module_6.a({}, n.flipped || {
      vertical: false,
      horizontal: false
    })
    if ("horizontal" === t) {
      r.horizontal = true
    } else {
      r.vertical = true
    }
    Module_12.h(e, {
      flipped: r
    })
  }
}
function ja(e, t) {
  var n = Module_12.d(e)
  if (!n) {
    return false
  }
  var r = n.flipped || {
    vertical: false,
    horizontal: false
  }
  return "horizontal" === t ? r.horizontal : r.vertical
}
function Na(e, t) {
  var n = Uo(e)
  if (n) {
    var r = n.actors.get_actor(e)
    var /* [auto-meaningful-name] */r$is_error = r.is_error
    var /* [auto-meaningful-name] */r$value = r.value
    if (!r$is_error(r$value)) {
      var a = r$value.get_z_index()
      if ("up" === t) {
        a += 1
      } else {
        if ("down" === t) {
          a -= 1
        } else {
          a = "top" === t ? 999999 : 0
        }
      }
      r$value.set_z_index(a)
    }
  }
}
function Ra(e) {
  if (!e) {
    return false
  }
  var t = e.get_shadow_field("ACTOR_ACTION_WRAPPER", "ACTOR_ACTION_ID")
  return t || false
}
function ka(e) {
  if (!e) {
    return false
  }
  var t = e.get_shadow_field("ACTOR_STYLE_WRAPPER", "ACTOR_STYLE_ID")
  return t || false
}
function xa(e) {
  try {
    return Src_shared_tools_index.l(Color(e))
  } catch (t) {
    return ""
  }
}
function Da(e, t, n, r) {
  try {
    var o = Color.rgb(e, t, n).alpha(r / 100)
    return Src_shared_tools_index.l(o)
  } catch (i) {
    return ""
  }
}
function Ma(e, t, n, r) {
  try {
    var o = Color.hsv(e, t, n).alpha(r / 100)
    return Src_shared_tools_index.l(o)
  } catch (i) {
    return ""
  }
}
function La(e) {
  try {
    var t = Color(e).hsv()
    return t.color.concat(100 * t.valpha)
  } catch (n) {
    console.error("hexToHsv error", n)
    return []
  }
}
function Pa(e) {
  var t = Ko(e)
  return null === t || undefined === t ? undefined : t.get_brush()
}
function Ba(e) {
  var t = Module_12.d(e)
  var n = null === t || undefined === t ? undefined : t.isPenDown
  var r = Ko(e)
  var o = null === r || undefined === r ? undefined : r.get_brush()
  if (r && o) {
    var i = r.get_position()
    Module_12.j(e, i)
    if (n) {
      o.set_pen_down()
    } else {
      if (!(null === o || undefined === o)) {
        o.set_pen_up()
      }
    }
  }
}
function Fa(e, t, n) {
  if ("number" === typeof t) {
    if ("number" === typeof n) {
      var r = Ko(e)
      var o = null === r || undefined === r ? undefined : r.get_brush()
      if (r && o) {
        o.set_pen_up()
        r.set_position(t, n)
        o.set_pen_down()
        Ba(e)
      }
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        widgetId: e,
        values: {
          name: "y"
        }
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "x"
      }
    })
  }
}
function Ga(e, t, n, r, o) {
  if ("number" === typeof t) {
    if ("number" === typeof n) {
      if ("number" === typeof r) {
        if ("number" === typeof o) {
          Module_12.h(e, {
            updateAt: Date.now()
          })
          var i = Ko(e)
          var s = null === i || undefined === i ? undefined : i.get_brush()
          if (i && s) {
            s.set_pen_up()
            i.set_position(t, n)
            s.set_pen_down()
            i.set_position(r, o)
            Ba(e)
          }
        } else {
          Module_14.a.log({
            type: "error",
            messageId: "argNotNumber",
            widgetId: e,
            values: {
              name: "y2"
            }
          })
        }
      } else {
        Module_14.a.log({
          type: "error",
          messageId: "argNotNumber",
          widgetId: e,
          values: {
            name: "x2"
          }
        })
      }
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        widgetId: e,
        values: {
          name: "y1"
        }
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "x1"
      }
    })
  }
}
function Wa(e, t) {
  return Ua.apply(this, arguments)
}
function Ua() {
  return (Ua = Module_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var o
    var i
    var a
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("number" === typeof n) {
              e.next = 3
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "半径"
              }
            })
            return e.abrupt("return")
          case 3:
            if (r = Ko(t), o = null === r || undefined === r ? undefined : r.get_brush(), r && o) {
              e.next = 7
              break
            }
            return e.abrupt("return")
          case 7:
            i = ia(t)
            a = aa(t)
            Ha(t, n, i, a)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Ha(e, t, n, r) {
  return Va.apply(this, arguments)
}
function Va() {
  return (Va = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    var s
    var c
    var l
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("number" === typeof n) {
              e.next = 3
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "半径"
              }
            })
            return e.abrupt("return")
          case 3:
            if ("number" === typeof r) {
              e.next = 6
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "圆心x"
              }
            })
            return e.abrupt("return")
          case 6:
            if ("number" === typeof o) {
              e.next = 9
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "圆心y"
              }
            })
            return e.abrupt("return")
          case 9:
            if (Module_12.h(t, {
              updateAt: Date.now()
            }), i = Ko(t), s = null === i || undefined === i ? undefined : i.get_brush(), i && s) {
              e.next = 14
              break
            }
            return e.abrupt("return")
          case 14:
            c = Math.max(n, 0)
            l = i.get_rotation()
            e.next = 18
            return new Promise(function (e, t) {
              s.set_pen_up()
              i.set_position(r, o - c)
              s.set_pen_down()
              for (var n = c > 20 ? 360 : 120, a = 0; a < n; a++) {
                i.set_rotation(360 * a / n / 180 * Math.PI)
                i.move_forward(2 * Math.PI * c / n)
              }
              i.set_rotation(l)
              e(true)
            })
          case 18:
            s.set_pen_up()
            i.set_position(r, o)
            Ba(t)
          case 21:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function za(e, t, n) {
  if ("number" === typeof t) {
    if ("number" === typeof n) {
      var r = Ko(e)
      var o = null === r || undefined === r ? undefined : r.get_brush()
      if (r && o) {
        Ya(e, t, n, ia(e), aa(e))
      }
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        widgetId: e,
        values: {
          name: "角度"
        }
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "半径"
      }
    })
  }
}
function Ya(e, t, n, r, o) {
  return Ka.apply(this, arguments)
}
function Ka() {
  return (Ka = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i) {
    var s
    var c
    var l
    var u
    var d
    var p = arguments
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (s = p.length > 5 && undefined !== p[5] ? p[5] : -90, "number" === typeof n) {
              e.next = 4
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "半径"
              }
            })
            return e.abrupt("return")
          case 4:
            if ("number" === typeof r) {
              e.next = 7
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "角度"
              }
            })
            return e.abrupt("return")
          case 7:
            if ("number" === typeof o) {
              e.next = 10
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "圆心x"
              }
            })
            return e.abrupt("return")
          case 10:
            if ("number" === typeof i) {
              e.next = 13
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "圆心y"
              }
            })
            return e.abrupt("return")
          case 13:
            if ("number" === typeof s) {
              e.next = 16
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "起始位置"
              }
            })
            return e.abrupt("return")
          case 16:
            if (Module_12.h(t, {
              updateAt: Date.now()
            }), c = Ko(t), l = null === c || undefined === c ? undefined : c.get_brush(), c && l) {
              e.next = 21
              break
            }
            return e.abrupt("return")
          case 21:
            u = Math.max(n, 0)
            d = c.get_rotation()
            e.next = 25
            return new Promise(function (e, t) {
              l.set_pen_up()
              c.set_position(o + u * Math.cos(s * Math.PI / 180), i + u * Math.sin(s * Math.PI / 180))
              var n = (s + 90) / 180 * Math.PI
              l.set_pen_down()
              for (var a = u > 20 ? 360 : 120, p = Math.abs(Math.ceil(a * r / 360)), f = 0; f <= p; f++) {
                if (r >= 0) {
                  c.set_rotation(n + 360 * f / a / 180 * Math.PI)
                  c.move_forward(2 * Math.PI * u / a)
                } else {
                  c.set_rotation(n - 360 * f / a / 180 * Math.PI)
                  c.move_forward(-2 * Math.PI * u / a)
                }
              }
              c.set_rotation(d)
              e(true)
            })
          case 25:
            l.set_pen_up()
            c.set_position(o, i)
            Ba(t)
          case 28:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function qa(e, t, n) {
  if ("number" === typeof t) {
    if ("number" === typeof n) {
      var r = Ko(e)
      var o = null === r || undefined === r ? undefined : r.get_brush()
      if (r && o) {
        Xa(e, t, n, ia(e), aa(e))
      }
    } else {
      Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        widgetId: e,
        values: {
          name: "边长"
        }
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "多边形"
      }
    })
  }
}
function Xa(e, t, n, r, o) {
  return Qa.apply(this, arguments)
}
function Qa() {
  return (Qa = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i) {
    var s
    var c
    var l
    var u
    var d
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if ("number" === typeof n) {
              e.next = 3
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "多边形"
              }
            })
            return e.abrupt("return")
          case 3:
            if ("number" === typeof r) {
              e.next = 6
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "边长"
              }
            })
            return e.abrupt("return")
          case 6:
            if ("number" === typeof o) {
              e.next = 9
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "起点x"
              }
            })
            return e.abrupt("return")
          case 9:
            if ("number" === typeof i) {
              e.next = 12
              break
            }
            Module_14.a.log({
              type: "error",
              messageId: "argNotNumber",
              widgetId: t,
              values: {
                name: "起点y"
              }
            })
            return e.abrupt("return")
          case 12:
            if (Module_12.h(t, {
              updateAt: Date.now()
            }), s = Ko(t), c = null === s || undefined === s ? undefined : s.get_brush(), s && c) {
              e.next = 17
              break
            }
            return e.abrupt("return")
          case 17:
            l = Math.max(n, 0)
            u = Math.max(r, 0)
            d = s.get_rotation()
            e.next = 22
            return new Promise(function (e, t) {
              c.set_pen_up()
              s.set_position(o, i)
              c.set_pen_down()
              if (0 !== l) {
                for (var n = 0; n < l; n++) {
                  s.set_rotation(360 * n / l / 180 * Math.PI)
                  s.move_forward(u)
                }
              }
              s.set_rotation(d)
              e(true)
            })
          case 22:
            Ba(t)
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Za(e) {
  var t = Pa(e)
  if (!(null === t || undefined === t)) {
    t.set_pen_down()
  }
  Module_12.h(e, {
    isPenDown: true
  })
}
function Ja(e) {
  var t = Pa(e)
  if (!(null === t || undefined === t)) {
    t.set_pen_up()
  }
  Module_12.h(e, {
    isPenDown: false
  })
}
function $a(e, t) {
  var n = xa(t)
  if (Src_shared_tools_index.pb(n)) {
    var r = n.slice(1)
    var o = Pa(e)
    if (!(null === o || undefined === o)) {
      o.set_color(r)
    }
    Module_12.h(e, {
      color: n
    })
  } else {
    Module_14.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    })
  }
}
function es(e, t) {
  var n = xa(t)
  if (Src_shared_tools_index.pb(n)) {
    var r = n.slice(1)
    var o = Pa(e)
    if (!(null === o || undefined === o)) {
      o.set_fill_color(r)
    }
  } else {
    Module_14.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    })
  }
}
function ts(e, t) {
  var n = Pa(e)
  if ("start" === t) {
    if (!(null === n || undefined === n)) {
      n.set_fill_start()
    }
  } else {
    if (!(null === n || undefined === n)) {
      n.draw_fill_pattern()
    }
  }
}
function ns(e) {
  var t = Pa(e)
  var n = null === t || undefined === t ? undefined : t.get_color()
  return n ? "#" + n : (console.error("getBrushColor error", n), "")
}
function rs(e, t) {
  if ("number" === typeof t) {
    var n = Math.max(Math.min(Math.round(t), Module_277.e), 1)
    var r = Pa(e)
    if (!(null === r || undefined === r)) {
      r.set_size(n)
    }
    Module_12.h(e, {
      penSize: n
    })
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "粗细"
      }
    })
  }
}
function os(e, t, n) {
  if ("number" === typeof n) {
    var r = Pa(e)
    if (r) {
      var o = r.get_size() + t * n
      var i = Math.max(Math.min(Math.round(o), Module_277.e), 1)
      r.set_size(i)
      Module_12.h(e, {
        penSize: i
      })
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: "粗细"
      }
    })
  }
}
var is = {
  hue: "色相",
  brightness: "明度",
  saturation: "饱和度",
  alpha: "透明度"
}
function as(e, t, n) {
  if ("number" === typeof n) {
    var r = Pa(e)
    if (r) {
      if ("alpha" !== t) {
        var o = La(ns(e))
        switch (t) {
          case "hue":
            o[0] = n >= 0 && n <= 360 ? Math.round(n) : Math.round(n) % 360
            break
          case "saturation":
            o[1] = Math.min(Math.max(Math.round(n), 0), 100)
            break
          case "brightness":
            o[2] = Math.min(Math.max(Math.round(n), 0), 100)
            break
          case "opacity":
            o[3] = Math.min(Math.max(Math.round(n), 0), 100)
            break
          default:
            console.error("setBrushColorProperty error property", t)
        }
        var i = Ma(o[0], o[1], o[2], o[3])
        r.set_color(i.slice(1))
        Module_12.h(e, {
          color: i
        })
      } else {
        var s = n / 100
        r.set_alpha(1 - s)
      }
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: is[t] || ""
      }
    })
  }
}
function ss(e, t, n, r) {
  if ("number" === typeof r) {
    var o = Pa(e)
    if (o) {
      if ("alpha" !== t) {
        var i = La(ns(e))
        var s = r * n
        var c = i[0] + s
        var l = i[1] + s
        var u = i[2] + s
        var d = i[3] + s
        switch (t) {
          case "hue":
            i[0] = c >= 0 && c <= 360 ? Math.round(c) : Math.round(c) % 360
            break
          case "saturation":
            i[1] = Math.min(Math.max(Math.round(l), 0), 100)
            break
          case "brightness":
            i[2] = Math.min(Math.max(Math.round(u), 0), 100)
            break
          case "opacity":
            i[3] = Math.min(Math.max(Math.round(d), 0), 100)
            break
          default:
            console.error("changeBrushColorProperty error property", t)
        }
        var p = Ma(i[0], i[1], i[2], i[3])
        o.set_color(p.slice(1))
        Module_12.h(e, {
          color: p
        })
      } else {
        var f = r / 100 * n
        o.set_alpha(o.get_alpha() - f)
      }
    }
  } else {
    Module_14.a.log({
      type: "error",
      messageId: "argNotNumber",
      widgetId: e,
      values: {
        name: is[t] || ""
      }
    })
  }
}
function cs(e, t) {
  var n = Pa(e)
  if (n) {
    var r = La(ns(e))
    switch (t) {
      case "hue":
        return Math.round(r[0])
      case "saturation":
        return Math.round(r[1])
      case "brightness":
        return Math.round(r[2])
      case "opacity":
        return Math.round(r[3])
      case "alpha":
        return Math.ceil(100 - 100 * n.get_alpha())
      default:
        console.error("getBrushColorProperty error property", t)
    }
  }
}
function ls(e) {
  var t = Pa(e)
  return null === t || undefined === t ? undefined : t.get_size()
}
function us(e) {
  var t = Ko(e)
  if (t) {
    var n = t.get_rotation()
    return Math.round(180 * n / Math.PI)
  }
}
function ds(e, t) {
  var n = Ko(e)
  var r = null === n || undefined === n ? undefined : n.get_brush()
  if (n && r) {
    var o = Module_12.a(e)
    if (o) {
      var /* [auto-meaningful-name] */o$widgetIds$length = o.widgetIds.length
      var s = n.get_z_index()
      switch (t) {
        case "up":
          n.set_z_index(s + 1)
          break
        case "down":
          n.set_z_index(s - 1)
          break
        case "top":
          n.set_z_index(o$widgetIds$length - 1)
          break
        case "bottom":
          n.set_z_index(0)
      }
    }
  }
}
export { di }
export { pi }
export { fi }
export { hi }
export { mi }
export { vi }
export { bi }
export { yi }
export { Ei }
export { Oi }
export { wi }
export { Ti }
export { Si }
export { Ai }
export { Ii }
export { ji }
export { Ni }
export { Ri }
export { xi }
export { Mi }
export { Pi }
export { Bi }
export { Gi }
export { Ui }
export { Hi }
export { Vi }
export { zi }
export { Yi }
export { Ki }
export { Xi }
export { Qi }
export { Zi }
export { Ji }
export { $i }
export { ea }
export { ta }
export { na }
export { ra }
export { oa }
export { ia }
export { aa }
export { sa }
export { ca }
export { la }
export { fa }
export { ha }
export { ma }
export { ga }
export { _a }
export { va }
export { ba }
export { ya }
export { Ea }
export { Oa }
export { wa }
export { Ca }
export { Ta }
export { Sa }
export { Aa }
export { Ia }
export { ja }
export { Na }
export { Ra }
export { ka }
export { xa }
export { Da }
export { Ma }
export { La }
export { Fa }
export { Ga }
export { Wa }
export { Ha }
export { za }
export { Ya }
export { qa }
export { Xa }
export { Za }
export { Ja }
export { $a }
export { es }
export { ts }
export { ns }
export { rs }
export { os }
export { as }
export { ss }
export { cs }
export { ls }
export { us }
export { ds }
