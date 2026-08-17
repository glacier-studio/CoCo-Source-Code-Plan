/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-22
 */

"use strict"

var kd
import * as /* [auto-meaningful-name] */Module_174 from /* 174 */"../../174"
import * as /* [auto-meaningful-name] */Module_89 from /* 89 */"./89"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../index"
import * as /* [auto-meaningful-name] */Module_84 from /* 84 */"../84"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_25 from /* 25 */"../../25/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../9"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../68"
import * as /* [auto-meaningful-name] */Module_91 from /* 91 */"../../91"
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"../../14"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import * as /* [auto-meaningful-name] */Module_47 from /* 47 */"../../47"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Module_147 from /* 147 */"../../147"
!function (e) {
  e.INSERT_ERROR = "E1"
  e.COLUMN_CANNOT_FOUND = "E2"
}(kd || (kd = {}))
var Md = {}
function Ld(e, t, n) {
  return e.then(function (e) {
    if (t) {
      return e ? Promise.resolve(t.apply(undefined, Module_25.a(e))) : Promise.resolve(t())
    }
  }).catch(function (e) {
    var t
    var r = {
      cloudDBName: (null === (t = Md[e.cloudDBId]) || undefined === t ? undefined : t.name) || "",
      errorInfo: e.errorInfo,
      code: e.code
    }
    Module_20.emitCloudDBError(JSON.stringify(r))
    Module_14.a.condition(false, {
      type: "error",
      message: r.errorInfo
    })
    if (n) {
      return Promise.resolve(n(r.errorInfo))
    }
  })
}
function Pd(e) {
  for (var t in e) {
    var n = e[t]
    if (n.type === Src_editor_widget_builtIn_types.h) {
      Md[n.attributes.cloudDbId] = {
        columnInfo: n.attributes.columns,
        name: n.attributes.name
      }
    }
  }
}
function Bd(e, t, n, r) {
  return Fd.apply(this, arguments)
}
function Fd() {
  return (Fd = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Ld(Module_7.a(RegeneratorRuntime.mark(function e() {
              var r
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, i = n instanceof Array ? n : n.split(","), Array.isArray(i)) {
                        e.next = 4
                        break
                      }
                      throw new Error("插入数据格式错误")
                    case 4:
                      if (!i.every(function (e) {
                        return "" === e
                      })) {
                        e.next = 6
                        break
                      }
                      throw new Error("插入空数据错误")
                    case 6:
                      e.next = 14
                      break
                    case 8:
                      e.prev = 8
                      e.t0 = e.catch(0)
                      e.t0.cloudDBId = t
                      e.t0.errorInfo = e.t0.message
                      e.t0.code = kd.INSERT_ERROR
                      throw e.t0
                    case 14:
                      e.prev = 14
                      e.next = 17
                      return Module_147.l(t, i)
                    case 17:
                      return e.abrupt("return", undefined)
                    case 20:
                      e.prev = 20
                      e.t1 = e.catch(14)
                      r = JSON.parse(e.t1.message)
                      e.t1.cloudDBId = t
                      e.t1.errorInfo = r.msg
                      e.t1.code = r.code
                      throw e.t1
                    case 27:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 8], [14, 20]])
            }))(), r, o))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Gd(e, t, n, r, o, i) {
  return Wd.apply(this, arguments)
}
function Wd() {
  return (Wd = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
    var s
    var c
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = Md[t].columnInfo || []
            c = s.find(function (e) {
              return e.id === n || e.name === n
            })
            return e.abrupt("return", Ld(Module_7.a(RegeneratorRuntime.mark(function e() {
              var n
              var i
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, c) {
                        e.next = 7
                        break
                      }
                      (n = new Error()).cloudDBId = t
                      n.errorInfo = "所选列不存在"
                      n.code = kd.COLUMN_CANNOT_FOUND
                      throw n
                    case 7:
                      e.next = 9
                      return Module_147.k(t, c.id, r, o)
                    case 9:
                      return e.abrupt("return", undefined)
                    case 12:
                      e.prev = 12
                      e.t0 = e.catch(0)
                      i = JSON.parse(e.t0.message)
                      e.t0.cloudDBId = t
                      e.t0.errorInfo = i.msg
                      e.t0.code = i.code
                      throw e.t0
                    case 19:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 12]])
            }))(), i, a))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Ud(e, t, n, r, o, i, a, s) {
  return Hd.apply(this, arguments)
}
function Hd() {
  return (Hd = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a, s, c) {
    var l
    var u
    var d
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            l = Md[t].columnInfo || []
            u = l.find(function (e) {
              return e.id === n || e.name === n
            })
            d = l.find(function (e) {
              return e.id === i || e.name === i
            })
            return e.abrupt("return", Ld(Module_7.a(RegeneratorRuntime.mark(function e() {
              var n
              var i
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, u && d) {
                        e.next = 7
                        break
                      }
                      (n = new Error()).cloudDBId = t
                      n.errorInfo = "所选列不存在"
                      n.code = kd.COLUMN_CANNOT_FOUND
                      throw n
                    case 7:
                      e.next = 9
                      return Module_147.o(t, u.id, r, o, d.id, a)
                    case 9:
                      return e.abrupt("return", undefined)
                    case 12:
                      e.prev = 12
                      e.t0 = e.catch(0)
                      i = JSON.parse(e.t0.message)
                      e.t0.cloudDBId = t
                      e.t0.errorInfo = i.msg
                      e.t0.code = i.code
                      throw e.t0
                    case 19:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 12]])
            }))(), s, c))
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Vd(e, t, n, r, o, i) {
  return zd.apply(this, arguments)
}
function zd() {
  return (zd = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o, i, a) {
    var s
    var c
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = Md[t].columnInfo || []
            c = s.find(function (e) {
              return e.id === n || e.name === n
            })
            return e.abrupt("return", Ld(Module_7.a(RegeneratorRuntime.mark(function e() {
              var n
              var /* [auto-meaningful-name] */e$sent
              var a
              var s
              var l
              var u
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (c) {
                        e.next = 6
                        break
                      }
                      (n = new Error()).cloudDBId = t
                      n.errorInfo = "所选列不存在"
                      n.code = kd.COLUMN_CANNOT_FOUND
                      throw n
                    case 6:
                      e.prev = 6
                      e.next = 9
                      return Module_147.m(t, c.id, r, o)
                    case 9:
                      if (e$sent = e.sent) {
                        e.next = 12
                        break
                      }
                      return e.abrupt("return", [])
                    case 12:
                      a = e$sent.columns || []
                      s = e$sent.records || []
                      l = s.map(function (e) {
                        var /* [auto-meaningful-name] */e$values = e.values
                        var n = []
                        a.forEach(function (e) {
                          n.push(Yd(e$values[e.id], e.type))
                        })
                        return n
                      })
                      return e.abrupt("return", [l])
                    case 18:
                      e.prev = 18
                      e.t0 = e.catch(6)
                      u = JSON.parse(e.t0.message)
                      e.t0.cloudDBId = t
                      e.t0.errorInfo = u.msg
                      e.t0.code = u.code
                      throw e.t0
                    case 25:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[6, 18]])
            }))(), i, a))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Yd(e, t) {
  return e ? "number" === t ? Number(e) : "boolean" === t ? "true" === e : e : ""
}
function Kd(e, t, n, r) {
  return qd.apply(this, arguments)
}
function qd() {
  return (qd = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r, o) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Ld(Module_7.a(RegeneratorRuntime.mark(function e() {
              var /* [auto-meaningful-name] */e$sent
              var o
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      e.prev = 0
                      e.next = 3
                      return Module_147.n(t, n)
                    case 3:
                      e$sent = e.sent
                      return e.abrupt("return", [e$sent])
                    case 7:
                      e.prev = 7
                      e.t0 = e.catch(0)
                      o = JSON.parse(e.t0.message)
                      e.t0.cloudDBId = t
                      e.t0.errorInfo = o.msg
                      e.t0.code = o.code
                      throw e.t0
                    case 14:
                    case "end":
                      return e.stop()
                  }
                }
              }, e, null, [[0, 7]])
            }))(), r, o))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Xd(e) {
  if (e) {
    for (var t in e) {
      var n = e[t]
      if (null === n || undefined === n ? undefined : n.cdnUrl) {
        Src_shared_tools_index.bb(t, null === n || undefined === n ? undefined : n.cdnUrl)
      }
    }
  }
}
function Qd(e, t) {
  Module_84.Eb(e);
  (function (e) {
    Module_48.a().getState().widgetMap.forEach(function (t) {
      if (t.type === Src_editor_widget_builtIn_types.A && t.attributes.dataSource === e) {
        Module_12.h(t.id, {
          dataUpdatedAt: Date.now()
        })
      }
    })
  })(e)
  Module_174.a.put(t).then(function () {
    Module_91.a({
      type: Module_68.b.PLAYER_DATA_WATCH,
      data: {
        screenId: Module_48.a().getState().currentScreenId,
        tab: Src_editor_widget_builtIn_types.G,
        id: e,
        value: t
      }
    })
  }).catch(function (e) {
    console.error(e)
  })
  Module_89.b.set(e, t)
}
function Zd(e, t, n, r) {
  var o = Module_89.b.get(e)
  if (o) {
    var i = cp(o, t)
    if (!i) {
      return void Module_14.a.log({
        type: "error",
        messageId: "columnNotExists",
        widgetId: e
      })
    }
    if ("number" !== typeof n) {
      return void Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "行"
        },
        widgetId: e
      })
    }
    var a = Math.round(n)
    if (a <= 0 || a > o.data.length) {
      return void Module_14.a.log({
        type: "error",
        messageId: "rowNotExists",
        widgetId: e
      })
    }
    o.data[a - 1][i] = "object" === typeof r ? JSON.stringify(r) : String(r)
    Qd(e, o)
  }
}
function Jd(e, t) {
  var n = Module_89.b.get(e)
  if (n) {
    for (var r in t) t[r] = "object" === typeof t[r] ? JSON.stringify(t[r]) : String(t[r])
    var o = Module_6.a({
      rowId: Module_28.j("ROW")
    }, t)
    n.data.push(o)
    Qd(e, n)
  }
}
function $d(e, t, n) {
  var r = Module_89.b.get(e)
  if (r) {
    if ("number" !== typeof t) {
      return void Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "行"
        },
        widgetId: e
      })
    }
    var o = Math.round(t)
    if (o <= 0) {
      return void Module_14.a.log({
        type: "error",
        messageId: "rowNotExists",
        widgetId: e
      })
    }
    for (var a in n) n[a] = "object" === typeof n[a] ? JSON.stringify(n[a]) : String(n[a])
    var s = Module_6.a({
      rowId: Module_28.j("ROW")
    }, n)
    if (o > r.data.length) {
      r.data.push(s)
    } else {
      r.data.splice(o - 1, 0, s)
    }
    Qd(e, r)
  }
}
function ep(e) {
  var t = Module_89.b.get(e)
  if (t) {
    if (0 === t.data.length) {
      return void Module_14.a.log({
        type: "error",
        messageId: "rowNotExists",
        widgetId: e
      })
    }
    t.data.pop()
    Qd(e, t)
  }
}
function tp(e) {
  var t = Module_89.b.get(e)
  if (t) {
    t.data = []
    Qd(e, t)
  }
}
function np(e, t) {
  var n = Module_89.b.get(e)
  if (n) {
    if ("number" !== typeof t) {
      return void Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "行"
        },
        widgetId: e
      })
    }
    var r = Math.round(t)
    if (r <= 0 || r > n.data.length) {
      return void Module_14.a.log({
        type: "error",
        messageId: "rowNotExists",
        widgetId: e
      })
    }
    n.data.splice(r - 1, 1)
    Qd(e, n)
  }
}
function rp(e, t, n) {
  var r = Module_89.b.get(e)
  if (r) {
    var o = cp(r, t)
    if (!o) {
      return void Module_14.a.log({
        type: "error",
        messageId: "columnNotExists",
        widgetId: e
      })
    }
    if ("number" !== typeof n) {
      return void Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "行"
        },
        widgetId: e
      })
    }
    var i = Math.round(n)
    return i <= 0 || i > r.data.length ? void Module_14.a.log({
      type: "error",
      messageId: "rowNotExists",
      widgetId: e
    }) : r.data[i - 1][o] || ""
  }
}
function op(e) {
  var t = Module_89.b.get(e)
  return (null === t || undefined === t ? undefined : t.data.length) || 0
}
function ip(e, t) {
  var n = Module_89.b.get(e)
  if (n) {
    var r = cp(n, t)
    if (!r) {
      return void Module_14.a.log({
        type: "error",
        messageId: "columnNotExists",
        widgetId: e
      })
    }
    var o = []
    n.data.forEach(function (e) {
      return o.push(e[r] || "")
    })
    return o
  }
}
function ap(e) {
  var t = Module_89.b.get(e)
  if (t) {
    if (0 === t.data.length) {
      return void Module_14.a.log({
        type: "error",
        messageId: "rowNotExists",
        widgetId: e
      })
    }
    var n = {}
    var r = t.data[t.data.length - 1]
    for (var o in t.header) {
      n[t.header[o].field] = r[o] || ""
    }
    return n
  }
}
function sp(e, t) {
  var n = Module_89.b.get(e)
  if (n) {
    if ("number" !== typeof t) {
      return void Module_14.a.log({
        type: "error",
        messageId: "argNotNumber",
        values: {
          name: "行"
        },
        widgetId: e
      })
    }
    var r = Math.round(t)
    if (r <= 0 || r > n.data.length) {
      return void Module_14.a.log({
        type: "error",
        messageId: "rowNotExists",
        widgetId: e
      })
    }
    var o = {}
    var i = n.data[r - 1]
    for (var a in n.header) {
      o[n.header[a].field] = i[a] || ""
    }
    return o
  }
}
function cp(e, t) {
  var n = ""
  if ("number" === typeof t) {
    var r = Math.round(t)
    if (r <= 0 || r > Object.keys(e.header).length) {
      return n
    }
    var o = 1
    for (var i in e.header) {
      if (o === r) {
        n = i
        break
      }
      o++
    }
  }
  if ("string" === typeof t) {
    for (var a in e.header) if (a === t || e.header[a].field === t) {
      n = a
      break
    }
  }
  return n
}
function lp(e, t) {
  var n = Object.keys(e)
  var r = Object.keys(t)
  return {
    addColumnsIds: r.filter(function (e) {
      return -1 === n.indexOf(e)
    }),
    removeColumnsIds: n.filter(function (e) {
      return -1 === r.indexOf(e)
    }),
    updateColumns: r.filter(function (e) {
      return n.indexOf(e) >= 0
    }).filter(function (n) {
      return e[n].field !== t[n].field
    })
  }
}
function up(e, t, n) {
  return dp.apply(this, arguments)
}
function dp() {
  return (dp = Module_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */o$addColumnsIds
    var /* [auto-meaningful-name] */o$removeColumnsIds
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var l
    var u
    var d
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = lp(n.header, r.header)
            o$addColumnsIds = o.addColumnsIds
            o$removeColumnsIds = o.removeColumnsIds
            e.next = 3
            return Module_174.a.get(t)
          case 3:
            if (e$sent = e.sent) {
              e.next = 10
              break
            }
            e.next = 7
            return Module_174.a.put(r)
          case 7:
            e.next = 9
            return Module_174.a.get(t)
          case 9:
            return e.abrupt("return", e.sent)
          case 10:
            e$sent$data = e$sent.data
            l = Module_47.a(e$sent$data)
            try {
              for (d = function () {
                var /* [auto-meaningful-name] */u$value = u.value
                o$removeColumnsIds.forEach(function (t) {
                  delete u$value[t]
                })
              }, l.s(); !(u = l.n()).done;) {
                d()
              }
            } catch (p) {
              l.e(p)
            } finally {
              l.f()
            }
            e$sent.header = r.header
            o$addColumnsIds.forEach(function (e) {
              var t = r.data.map(function (t) {
                return t[e]
              })
              e$sent$data.forEach(function (n) {
                n[e] = t.pop() || ""
              })
            })
            e.next = 17
            return Module_174.a.put(e$sent)
          case 17:
            e.next = 19
            return Module_174.a.get(t)
          case 19:
            return e.abrupt("return", e.sent)
          case 20:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function pp(e) {
  return fp.apply(this, arguments)
}
function fp() {
  return (fp = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */n$attributes$db
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!(n = Module_9.Bb(t))) {
              e.next = 10
              break
            }
            n$attributes$db = n.attributes.db
            e.next = 5
            return Module_174.a.get(t)
          case 5:
            if (!e.sent) {
              e.next = 9
              break
            }
            e.next = 9
            return Module_174.a.put(Module_6.a({
              id: n.id,
              name: n.title
            }, n$attributes$db))
          case 9:
            Module_91.a({
              type: Module_68.b.PLAYER_DATA_WATCH,
              data: {
                screenId: Module_48.a().getState().currentScreenId,
                tab: Src_editor_widget_builtIn_types.G,
                id: t,
                value: n$attributes$db
              }
            })
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { Pd }
export { Bd }
export { Gd }
export { Ud }
export { Vd }
export { Kd }
export { Xd }
export { Zd }
export { Jd }
export { $d }
export { ep }
export { tp }
export { np }
export { rp }
export { op }
export { ip }
export { ap }
export { sp }
export { lp }
export { up }
export { pp }
